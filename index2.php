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

    </style>
    <body>
        <!--DIV QUE OPACA LA PANTALLA-->
        <div id="div-oculto"></div>

        <!-- MENU DESPLEGABLE -->
        <div class="digi-menu ocultar-pop">
            <div class="digi-cont-top digi-menu-header dig-deg-orange">
                <div>
                    <img class="img-fluid" src="vendor/bto/digisalud-logo.png" alt="Digisalud">  
                </div>
            </div>
            <div class="digi-menu-body"> 

            </div>
        </div>
        <!-- /MENU DESPLEGABLE -->

        <!--POPUP-->
        <div class="digi-popup principal-pop ocultar-pop" >
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="action-close-pop">
                        <i class="fas fa-times"></i>  
                    </div>
                    <div class="col-md-12 title-digi-popup font-weight-bold">
                        <h5>Conexión a Internet</h5>
                    </div>

                    <div class="col-md-12 body-digi-popup">
                        !Has presionado el botón entrar!
                    </div>
                </div>
            </div>
        </div>
        <!--POPUP-->

        <!-- Contenido -->
        <div class="container-fluid">

            <!--HEADER-->
            <section class="header-digisalud">
                <div class="row dig-deg-orange digi-cont-top">

                    <div class="col-md-12 dig-header">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-md-4 section-menu">
                                    <img class="bto-icons-tam" src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                </div>
                                <div class="col-md-4 text-center section-search">
                                    <img src="vendor/bto/digisalud-logo.png" alt="Digisalud">
                                    <div class="inner-addon left-addon">
                                        <div><i class="fas fa-search"></i></div>
                                        <input type="search" class="col-md-12" placeholder="Búsqueda"/>
                                    </div>
                                </div>
                                <div class="col-md-4 text-right section-conexion">
                                    <span>Conexión</span>
                                    <img id="btn-conex" class="bto-icons-tam" src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                    <div class="digi-popup body-section-conexion ocultar-pop">
                                        <div class="container-fluid">
                                            <div class="row ">
                                                <div class="action-close-pop">
                                                    <i class="fas fa-times"></i>  
                                                </div>

                                                <div class="col-md-12 text-center font-weight-bold pb-3">
                                                    <h5>Conexión a Internet</h5>
                                                </div>

                                                <div class="col-md-12 pb-3">
                                                    <div class="md-form">
                                                        <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off">
                                                        <label for="c_redLocal">Red IP Local</label>
                                                        <div class="div-validador">
                                                            <div class="bto-validator"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 text-left">
                                                    <div class="round">
                                                        <input type="checkbox" id="m_checkRedIpLocal" />
                                                        <label for="m_checkRedIpLocal"></label> 
                                                        <span>Red IP Local</span>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 text-left">
                                                    <div class="round">
                                                        <input type="checkbox" id="m_checkInternet" />
                                                        <label for="m_checkInternet"></label> 
                                                        <span>Internet</span>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 pt-5 pb-2 text-center">
                                                    <button class="btn btn-dig-blue">CONECTARSE</button>  
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--SUB MENU-->
                    <div class="col-md-12 dig-sub-header pt-2">
                        <div class="container-fluid">
                            <div class="row text-center align-items-end">
                                <div class="col-md-3">
                                    <div class="row">
                                        <div class="col-6 text-right p-0 pr-1">
                                            <img src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                        </div>
                                        <div class="col-6 text-left p-0 pl-1">
                                            <p class="mt-2 font-weight-bold">128</p>    
                                        </div>
                                        <div class="col-12">
                                            <p>JORNADAS</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row">
                                        <div class="col-6 text-right p-0 pr-1">
                                            <img src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                        </div>
                                        <div class="col-6 text-left p-0 pl-1">
                                            <p class="mt-2 font-weight-bold">128</p>    
                                        </div>
                                        <div class="col-12">
                                            <p>VOLUNTARIOS</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row">
                                        <div class="col-6 text-right p-0 pr-1">
                                            <img src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                        </div>
                                        <div class="col-6 text-left p-0 pl-1">
                                            <p class="mt-2 font-weight-bold">128</p>    
                                        </div>
                                        <div class="col-12">
                                            <p>BENEFICIARIOS</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="row">
                                        <div class="col-6 text-right p-0 pr-1">
                                            <img src="vendor/bto/images/icon/comunidad_medica_white.png" alt="Digisalud"/>
                                        </div>
                                        <div class="col-6 text-left p-0 pl-1">
                                            <p class="mt-2 font-weight-bold">128</p>    
                                        </div>
                                        <div class="col-12">
                                            <p>COMUNIDAD MÉDICA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/SUB MENU-->

                </div>
            </section>
            <!--/HEADER-->

            <!--CONTENIDO-->
            <div class="row dig-backg-texture align-items-center">

                <!--SECCION IZQUIERDA-->
                <div id="dig-section-left" class="col-md-6 ">
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
                                <h3 class="font-weight-bold">Iniciar Sesión</h3>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form">
                                    <input type="email" id="l_email" class="form-control form-control-sm bto-error-line" autocomplete="off">
                                    <label for="inputSMEx">Correo electronico</label>
                                    <div class="div-validador">
                                        <div class="bto-validator bto-error">Correo electrónico no registrado<span class="pull-right fas fa-exclamation-triangle"></span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form">
                                    <div class="campo-pass">
                                        <div class="view-pass">
                                            <i class="fas fa-eye"></i>
                                        </div>
                                        <input type="password" id="l_password" class="form-control form-control-sm" autocomplete="off">
                                        <label for="l_password">Contraseña</label>
                                    </div>

                                    <div class="div-validador">
                                        <div class="bto-validator"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <small><a href="#">¿olvidaste tu contraseña?</a></small>
                            </div>

                            <div class="col-md-10 pt-5 pb-5">
                                <button id="l_entrar" class="btn btn-dig-blue">ENTRAR</button>  
                            </div>

                            <div class="col-md-10">
                                <div class="round">
                                    <input type="checkbox" id="checkbox" />
                                    <label for="checkbox"></label> 
                                    <span>Seguir conectado</span>
                                </div>
                            </div>

                            <div class="col-md-10 pt-4 pb-4 icons-social">
                                <div class="digi-face">
                                    <a href="#" class="fab fa-facebook-f"></a>  
                                </div>
                                <div class="digi-google">
                                    <a href="#" class="fab fa-google-plus-g"></a>
                                </div>
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
        <!-- /Contenido -->

        <?= scripts($url); ?>
        <script>
            $(".btn").on("click", function () {
                $(".body-section-conexion").removeClass("ocultar-pop");
                $("#div-oculto").addClass("body-oscurecer");
            });

            $("#div-oculto, .action-close-pop").on("click", function () {
                $("#div-oculto").removeClass("body-oscurecer");
                $(".digi-menu").addClass("ocultar-pop");
                $(".digi-popup").addClass("ocultar-pop");
            });

            $("#l_entrar").on("click", function () {
                $("#div-oculto").addClass("body-oscurecer");
                $(".principal-pop").removeClass("ocultar-pop");
            });

            $(".section-menu").on("click", function () {
                $("#div-oculto").addClass("body-oscurecer");
                $(".digi-menu").removeClass("ocultar-pop");
            });

            $(".campo-pass .view-pass").on("click", function () {
                var campo = $(this).parent().find("input");
                if (campo.attr("type") == "text") {
                    campo.attr("type", "password");
                } else {
                    campo.attr("type", "text");
                }
            });
        </script>
    </body>
</html>