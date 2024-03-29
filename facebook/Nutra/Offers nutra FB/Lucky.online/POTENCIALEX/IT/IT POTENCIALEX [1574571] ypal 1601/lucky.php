<?php

include_once './lib/cURL.php'; //обязательно проверьте наличие папки lib  на вашем сервере

//подробнее об этом методе https://faq.lucky.online/ru/articles/5700922
define('TOKEN', '61ccb218c1e05832211915159862');
// Токен вебмастера - попросите своего менеджера открыть прием лидов по АПИ, сам токен хранится здесь https://lucky.online/webmaster/profile.html
define('CAMPAIGN_HASH', 'c6ac754a-b9e8-4ac8-a45c-15b0dabf9962');
// Хеш потока. Сформируйте поток ЛЮБЫМ методом в ПП - возьмие хеш по примеру "7aa2ecee-e9d6-41e2-b974-9dff9ac3af11"

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ip = $_SERVER['REMOTE_ADDR']; // IP адрес ( Поле обязательное )
    $name = $_POST['name']; // Имя ( Поле обязательное )
    $phone = $_POST['phone']; // Телефон ( Поле обязательное )
    $userAgent = $_SERVER['HTTP_USER_AGENT']; // userAgent ( Поле обязательное )
    $utm_source = $_POST['utm_source'];
    $utm_content = $_POST['utm_content'];
    $utm_campaign = $_POST['utm_campaign'];
    // $utm_term = $_POST['utm_term'];
    $utm_term = $_POST['idpxl'];
    $utm_medium = $_POST['utm_medium'];
    $subid = $_POST['subid']; //в статистике ПП этот параметр не отображается, но возвращется в постбеке
    $subid1 = $_POST['subid1'];
    $subid2 = $_POST['subid2'];
    $subid3 = $_POST['subid3'];
    $country = $_POST['country']; //страна для обзвона ( Поле обязательное ) в формате UA, IT, TH и т.д.В данном случаем берется страна из селектора страны с ленда.
    $idpxl = $_POST['idpxl'];

    $data = [
        'campaign_hash' => CAMPAIGN_HASH,
        'ip' => $ip,
        'name' => $name,
        'phone' => $phone,
        'user_agent' => $userAgent,
        'country' => $country,
        'subid' => $subid,
        'subid1' => $subid1,
        'subid2' => $subid2,
        'subid3' => $subid3,
        'utm_source' => $utm_source,
        'utm_content' => $utm_content,
        'utm_campaign' => $utm_campaign,
        'utm_term' => $utm_term,
        'utm_medium' => $utm_medium,
    ];

    $curl = new cURL;
    $response = $curl->post('https://lucky.online/api/v1/lead-create/webmaster?api_key=' . TOKEN, $data);

    $body = json_decode($response->body, true);

    //если ошибка создания лида, то раскоментить строчку НИЖЕ,сохранить этот файл,  отправить еще раз лид и посмотреть ошибку почему сервер не принимает заказ
    //var_dump($body);exit;


    //запись ВСЕХ лидов в файл log.txt, если есть в строчке заполненный click_id, то лид увидите в ПП
    $date = date("Y-m-d H:i:s");
    $message = $body['response']['status'] == 'success' ? "click_id: {$body['response']['content']['click_id']}" : $body['response']['message'];
    $string = "Date: {$date}, name: {$name}, phone: {$phone}, ip: {$ip}, hash: " . CAMPAIGN_HASH . ", status: {$body['response']['status']}, message: {$message}" . PHP_EOL;
    file_put_contents('./log.txt', $string, FILE_APPEND);

    //блок отправки лида в ПП
    if ($body['response']['status'] == 'success') {
        $schema = ($_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
        $link = $schema . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $separator = (strripos($link, '?') === false) ? '?' : '&';
        $link .= $separator . 'name=' . $name . '&phone=' . $phone;

        // Если лид пришел без ошибок, данные для переотправки лида сетятся в куки на 1час
        setcookie('name', $name, time() + 3600, '/');
        setcookie('phone', $phone, time() + 3600, '/');
        setcookie('landingHash', CAMPAIGN_HASH, time() + 3600, '/');

        //код пикселя фб записывать в файл confirm.html - найти его в папке, открыть - внести код пикселя
        header('Location: ./confirm.php?name=' . $name . '&phone=' . $phone  . '&idpxl=' . $idpxl . '&clickid=' . $body['response']['content']['click_id'], true);

        exit();
    } else {


        header('Location: ./error.php', true);
        exit();
    }
} else {
    $name = $_GET['name'];
    $phone = $_GET['phone'];
}
