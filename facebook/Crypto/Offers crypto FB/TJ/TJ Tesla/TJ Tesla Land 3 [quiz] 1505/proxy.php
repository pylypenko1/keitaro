<?php

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$country = $_POST["country"];
$creo = $_POST["creo"];
$buyer = $_POST["buyer"];
$offer = $_POST["offer"];
$target = $_POST["target"];
$quiz1 = $_POST["quiz1"];
$quiz2 = $_POST["quiz2"];
$quiz3 = $_POST["quiz3"];
$quiz4 = $_POST["quiz4"];
$ip = $_POST["ip"];
$valid = $_POST["valid"];


if ($valid == "false") {
  $curl = curl_init();
  $urlTable = 'https://docs.google.com/forms/d/e/1FAIpQLSfh1kr-vIlGSLmkicH0Ll-aqjjCcbNfdJqySM_jBsPeM7nqEg/formResponse?';
  $postdata = [
    "entry.895058114" => $first_name,
    "entry.574536951" => $last_name,
    "entry.1725944192" => $phone,
    "entry.1294138958" => $email,
    "entry.859052651" => $offer,
    "entry.1702336226" => $target,
    "entry.2129053255" => $creo,
    "entry.332199513" => $buyer,
    "entry.503409703" => $country,
    "entry.1009699525" => $ip,
    "entry.328959880" => 'facebook',
    "entry.934178618" => 'ru',
    // "entry.1730153524" => 'quiz'
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

  echo "redirect_invalid";
} else {

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
      'lang' => 'ru',
      // 'quiz' => "1. {$quiz1}.  2. {$quiz2}.  3. {$quiz3}.  4. {$quiz4}."
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
}
