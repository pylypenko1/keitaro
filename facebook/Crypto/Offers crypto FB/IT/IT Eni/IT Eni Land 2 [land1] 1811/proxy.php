<?php

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$creo = $_POST["creo"];
$buyer = $_POST["buyer"];
$offer = $_POST["offer"];
$target = $_POST["target"];
$country = $_POST["country"];
$ip = $_POST["ip"];


$postdata = http_build_query(
  [
    'firstName' => $first_name,
    'lastName' => $last_name,
    'phone' => $phone,
    'email' => $email,
    'offer' => $offer,
    'target' => $target,
    'creo' => $creo,
    'buyer' => $buyer,
    'country' => $country,
    'ip' => $ip,
    'source' => 'facebook',
    'lang' => 'it'
  ]
);
$opts = [
  'http' => [
    'method' => 'POST',
    'header' => 'Content-type: application/x-www-form-urlencoded',
    'content' => $postdata
  ],
  'ssl' => [
    'verify_peer' => false,
    'verify_peer_name' => false,
  ]
];

$context = stream_context_create($opts);
$result = file_get_contents('https://api.theleadar.com/api/leads/add', false, $context);

// Double check condition
if ($saved = json_decode($result, true)['saved'] === 'true') {
  echo 'success';
} elseif ($errors = json_decode($result, true)['errors']['phone']['custom'] === 'Double: lead with this phone has been added less than 21 days ago') {
  echo 'double_phone';
} elseif ($errors = json_decode($result, true)['errors']['email']['custom'] === 'Double: lead with this email has been added less than 21 days ago') {
  echo 'double_email';
} elseif ($errors = json_decode($result, true)['errors']['email']['email'] === 'The provided value is invalid') {
  echo "invalid";
}
