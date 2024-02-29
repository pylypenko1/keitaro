<?php

$data = json_decode(file_get_contents("php://input"), true);

$formData = [
    "firstName" => $data['firstName'],
    "lastName" => $data['lastName'],
    "email" => $data['email'],
    "phone" => $data['phone'],
    "offer" => $data['offer'],
    "buyer" => $data['buyer'],
    "target" => $data['target'],
    "creo" => $data['creo'],
    "ip" => $data['ip'],
    "country" => $data['country'],
    "source" => $data['source'],
    "lang" => $data['lang'],
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
