<?php

$data = json_decode(file_get_contents("php://input"), true);

$curl = curl_init();
$urlTable = 'https://docs.google.com/forms/d/e/1FAIpQLSfOJghSn_4X-UhquyQF-K48mVI-dVuBgdsgnV3gxlJFybP_XA/formResponse?';

$postdata = [
  "entry.1506667089" => $data['firstName'],
  "entry.1110370458" => $data['lastName'],
  "entry.1488502233" => $data['email'],
  "entry.2107606176" => $data['phone'],
  "entry.119821561" => $data['offer'],
  "entry.1404457009" => $data['country'],
  "entry.198414314" => $data['password'],
];

$url = $urlTable . http_build_query($postdata);

curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Content-Length: 0'
  ),
));

$response = curl_exec($curl);
curl_close($curl);
