<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);
$name = trim($name);
$tel = trim($tel);
$email = trim($email);
if (mail("gilvanov_n@mail.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: info@gilvannik.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>