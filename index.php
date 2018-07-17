<?php
/*
 * Autor: Alberto De Jesus
 * Fecha: 17 / 7 / 2018
 * Proyecto: DigiSalud
 */
$url = "./";
$name = "Home";
include $url . 'config_bto.php';
?>

<!DOCTYPE html>
<html lang="es">
    <?= head($url, $name); ?>
    <style>
        #dig-section-left h2{
            /*font-weight: bold;*/
            font-size:3em;
            padding-bottom: 30px;
        }
        #dig-section-left p{
            /*font-weight: bold;*/
            font-size:1.5em;
            padding-bottom: 30px;
        }
    </style>
    <body>
        <div class="container-fluid">

            <!--HEADER-->
            <div class="row dig-deg-orange">
                <div class="dig-header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4 ">
                            </div>
                            <div class="col-md-4 text-center">
                                <img src="vendor/bto/digisalud-logo.png">
                                <div class="inner-addon left-addon">
                                    <i class="fa fa-search"></i>
                                    <input type="search" class="col-md-12 mt-4 mb-5" placeholder="Búsqueda"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="dig-sub-header">
                    <div class="container-fluid">
                        <div class="row text-center align-items-end">
                            <div class="col-md-3">
                                <img src="vendor/bto/images/medicinaGeneral.png"/>
                                <span>128</span>
                                <p>JORNADAS</p>
                            </div>
                            <div class="col-md-3">
                                <img src="vendor/bto/images/medicinaGeneral.png"/>
                                <span>16</span>
                                <p>VOLUNTARIOS</p>
                            </div>
                            <div class="col-md-3">
                                <span>1345</span>
                                <p>BENEFICIARIOS</p>
                            </div>
                            <div class="col-md-3">
                                <span>1</span>
                                <p>COMUNIDAD MÉDICA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/HEADER-->

            <!--CONTENIDO-->
            <div class="row align-items-center dig-backg-silver">
                <!--SECCION IZQUIERDA-->
                <div id="dig-section-left" class="col-md-6">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-12 col-md-auto">
                                <h2>¡Bienvenidos!</h2>
                                <p>
                                    En Digisalud unimos a través <br>
                                    de la teconología como <br>
                                    herramienta transformadora.
                                </p>
                                <button class="btn btn-dig-blue-inv">CREAR CUENTA</button>   
                            </div>
                        </div>
                    </div>
                </div>
                <!--/SECCION IZQUIERDA-->

                <!--SECCION DERECHA FORMULARIO-->
                <div class="col-md-6 dig-backg-white p-5">
                    <div class="container">

                        <div class="row justify-content-md-center">
                            <div class="col-md-10">
                                <h3><b>Iniciar Sesión</b></h3>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form form-md">
                                    <input type="text" id="inputSMEx" class="form-control form-control-sm" autocomplete="off">
                                    <label for="inputSMEx">Correo electronico</label>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form form-md">
                                    <input type="password" id="inputSMEx" class="form-control form-control-sm" autocomplete="off">
                                    <label for="inputSMEx">Contraseña</label>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <small><a href="#">¿olvidaste tu contraseña?</a></small>
                            </div>
                            <div class="col-md-10 pt-5 pb-5">
                                <button class="btn btn-dig-blue">ENTRAR</button>  
                            </div>
                            <div class="col-md-10">
                                <div class="round">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"></label> 
                                    <span>Seguir conectado</span>
                                </div>
                            </div>

                            <div class="col-md-10 pt-4 pb-4">
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-google-plus"></a>
                            </div>

                            <div class="col-md-10 pt-2 pb-4">
                                <div class="row">
                                    <div class="col-7">
                                        <a href="#">Términos y políticas de privacidad</a>
                                    </div>
                                    <div class="col-5">
                                        <a href="#">Problemas al entrar</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!--SECCION DERECHA FORMULARIO-->

            </div>
            <!--/CONTENIDO-->

        </div>
    </div>

    <?= scripts($url); ?>
</body>
</html>