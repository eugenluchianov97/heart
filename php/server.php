<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

require './vendor/autoload.php';
//$user = $_POST['name'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// the message
$to = "somebody@example.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
    "CC: somebodyelse@example.com";

if(mail($to,$subject,$txt,$headers)){
    echo "true";
}
else {
    echo "False";
};
?>