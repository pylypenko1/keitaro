<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $formData = [
        "firstName" => $data['firstName'],
        "lastName" => $data['lastName'],
        "email" => $data['email'],
        "phone" => $data['phone'],
        "offer" => 'Kapital Invest',
        "buyer" => $data['buyer'],
        "target" => $data['target'],
        "creo" => $data['creo'],
        "ip" => $_SERVER['REMOTE_ADDR'],
        "country" => 'az',
        "source" => 'facebook',
        "lang" => 'ru',
        "quiz" => ''
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
    // if ($result !== false) {
    //     header("Location: thanks/success.html");
    //     exit();
    // } else {
    //     echo "Ошибка отправки формы";
    // }
} else {
    echo "Метод запроса не поддерживается";
}
