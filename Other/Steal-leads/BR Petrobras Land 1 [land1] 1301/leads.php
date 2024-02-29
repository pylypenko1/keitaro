<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: *");

$payload = file_get_contents('php://input');
$payload = json_decode($payload, true);

$phone = $payload['phone'];
$name = $payload['first_name'];
$url = $payload['host'];

?>