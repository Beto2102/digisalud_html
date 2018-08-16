<?php
/*error_reporting(E_ALL);
ini_set('display_errors', '1');*/
    $json     = $_POST["json"];
    $filename = $_POST["filename"];

    $fh = fopen("../static/".$filename, 'w+') or die("can't save file");
    echo $fh;
    $stringData = json_encode($json);
    fwrite($fh, $json);
    fclose($fh);
?>
