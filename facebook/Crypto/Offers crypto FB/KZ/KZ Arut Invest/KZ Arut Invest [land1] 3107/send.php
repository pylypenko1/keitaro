<?php

$data = json_decode(file_get_contents("php://input"), true);

$formData = [
    "firstName" => $data['firstName'],
    "lastName" => $data['lastName'],
    "email" => $data['email'],
    "phone" => $data['phone'],
    "offer" => 'Arut Invest',
    "buyer" => $data['buyer'],
    "target" => $data['target'],
    "creo" => $data['creo'],
    "ip" => $data['ip'],
    "country" => 'kz',
    "source" => $data['source'],
    "lang" => 'ru',
    "quiz" => $data['quiz'],
    "clickId" => $data['clickId']
];
$url = 'https://api.solutionsulting.com/api/leads/add';

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($formData),
    ],
];
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;
