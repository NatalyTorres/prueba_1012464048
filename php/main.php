<?php

$text = $_POST['text'];
$text = strtolower($text);
$text = str_replace( array("á","é","í","ó","ú"," ", ",", "."), array("a","e","i","o","u","","",""), $text );


$reverse = strrev($text);
$reverse = strtolower($reverse);
$reverse = str_replace( array("á","é","í","ó","ú"," ", ",", "."), array("a","e","i","o","u","","",""), $reverse );

if ($text == $reverse) {
    echo 1;
} else {
    echo 2;
}
