<?php

$curl = curl_init();
$urlTable = 'https://docs.google.com/forms/d/e/1FAIpQLSd7V5W9wCqqLEI_W_hvPHz9ojvQ5gceozpnZXUm27fkqOZgvw/formResponse?';

$postdata = [
    "entry.1734879765" => $f,
    "entry.1401168103" => $l,
    "entry.1568531577" => $e,
    "entry.1725665220" => $p
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