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
        .section-search {
            margin: 0 auto; 
        }
    </style>
    <body>

        <!--DIV QUE OPACA LA PANTALLA-->
        <div id="div-oculto"></div>

        <!-- MENU DESPLEGABLE -->
        <div class="digi-modal digi-menu ocultar-pop">
            <div class="digi-cont-top digi-menu-header dig-deg-orange">
                <div>
                    <img class="img-fluid" src="bto/digisalud-logo.png" alt="Digisalud">  
                </div>
            </div>
            <div class="digi-menu-body"> 

            </div>
        </div>
        <!-- /MENU DESPLEGABLE -->

        <header class="header-digisalud dig-deg-orange">
            <div class="container-fluid">
                <div class="row justify-content-center">

                    <div class="col-sm-4 col-2">
                        <div class=" section-menu">
                            <img class="bto-icons-tam" src="bto/images/icon/Icon_menu.png" alt="Digisalud"/>
                        </div>
                    </div>

                    <div class="col-sm-4 col-8">
                        <div class="section-search">
                            <img src="bto/digisalud-logo.png" alt="Digisalud">
                            <div class="inner-addon left-addon">
                                <div><i class="fas fa-search"></i></div>
                                <input type="search" class="col-md-12" placeholder="Búsqueda"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4 col-2 text-right">
                        <div class="section-conexion">
                            <div class="d-none d-sm-block">
                                <span>Conexión</span>
                                <img id="btn-conex" class="bto-icons-tam" src="bto/images/icon/Icon_conexion.png" alt="Digisalud"/> 
                            </div>

                            <img id="btn-conex" class="bto-icons-tam d-block d-sm-none" src="bto/images/icon/Icon_conexion.png" alt="Digisalud"/> 

                            <div class="digi-modal digi-popup body-section-conexion ocultar-pop">
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
        </header>

        <!--SUB MENU-->
        <section class="dig-sub-header">
            <div class="container-fluid">
                <div class="row text-center align-items-end">
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-6 text-right p-0 pr-1">
                                <img src="bto/images/icon/Icon_jornada.png" alt="Digisalud"/>
                            </div>
                            <div class="col-6 text-left p-0 pl-1">
                                <p class="mt-2 font-weight-bold">128</p>    
                            </div>
                            <div class="col-12">
                                <p>JORNADAS</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-6 text-right p-0 pr-1">
                                <img src="bto/images/icon/Icon_voluntarios.png" alt="Digisalud"/>
                            </div>
                            <div class="col-6 text-left p-0 pl-1">
                                <p class="mt-2 font-weight-bold">128</p>    
                            </div>
                            <div class="col-12">
                                <p>VOLUNTARIOS</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-6 text-right p-0 pr-1">
                                <img src="bto/images/icon/Icon_benefciarios.png" alt="Digisalud"/>
                            </div>
                            <div class="col-6 text-left p-0 pl-1">
                                <p class="mt-2 font-weight-bold">128</p>    
                            </div>
                            <div class="col-12">
                                <p>BENEFICIARIOS</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-6 text-right p-0 pr-1">
                                <img src="bto/images/icon/Icon_comunidadmedica.png" alt="Digisalud"/>
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
        </section>
        <!--/SUB MENU-->

        <!--POPUP-->
        <div class="digi-modal digi-popup principal-pop ocultar-pop" >
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

            <!--CONTENIDO-->
            <div class="row dig-backg-texture align-items-center">

                <!--SECCION IZQUIERDA-->
                <div id="dig-section-left" class="col-md-6 ">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-12 col-md-auto">
                                <h1>¡Bienvenidos!</h1>
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
                <div id="dig-section-right" class="col-md-6 dig-backg-white">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-10">
                                <h2 class="font-weight-bold">Iniciar Sesión</h2>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form">
                                    <label for="inputSMEx">Correo electronico</label>
                                    <input type="email" id="l_email" class="form-control form-control-sm bto-error-line" autocomplete="off">
                                    <div class="div-validador">
                                        <div class="bto-validator">&nbsp;</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <div class="md-form">
                                    <div class="campo-pass">
                                        <div class="view-pass">
                                            <i class="fas fa-eye"></i>
                                        </div>
                                        <label for="l_password">Contraseña</label>
                                        <input type="password" id="l_password" class="form-control form-control-sm" autocomplete="off">
                                        <div class="div-validador">
                                            <div class="bto-validator">&nbsp;</div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div id="miss_pass" class="col-md-10">
                                <small><a href="#">¿olvidaste tu contraseña?</a></small>
                            </div>

                            <div class="col-md-10 pt-4 pb-4">
                                <button id="l_entrar" class="btn btn-dig-blue" disabled="disabled">ENTRAR</button>  
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

                            <div id="terms-priva" class="col-md-10 pt-2 pb-4">
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
            $(".section-conexion").on("click", function () {
                $("#div-oculto").addClass("body-oscurecer");
                $(".body-section-conexion").removeClass("ocultar-pop");
            });

            $("#l_entrar").on("click", function () {
                $("#div-oculto").addClass("body-oscurecer");
                $(".principal-pop").removeClass("ocultar-pop");
            });

            $(".section-menu").on("click", function () {
                $("#div-oculto").addClass("body-oscurecer");
                $(".digi-menu").removeClass("ocultar-pop");
            });

            $("#div-oculto, .action-close-pop").on("click", function () {
                $("#div-oculto").removeClass("body-oscurecer");
                $(".digi-modal").addClass("ocultar-pop");
            });

//  
            $(".campo-pass .view-pass").on("click", function () {
                var campo = $(this).parent().find("input");
                if (campo.attr("type") == "text") {
                    campo.attr("type", "password");
                } else {
                    campo.attr("type", "text");
                }
            });

            // EVENTOS PARA LA DEMO DEL MODULO 1
            $("#l_email").on("keyup", function () {
                if ($(this).val() == '') {
                    $(this).next(".div-validador").children().html('Correo electrónico no registrado<span class="pull-right fas fa-exclamation-triangle"></span>').addClass("bto-error");
                    $(this).addClass("bto-error-line");
                } else {
                    $(this).removeClass("bto-error-line");
                    $(this).next(".div-validador").children().html("").removeClass("bto-error");
                }
            });
            $("#l_password").on("keyup", function () {
                if ($(this).val() == '') {
                    $(this).next(".div-validador").children().html('La Contraseña no es correcta<span class="pull-right fas fa-exclamation-triangle"></span>').addClass("bto-error");
                    $(this).addClass("bto-error-line");
                } else {
                    $(this).removeClass("bto-error-line");
                    $(this).next(".div-validador").children().html("").removeClass("bto-error");
                }
            });
            $("#l_email, #l_password").on("keyup", function () {
                $("#l_entrar").attr("disabled","disabled"   );
                if ($("#l_password").val() != '' && $("#l_email").val() != '') {
                    $("#l_entrar").removeAttr("disabled");
                }
            });
        </script>
    </body>
</html>