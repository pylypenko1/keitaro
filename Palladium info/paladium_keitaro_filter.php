<?php

namespace Filters;

use Core\Filter\AbstractFilter;
use Core\Locale\LocaleService;
use Traffic\Model\StreamFilter;
use Traffic\RawClick;


class Paladiumklo extends AbstractFilter
{
    public function getModes(): ?array
    {
        return [
            StreamFilter::ACCEPT => LocaleService::t('filters.binary_options.' . StreamFilter::ACCEPT),
            StreamFilter::REJECT => LocaleService::t('filters.binary_options.' . StreamFilter::REJECT),
        ];
    }


    public function getTemplate(): string
    {
        return 'Тип трафика: 
		<select class="form-control" ng-model="filter.payload.bannerSource">
			<option selected value="adwords">Google ADS</option>
			<option value="facebook">Facebook</option>
			<option value="tiktok">TikTok</option>
        </select>
		<br/>
        Paladium URL: <input type="url" class="form-control" ng-model="filter.payload.paladium_url" placeholder="https://palad.url"/>
        <br/>
        Client ID: <input type="number" class="form-control" ng-model="filter.payload.clientId"/>
        <br/>
        ClientCompany ID: <input  class="form-control" ng-model="filter.payload.clientCompany"/>
        <br/>
        ClientSecret: <input class="form-control" ng-model="filter.payload.clientSecret"/>
            ';
    }


    public function isPass(StreamFilter $filter, RawClick $rawClick): bool
    {
        $configs = $filter->getPayload();
        $headers = [];
        $headers['request'] = $this->collectRequestData();
        $headers['jsrequest'] = $this->collectJsRequestData();
        $headers['server'] = $this->collectHeaders();
        $headers['auth']['clientId'] = $configs['clientId'];
        $headers['auth']['clientCompany'] = $configs['clientCompany'];
        $headers['auth']['clientSecret'] = $configs['clientSecret'];
        $headers['server']['bannerSource'] = $configs['bannerSource'];
        
        $paladium_url = $configs['paladium_url'];
        $response = $this->curlSend($headers, $paladium_url);
        //file_put_contents("/var/www/keitaro/application/filters/fulleg.txt",json_encode($response)); //отладка


        return ($filter->getMode() == StreamFilter::ACCEPT && !$response)
        || ($filter->getMode() == StreamFilter::REJECT && $response);
    }

    public function curlSend(array $params, $paladium_url)
    {
        $answer = false;
        $curl = curl_init($paladium_url);
        if ($curl) {
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($params));

            curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 3);
            curl_setopt($curl, CURLOPT_TIMEOUT, 4);
            curl_setopt($curl, CURLOPT_TIMEOUT_MS, 4000);
            curl_setopt($curl, CURLOPT_FORBID_REUSE, true);

            $result = curl_exec($curl);
            if ($result) {
				$serverOut = json_decode(
					$result,
					true
				);
				$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
                
				if ($status == 200 && is_array($serverOut)) {
					$answer = $this->handleServerReply($serverOut);
					return $answer;
				}
			}
        }

		
        return $answer;
    }

    protected function collectHeaders()
    {
        $userParams = [
            'REMOTE_ADDR',
            'SERVER_PROTOCOL',
            'SERVER_PORT',
            'REMOTE_PORT',
            'QUERY_STRING',
            'REQUEST_SCHEME',
            'REQUEST_URI',
            'REQUEST_TIME_FLOAT',
            'X_FB_HTTP_ENGINE',
            'X_PURPOSE',
            'X_FORWARDED_FOR',
            'X_WAP_PROFILE',
            'X-Forwarded-Host',
            'X-Forwarded-For',
            'X-Frame-Options',
        ];

        $headers = [];
        foreach ($_SERVER as $key => $value) {
            if (in_array($key, $userParams) || substr_compare('HTTP', $key, 0, 4) == 0) {
                $headers[$key] = $value;
            }
        }
        if (!isset($headers['SERVER_PORT'])){
            $headers['SERVER_PORT'] = '443';
        }

        return $headers;
    }

    private function collectRequestData(): array
    {
        $data = [];
        if (!empty($_POST)) {
            if (!empty($_POST['data'])) {
            	$data = json_decode($_POST['data'], true);
            	if (JSON_ERROR_NONE !== json_last_error()) {
            		$data = json_decode(
						stripslashes($_POST['data']),
						true
					);
            	}
                unset($_REQUEST['data']);
            }

            if (!empty($_POST['crossref_sessionid'])) {
                $data['cr-session-id'] = $_POST['crossref_sessionid'];
                unset($_POST['crossref_sessionid']);
            }
        }

        return $data;
    }

    public function collectJsRequestData(): array
    {
        $data = [];
        if (!empty($_POST)) {
            if (!empty($_POST['jsdata'])) {
                $data = json_decode($_POST['jsdata'], true);
                if (JSON_ERROR_NONE !== json_last_error()) {
                    $data = json_decode(
                        stripslashes($_POST['jsdata']),
                        true
                    );
                }
                unset($_REQUEST['jsdata']);
            }
        }
        return $data;
    }

    protected function handleServerReply($reply)
    {
        $result = (bool) ($reply['result'] ? $reply['result'] : 0);

        return $result;
    }

}
