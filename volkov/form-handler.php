<?php

if(!empty($_POST)){
    $to= "";

    $name = $_POST['namee'];
    $tel = $_POST['tel'];

    //обработаем полученные данные

    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);

    $name = urldecode($name);
    $tel = urldecode($tel);

    $name = trim($name);
    $tel = trim($tel);

    /* тема/subject */
    $subject ="Заявка на консультацию";
    $text="Имя: " . $name . " " . "Телефон:" . $tel . " ";
    // foreach ( $_POST as $post ) {
    //     $text=$text.$post. "<br />";
    // }

    $text = htmlspecialchars($text);
    $text = urldecode($text);
    $text = trim($text);


    /* Для отправки HTML-почты вы можете установить шапку Content-type. */
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    /* дополнительные шапки */

    $headers .= "From: belberry.net <info@belberry.net>\r\n";
    //$headers .= "Cc: birthdayarchive@example.com\r\n";
    //$headers .= "Bcc: birthdaycheck@example.com\r\n";

    /* и теперь отправим из */
    if(mail($to, $subject, $text, $name, $tel)){
        echo 'success';
    }else{
        echo 'error';
    }
}