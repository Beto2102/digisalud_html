<?php
    error_reporting(E_ALL); ini_set('display_errors', 1);
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // $user = "fernando.lozano@icogroup.com";
    // $pass = "123456789";
    $userList = array(
        "fernando.lozano@icogroup.com"=>"123456789",
        "madeleine.thompson@icogroup.com"=>"123456789",
        "diego@inteliagency.com"=>"123456"
    );

    $roleList = array(
        "fernando.lozano@icogroup.com"=>"super",
        "madeleine.thompson@icogroup.com"=>"super",
        "diego@inteliagency.com"=>"admin"
    );

    $log = array_key_exists($user,$userList);
    if($log) {
        if ($userList[$user]==$pass) {
            exit("1");
        } else {
            exit("2");
        }
    } else {
        exit("3");
    }
?>
