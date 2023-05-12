<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

$phone  = str_replace(['-', ' ', '+'], '', $_REQUEST['full']);

$curl = curl_init();


curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://jm.jbomarketing.club/api/signup/procform',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => '{
    "ai": "2958070",
    "ci": "1",
    "gi": "44",
    "userip": "' . $_SERVER["REMOTE_ADDR"] . '",
    "firstname": "' . $_REQUEST["name"] . '", 
    "lastname": "' . $_REQUEST["lastname"] . '", 
    "email": "' . $_REQUEST["email"] . '", 
    "password": "' . $_REQUEST["password"] . '", 
    "phone": "' . $phone . '", 
    "so":"Tesler Quiz",
    "sub":"",
    "MPC_1":"",
    "MPC_2":"",
    "MPC_3":"'.$_REQUEST['querys'].'",
    "MPC_4":"",
    "MPC_5":"",
    "MPC_6":"",
    "MPC_7":"",
    "MPC_8":"",
    "MPC_9":"",
    "MPC_10":""
}',
  CURLOPT_HTTPHEADER => array(
    'x-trackbox-username: MediaBuying',
    'x-trackbox-password: P6Y5CGgpqkK.3pK',
    'x-api-key: 2643889w34df345676ssdas323tgc738',
    'Content-Type: application/json',
  ),
));

$response = curl_exec($curl);

curl_close($curl);

file_put_contents('log.data', print_r(json_decode($response), true), FILE_APPEND);

if (json_decode($response, true)['status'] == 1) {
  $_SESSION['r'] = json_decode($response, true)['data'];
}

file_put_contents('log.data', print_r($_SESSION['r'], true), FILE_APPEND);

header("Location: thanks/?fbp=".$_REQUEST['fbp']);

