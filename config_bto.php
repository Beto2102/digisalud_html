<?php
$web_name = " DigiSalud";
$web_url_desarrollador = "http://www.icogroup.com";
$web_name_desarrollador = "Icogroup";
$rif = "";
$version = "1.0.0";

// cabecera y metas
function head($base_url, $who_is) {
    global $web_name;
    ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta http-equiv="cache-control" content="no-cache">
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Expires" CONTENT="-1">
        <!--<link rel="shortcut icon" type="image/x-icon" href="<?= $base_url; ?>lib/common/img/unidos-logo.png"/>-->
    <title><?php echo $web_name . " | " . $who_is; ?> </title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="<?= $base_url; ?>vendor/MDB-Free/css/bootstrap.min.css" rel="stylesheet">
    <link href="<?= $base_url; ?>vendor/MDB-Free/css/mdb.min.css" rel="stylesheet">
    <link href="<?= $base_url; ?>vendor/fontawesome-free-5.2.0-web/css/all.min.css" rel="stylesheet">
    <link href="<?= $base_url; ?>vendor/bto/css/style.min.css" rel="stylesheet">
    <?php
}

//Menu
function menu($base_url, $who_is) {
    ?>

    <?php
}

//Pie de pagina
function footer($base_url) {
    global $rif;
    ?>

    <?php
}

//Cargando
function loader() {
    ?>
    <!--Logo cargando-->
    <div id = "cargador" hidden="">
        <div id="loader-wrapper">
            <div id="loader"></div>
            <h4>Cargando...</h4>
        </div>
    </div>
    <!--/Logo Cargando-->
    <?php
}

//javascripts comunes
function scripts($base_url) {
    ?>
    <script type="text/javascript" src="<?= $base_url; ?>vendor/MDB-Free/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>vendor/MDB-Free/js/popper.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>vendor/MDB-Free/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>vendor/MDB-Free/js/mdb.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>vendor/fontawesome-free-5.2.0-web/js/all.min.js"></script>
    <?php
}
?>
