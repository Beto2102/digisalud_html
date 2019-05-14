var digiModule1 = {
    main: function () {
        btoFunction.mainPopUp();
        btoFunction.showPassword();

        $("button").on("click", function () {
            btoFunction.callDigiPopUp("Prueba", "Usted ha pulsado el botón ''" + $(this).text() + "'' ");
        });

        $("#miss_pass").on("click", function () {
            btoFunction.callDigiPopUp("Recuperar contraseña", structureHTML.missPassword());
        });

        $(document).on("click", "#recoveryPass", function () {
            window.location = "recovery.html";
        });

        // EVENTOS PARA LA DEMO DEL MODULO 1
        $(document).on("keyup", "#l_email, #l_password, #c_redLocal, #rp_email", function () {
            btoFunction.validateInput($(this), "El campo no es válido");
        });
    },
    register: function () {
        $("button").on("click", function () {
            btoFunction.callDigiPopUp("Contraseña", "Usted ha pulsado el botón ''" + $(this).text() + "'' ");
        });

        btoFunction.showPassword();
        btoFunction.mainPopUp();
        btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        $("#r_password , #rc_password").on("keyup", function () {
            btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        });
    }
};
var digiModule2 = {
    main: function () {
        btoFunction.mainPopUp();
        btoFunction.showPassword();
        btoFunction.LoadFileIMG();
        //
        //        $("button").on("click", function () {
        //            btoFunction.callDigiPopUp("Prueba", "Usted ha pulsado el botón ''" + $(this).text() + "'' ");
        //        });
        //
        //        $("#miss_pass").on("click", function () {
        //            btoFunction.callDigiPopUp("Recuperar contraseña", structureHTML.missPassword());
        //        });
        //
        //
        //        // EVENTOS PARA LA DEMO DEL MODULO 1
        //        $(document).on("keyup", "#l_email, #l_password, #c_redLocal, #rp_email", function () {
        //            btoFunction.validateInput($(this), "El campo no es válido");
        //        });
        btoFunction.showPassword();
        btoFunction.mainPopUp();
        btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        $("#r_password , #rc_password").on("keyup", function () {
            btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        });
    },
    register: function () {
        btoFunction.showPassword();
        btoFunction.mainPopUp();

        btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        $("#r_password , #rc_password").on("keyup", function () {
            btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        });
    }
};
var digiModule3 = {
    main: function () {
        btoFunction.mainPopUp();
        // $(".find_jor").on("click", function () {
        //     window.location = "find.html";
        // });
    },
    edit: function () {
        btoFunction.mainPopUp();
        btoFunction.showPassword();
        btoFunction.LoadFileIMG();
    },
    find: function () {
        btoFunction.mainPopUp();
        $(".dont-search").hide();

        $("#search").on('click', function () {
            $(".dont-search").hide();
            $(".find-search").show();
        });

        $("#clear").on('click', function () {
            $(".dont-search").show();
            $(".find-search").hide();
        });

        $('.datepicker').on('click', function (e) {
            e.preventDefault();
            $(this).attr("autocomplete", "off");
        });

        $(document).on('click', '.card-search', function () {
            window.location = "detail.html";
        });
    }
};
var digiModule4 = {
    main: function () {
        var that = this;
        btoFunction.mainPopUp();
        $("#show_who").hide();
        $("#show_type").hide();
        $("#btn-type").hide();

        $("#journade").on("change", function () {
            $("#show_type").show("slow");
        });

        $("#type_register").on("change", function () {
            if ($(this).val() == 3) {
                $("#show_who").hide();
            } else {
                $("#show_who").show("slow");
            }
            $("#btn-type").show();
        });

        $("#btn-type").on("click", function () {

            if ($("#who_register").val() == 1 && $("#type_register").val() == 1) {
                window.location = "nino_simple.html";
            }

            if ($("#who_register").val() == 1 && $("#type_register").val() == 2) {
                window.location = "nino_completo.html";
            }

            if ($("#who_register").val() == 2 && $("#type_register").val() == 1) {
                window.location = "adulto_simple.html";
            }

            if ($("#who_register").val() == 2 && $("#type_register").val() == 2) {
                window.location = "adulto_completo.html";
            }

            if ($("#type_register").val() == 3) {
                window.location = "familiar_principal.html";
            }
        });
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
        // btoFunction.stepModule4();
        // $('.inicio').show();
        // $(".niño_simple").hide();
    },
    ninoSimple: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.stepModule4();
        $('.inicio').show();

        $("#save_nino").on("click", function () {
            btoFunction.callDigiPopUp("Registro Simple Niño", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
    },
    ninoCompleto: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.stepModule4();
        $('.inicio').show();
        $(".ocul-dir").hide();
        $(".ocul-iden").hide();
        $(".ocul-emp").hide();
        $(".ocul-emp2").hide();
        $('input[type=radio][name=radio-dir]').change(function () {
            if (this.id == 'dir_si') {
                $(".ocul-dir").show();
            } else {
                $(".ocul-dir").hide();
            }
        });
        $('input[type=radio][name=radio-iden]').change(function () {
            if (this.id == 'iden_si') {
                $(".ocul-iden").show();
            } else {
                $(".ocul-iden").hide();
            }
        });
        $('input[type=radio][name=radio-emp]').change(function () {
            if (this.id == 'emp_si') {
                $(".ocul-emp").show();
                $(".ocul-emp2").hide();
            } else {
                $(".ocul-emp").hide();
                $(".ocul-emp2").show();
            }
        });
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
        $("#save_nino").on("click", function () {
            btoFunction.callDigiPopUp("Registro Completo Niño", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });

    },
    adultoSimple: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.stepModule4();
        $('.inicio').show();
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
        $("#save_adulto").on("click", function () {
            btoFunction.callDigiPopUp("Registro Simple Adulto", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });
    },
    adultoCompleto: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.stepModule4();
        $('.inicio').show();
        $(".ocul-dir").hide();
        $(".ocul-emp").hide();
        $(".ocul-emp2").hide();
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
        $('input[type=radio][name=radio-dir]').change(function () {
            if (this.id == 'dir_si') {
                $(".ocul-dir").show();
            } else {
                $(".ocul-dir").hide();
            }
        });
        $('input[type=radio][name=radio-emp]').change(function () {
            if (this.id == 'emp_si') {
                $(".ocul-emp").show();
                $(".ocul-emp2").hide();
            } else {
                $(".ocul-emp").hide();
                $(".ocul-emp2").show();
            }
        });
        $("#save_adulto").on("click", function () {
            btoFunction.callDigiPopUp("Registro Completo Adulto", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });
    },
    familiar: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.stepModule4();

        // Cargar data
        var HistorialData = Data.getHistorialDeSalud();
        var html = ' ';
        HistorialData.forEach(function (x) {
            var pd = '';
            if (x.type == 1) {
                html += structureHTML.title(x.section);
            } else if (x.type == 2) {
                pd = ' pt-3';
                html += structureHTML.subTitle(x.section, '');
            }
            var cont = 0;
            x.data.forEach(function (x2, key) {
                if (key == 0) {
                    html += '<div class="col-12 ' + pd + '">';
                }
                if (cont == 2 && x2.type == 'checkEncuesta') {
                    html += '</div>';
                    html += '<div class="col-12 pt-3">';
                    cont = 0;
                } else if (x2.type == 'input') {
                    html += '</div>';
                    html += '<div class="col-12 pt-3">';
                } else if (x2.type == 'break') {
                    html += '</div>';
                    html += '<div class="col-12 pt-5">';
                }
                switch (x2.type) {
                    case 'input':
                        html += structureHTML.input(x2.id, x2.name);
                        break;
                    case 'checkEncuesta':
                        html += structureHTML.checkEncuesta(x2.id, x2.name);
                        break;
                    default:
                        break;
                }
                cont++;
                if (key == x.data.length - 1) {
                    html += '</div>';
                }
            });
        });
        $("#aqui1").after(html);

        var AntecedentesData = Data.getAntecendentesFamiliares();
        var html = ' ';
        AntecedentesData.forEach(function (x) {
            var pd = '';
            if (x.type == 1) {
                html += structureHTML.title(x.section);
            } else if (x.type == 2) {
                pd = ' pt-4';
                html += structureHTML.subTitle(x.section, 'pt-5');
            }
            var cont = 0;
            x.data.forEach(function (x2, key) {
                if (key == 0) {
                    html += '<div class="col-12 ' + pd + '">';
                }
                if (cont == 2) {
                    html += '</div>';
                    html += '<div class="col-12 pt-4">';
                    cont = 0;
                }
                switch (x2.type) {
                    case 'input':
                        html += structureHTML.input(x2.id, x2.name);
                        break;
                    case 'checkEncuesta':
                        html += structureHTML.checkEncuesta(x2.id, x2.name);
                        break;
                    default:
                        break;
                }
                cont++;
                if (key == x.data.length - 1) {
                    html += '</div>';
                }
            });
        });
        $("#aqui2").after(html);


        $('.inicio').show();

        $('.colap').on("click", function () {
            if ($(this).data("value") == 1) {
                $(this).data("value", 0);
                $(this).children().attr("src", "../bto/images/icon/arrow_bottom.png");
            } else {
                $(this).data("value", 1);
                $(this).children().attr("src", "../bto/images/icon/arrow_top.png");
            }
        });
        $("#more_option").on('click', function () {
            btoFunction.callOtherOptionsPopUp();
        });
        $("#ch_encuesta").on('click', function () {
            window.location.href = 'encuesta.html';
        });

        $("#ch_resumen").on('click', function () {
            window.location.href = 'familiar.html';
        });

        $("#add_miembro").on('click', function () {
            window.location.href = 'familiar_miembro.html';
        });

        $("#save_to_table").on("click", function () {
            btoFunction.callDigiPopUp("Registro de beneficiario", "El beneficiario ha sido registrado correctamente ", "success");
            setTimeout(function () {
                window.location.href = 'familiar.html';
            }, 2000);
        });

        $("#save_family").on("click", function () {
            btoFunction.callDigiPopUp("Registro Familiar", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });

        $("#save_to_table2").on("click", function () {
            btoFunction.callDigiPopUp("Integrante Familiar", "Se ha guardado exitosamente", "success");
            setTimeout(function () {
                window.location.href = 'familiar.html';
            }, 2000);
        });

        $("#save_encuesta").on("click", function () {
            btoFunction.callDigiPopUp("Encuesta", "La encuensta ha sido guardada correctamente", "success");
            setTimeout(function () {
                window.location.href = 'familiar.html';
            }, 2000);
        });

        $(".ocul-dir").hide();
        $(".ocul-iden").hide();
        $(".ocul-emp").hide();
        $(".ocul-emp2").hide();
        $(".ocul-dis").hide();

        $('input[type=radio][name=radio-dir]').change(function () {
            if (this.id == 'dir_si') {
                $(".ocul-dir").show();
            } else {
                $(".ocul-dir").hide();
            }
        });
        $('input[type=radio][name=radio-iden]').change(function () {
            if (this.id == 'iden_si') {
                $(".ocul-iden").show();
            } else {
                $(".ocul-iden").hide();
            }
        });
        $('input[type=radio][name=radio-emp]').change(function () {
            if (this.id == 'emp_si') {
                $(".ocul-emp").show();
                $(".ocul-emp2").hide();
            } else {
                $(".ocul-emp").hide();
                $(".ocul-emp2").show();
            }
        });
        $('input[type=radio][name=radio-dis]').change(function () {
            if (this.id == 'dis_si') {
                $(".ocul-dis").show();
            } else {
                $(".ocul-dis").hide();
            }
        });

    },
};
var digiModule6 = {
    main: function () {
        var that = this;
        btoFunction.mainPopUp();
        btoFunction.showPassword();
        btoFunction.LoadFileIMG();
        $('.datepicker').on('click', function (e) {
            e.preventDefault();
            $(this).attr("autocomplete", "off");
        });
        $(document).on('click', ".add_date_jou", function () {
            var idT = $(this).parent('.new_date_cre').next().attr('id');
            if (idT == undefined) {
                var id = 2;
            } else {
                var id = idT.split("_");
                var id = parseInt(id[1]) + 1;
            }
            var label = "#inp_" + id;
            $(this).parent('.new_date_cre').after(structureHTML.newDateM6(id));
            $(label).datepicker({
                language: 'es',
                autoClose: true,
            });
        });

        $(document).on('click', ".rest_date_jou", function () {
            var idT = $(this).parent('.new_date_cre').remove();
        });

        $("#r_btn_register").on("click", function () {
            btoFunction.callDigiPopUp("Crear Jornada", "Todos los cambios han sido guardados correctamente");
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        });

        $("#create").on('click', function () {
            window.location = "create.html";
        });

        $(document).on("click", "#editame", function () {
            window.location = "edit.html";
        });

        $(document).on('click', '#participar', function () {
            $(".action-close-pop").click();
            btoFunction.callDigiPopUp("Tu participación ha sido enviada", "El organizador te dará una respuesta lo antes posible", "success");
        });

        $(document).on('click', '#cancelar', function () {
            $(".action-close-pop").click();
            btoFunction.callDigiPopUp("Cancelar Participación", structureHTML.popUpCalendarCancelBody(), "error");
        });
        $(document).on('click', '#cancelar_last', function () {
            $(".action-close-pop").click();
            btoFunction.callDigiPopUp("Tu participación ha sido enviada", "El organizador te dará una respuesta lo antes posible", "success");
        });

        $(document).on('click', '#invitar', function () {
            $(".action-close-pop").click();
            btoFunction.callCalendarPopUp(3);
        });

        $(document).on('click', '#send_invite', function () {
            $(".action-close-pop").click();
            btoFunction.callDigiPopUp("Invitación enviada", "El participante debe aceptar la invitación", "success");
        });

        $(document).on('click', '.event-click', function () {
            btoFunction.callCalendarPopUp($(this).data("btotype"));
        });
        $(document).on('click', '.bto-day-activity', function () {
            if ($(this).find('a').text() == 'Jornada 12') {
                btoFunction.callCalendarPopUp($(this).data("btotype"), true);
            } else {
                btoFunction.callCalendarPopUp($(this).data("btotype"));
            }

        });
        $(document).on('click', '#dir_no', function () {
            $("body").removeClass("no-scroller");
            $("#div-oculto").removeClass("body-oscurecer");
            $(".digi-modal").addClass("ocultar-pop");
            $("#MyModalDigi").remove();
        });
    },
};
var digiModule10 = {
    main: function () {
        btoFunction.mainPopUp();
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            navText: ["<img src='../bto/images/icon/Icon_arrow_left.png'>", "<img src='../bto/images/icon/Icon_arrow_right.png'>"],
            nav: true,
            //  autoplay: true,
            //  autoplayTimeout: 10000,
            //  autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
};
var digiModule12 = {
    main: function () {
        btoFunction.showPassword();
        btoFunction.mainPopUp();

        btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        $("#r_password , #rc_password").on("keyup", function () {
            btoFunction.isCorrectPassword($("#r_password"), $("#rc_password"));
        });

        $("#r_btn_register").on("click", function () {
            btoFunction.callDigiPopUp("Registro institucional", "Se ha guardado exitosamente", "success");
        });
    }
};
var digiModule13 = {
    main: function (detail = false) {
        btoFunction.mainPopUp();
        $(".find-search").hide();

        $("#search").on('click', function () {
            $(".dont-search").hide();
            $(".find-search").show();
        });

        $("#clear").on('click', function () {
            $(".dont-search").show();
            $(".find-search").hide();
        });

        $('.datepicker').on('click', function (e) {
            e.preventDefault();
            $(this).attr("autocomplete", "off");
        });

        $(document).on('click', '.card-search', function () {
            window.location = "detail.html";
        });

    },
    detail: function () {
        btoFunction.mainPopUp();
        $("#return").hide();
        $("#print").hide();

        $(document).on("click", ".go_table", function () {

            window.location = "table.html";
        });

        $(document).on("click", "#search", function () {

            if ($(this).data("type") === 1) {
                $("#return").hide();
                $(".dont-search").hide();
                var html = '';
                for (var x = 0; x < 5; x++) {
                    html += structureHTML.cardModule13(1, 'Pedro Perez', 'Odontologo', 'Valencia', 'border-dig-blue', x);
                }
                $("#response-search").html(html);
                $(".new-noresults").show();
            }
        });

        $(document).on("click", "#show1", function () {
            $(".asignate").hide();
            $(".asignate_do").show();
            $(".name_search").html("Busca tu voluntario");

            var html = '';
            for (var x = 0; x < 3; x++) {
                html += structureHTML.cardModule13(2, 'Pedro Perez', 'Odontologo', 'Valencia', 'border-dig-green', x);
            }
            $(".dont-search").hide();
            $("#response-search").html(html);
            $("#return").show();
            $("#print").show();

        });
        $(document).on("click", "#show2", function () {
            $(".asignate").hide();
            $(".asignate_do").show();
            $(".name_search").html("Busca tu voluntario por confirmar");

            var html = '';
            for (var x = 0; x < 3; x++) {
                html += structureHTML.cardModule13(3, 'Ernesto Lugo', 'Odontologo', 'Valencia', 'border-dig-red');
            }
            $(".dont-search").hide();
            $("#response-search").html(html);
            $("#return").show();
            $("#print").show();
        });
        $(document).on("click", "#return", function () {
            $(".asignate").show();
            $(".asignate_do").hide();
            $(".name_search").html("Busca tu usuario");
            $("#return").hide();
            $(".dont-search").hide();
            var html = '';
            for (var x = 0; x < 5; x++) {
                html += structureHTML.cardModule13(1, 'Pedro Perez', 'Odontologo', 'Valencia', 'border-dig-blue', x);
            }
            $("#response-search").html(html);
            $(".new-noresults").show();
            $("#print").hide();
        });

        $(document).on("click", ".btn_add", function () {
            var entro = 0;
            $(".asignate input:checkbox:checked").each(function () {
                entro = 1;
            });
            if (entro == 0) {
                btoFunction.callDigiPopUp("Error", "Debes seleccionar un turno y rol, para agregar a este participante", "error");
                return false;
            }
            btoFunction.callDigiPopUp("Usuario Agregado", "<strong>Pedro Perez</strong> ha sido agregada a la Jornada <strong>Miranda Salud</strong>", "success");
        });

        $(document).on("click", ".btn_invite", function () {
            var entro = 0;
            $(".asignate input:checkbox:checked").each(function () {
                entro = 1;
            });
            if (entro == 0) {
                btoFunction.callDigiPopUp("Error", "Debes seleccionar un turno y rol, para invitar a este participante", "error");
                return false;
            }
            btoFunction.callDigiPopUp("Usuario Invitado", "<strong>Pedro Perez</strong> ha sido invitado a la Jornada <strong>Miranda Salud</strong>", "success");
        });

        $(document).on("click", ".btn_edit_vol ", function () {
            $(this).parent().hide().next().show();
            $(".asignate_do").addClass("editando");
        });

        $(document).on("click", ".btn_save_vol  ", function () {
            $(this).parent().hide().prev().show();
            $(".asignate_do").removeClass("editando");
            btoFunction.callDigiPopUp("Editar usuario", "<strong>Pedro Perez</strong> ha sido editado exitosamente", "success");
        });

        $(document).on("click", ".btn_delete_vol", function () {
            btoFunction.callDigiPopUp("Eliminar usuario", "<strong>Pedro Perez</strong> será eliminada de la lista <strong>Voluntarios</strong>", "success");
        });

        $(document).on("click", ".btn_record_vol ", function () {
            btoFunction.callDigiPopUp("Recordatorio usuario", "Se ha enviado un recordatorio a <strong>Pedro Perez</strong>", "success");
        });

        $(document).on("click", ".btn_delete_vol_conf", function () {
            btoFunction.callDigiPopUp("Eliminar usuario", "<strong>Pedro Perez</strong> será eliminada de la lista <strong>Voluntarios por confirmar</strong>", "success");
        });

        $(document).on("click", "#dir_no", function () {
            $(this).parent().hide().prev().show();
            $(".asignate_do").removeClass("editando");
        });
    },
    table: function () {
        btoFunction.mainPopUp();

        $("#save_consol").on("click", function () {
            btoFunction.callDigiPopUp("Consolidado de Participantes", "Los datos se han actualizado correctamente", "success");
            setTimeout(function () {
                window.location.href = 'detail.html';
            }, 2000);
        });
    }
};

// Funciones
var btoFunction = {
    mainPopUp: function () {
        // Evento para cerrar el DigiPopUp y otros 
        $(document).on("click", ".section-profile.closet, #div-oculto, .action-close-pop, .cerrar-si", function () {
            $("body").removeClass("no-scroller");
            $("#div-oculto").removeClass("body-oscurecer");
            $(".digi-modal").addClass("ocultar-pop");
            $("#MyModalDigi").remove();
        });
        // Evento para cerrar Conexiones 
        $(document).on("click", "#btn-conex", function () {
            $("body").addClass("no-scroller");
            $("#div-oculto").addClass("body-oscurecer");
            $(".body-section-conexion").removeClass("ocultar-pop");
        });
        // Evento para cerrar Conexiones 
        $(document).on("click", ".section-notification", function () {
            $("body").addClass("no-scroller");
            $("#div-oculto").addClass("body-oscurecer");
            $(".body-section-notification").removeClass("ocultar-pop");
        });
        // Evento para cerrar el Menu Desplegable 
        $(document).on("click", ".section-menu", function () {
            $("body").addClass("no-scroller");
            $("#div-oculto").addClass("body-oscurecer");
            $(".digi-menu").removeClass("ocultar-pop");
        });
        // Evento para cerrar el Menu Desplegable Profile
        $(document).on("click", ".section-profile.open", function () {
            $("body").addClass("no-scroller");
            $("#div-oculto").addClass("body-oscurecer");
            $(".digi-menu-prof").removeClass("ocultar-pop");
        });
        $(document).on("click", ".digi-menu-item", function () {
            if ($(this).find(".digi-menu-sub").hasClass("digi-menu-hide")) {
                $(".digi-menu-sub").addClass("digi-menu-hide");
                $(this).find(".digi-menu-sub").removeClass("digi-menu-hide");
                $(this).find(".digi-menu-item-label").children("img").attr("src", "/digisalud/bto/images/icon/Icon_arrow_pressed.png");
            } else {
                $(".digi-menu-sub").addClass("digi-menu-hide");
                $(this).find(".digi-menu-item-label").children("img").attr("src", "/digisalud/bto/images/icon/Icon_arrow_normal.png");
            }
        });
    },
    callDigiPopUp: function (title, content, icon = null) {
        $("#div-oculto").addClass("body-oscurecer");
        $("body").prepend(structureHTML.popUp(title, content, icon));
    },
    callCalendarPopUp: function (type, force = null) {
        $("#div-oculto").addClass("body-oscurecer");
        $("body").prepend(structureHTML.popUpCalendar(type, force));
    },
    callOtherOptionsPopUp: function () {
        $("#div-oculto").addClass("body-oscurecer");
        $("body").prepend(structureHTML.popUpModule4());
    },
    showPassword: function () {
        $(".campo-pass .view-pass").on("click", function () {
            var campo = $(this).parent().find("input");
            if (campo.attr("type") == "text") {
                campo.attr("type", "password");
            } else {
                campo.attr("type", "text");
            }
        });
    },
    validateInput: function (campo, title) {
        if (campo.val() == '') {
            campo.next(".div-validador").children().html(title + '<span class="pull-right fas fa-exclamation-triangle"></span>').addClass("bto-error");
            campo.addClass("bto-error-line");
        } else {
            campo.removeClass("bto-error-line");
            campo.next(".div-validador").children().html("").removeClass("bto-error");
        }
    },
    isCorrectPassword: function (valor, confirm) {
        var entro = true;
        var html = "";
        //        if (!SearchOneToOne(valor.val())) {
        //            valor.next().append('<span class="bto-danger">' + iconCorrectPassword() + 'Posee caracteres invalidos</span> </br>');
        //            entro = false;
        //        } else {
        //            valor.next().append('<span class="bto-success">' + iconCorrectPassword() + 'No posee caracteres invalidos</span> </br>');
        //        }

        if (valor.val().length < 10) {
            html += '<div data-type="long"><span class="icon-va"></span>Minimo 10 caracteres</div>';
            entro = false;
        } else {
            html += '<div data-type="long"><span class="icon-va valid"></span>Minimo 10 caracteres</div>';
        }

        //        if (!valor.val().match(/[a-z]/)) {
        //            html += '<div data-type="mayus"><span class="icon-va"></span>Al menos 1 letra</div>';
        //            entro = false;
        //        } else {
        //            html += '<div data-type="mayus"><span class="icon-va valid"></span>Al menos 1 letra</div>';
        //        }

        if (!valor.val().match(/[A-Z]/)) {
            html += '<div data-type="mayus"><span class="icon-va"></span>Al menos 1 mayúscula</div>';
            entro = false;
        } else {
            html += '<div data-type="mayus"><span class="icon-va valid"></span>Al menos 1 mayúscula</div>';
        }

        if (!valor.val().match(/\d/)) {
            html += '<div data-type="number"><span class="icon-va"></span>Al menos 1 número</div>';
            entro = false;
        } else {
            html += '<div data-type="number"><span class="icon-va valid"></span>Al menos 1 número</div>';
        }

        if (!valor.val().match(/\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\./)) {
            html += '<div data-type="esp"><span class="icon-va"></span>Al menos 1 caracter especial</div>';
            entro = false;
        } else {
            html += '<div data-type="esp"><span class="icon-va valid"></span>Al menos 1 caracter especial</div>';
        }

        html += '<div data-type="old"><span class="icon-va valid"></span>Diferente a las anteriores</div>';
        if (entro == false) {
            $("#r_entrar").attr("disabled", true);
            valor.next(".div-validador").children().html("Contraseña no válida" + '<span class="pull-right fas fa-exclamation-triangle"></span>').addClass("bto-error");
            valor.addClass("bto-error-line");
        } else {
            $("#r_entrar").removeAttr("disabled");
            valor.removeClass("bto-error-line");
            valor.next(".div-validador").children().html("").removeClass("bto-error");
        }

        if (confirm.val() != valor.val()) {

            confirm.next(".div-validador").children().html("Las contraseñas no son iguales" + '<span class="pull-right fas fa-exclamation-triangle"></span>').addClass("bto-error");
            confirm.addClass("bto-error-line");
        } else {

            confirm.removeClass("bto-error-line");
            confirm.next(".div-validador").children().html("").removeClass("bto-error");
        }

        $("#validate").empty();
        $("#validate").html(html);
        return entro;
    },
    LoadFileIMG: function () {
        $(function () {
            $('#file-input').change(function (e) {
                var archivo = $(this).val();
                var extensiones = archivo.substring(archivo.lastIndexOf("."));
                if (extensiones != ".jpg" && extensiones != ".jpeg") {
                    alert("¡Formato de la imagen no valido!", "El archivo de tipo " + extensiones + " no es válido, unicamente son permitidos formatos .jpg y .jpeg");
                } else if ($('#file-input')[0].files[0].size > (1024 * 1024)) {
                    alert("¡Tamaño de la imagen no valido!", "El tamaño del archivo es: " + ((($('#file-input')[0].files[0].size) / 1024) / 1024).toFixed(2) + "MB y lo maximo permitido es 1 MB");
                } else {
                    addImage(e);
                }
            });
            function addImage(e) {
                var file = e.target.files[0],
                    imageType = /image.*/;
                if (!file.type.match(imageType))
                    return;
                var reader = new FileReader();
                reader.onload = fileOnload;
                reader.readAsDataURL(file);
            }
            function fileOnload(e) {
                var result = e.target.result;
                $('#edit-img-profile').attr("src", result);
                $("#update_photo").val('1');
            }
        });
    },
    stepModule4: function () {
        var navListItems = $('div.setup-panel .stepwizard-step a'),
            allWells = $('div.setup-content'),
            allPrevBtn = $('.prevBtn'),
            allNextBtn = $('.nextBtn');
        allWells.hide();
        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this).parent();
            if (!$item.hasClass('disabled')) {
                navListItems.parent().removeClass('active');
                $item.addClass('active');
                allWells.hide();
                $target.show();
                // $target.find('input:eq(0)').focus();
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
        });
        allPrevBtn.click(function () {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                prevStepWizard = $('div.setup-panel .stepwizard-step a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
                isValid = true;
            if (isValid) {
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                prevStepWizard.removeAttr('disabled').trigger('click');
            }
        });
        allNextBtn.click(function () {
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel .stepwizard-step a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                isValid = true;
            if (isValid) {
                nextStepWizard.removeAttr('disabled').trigger('click');
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            }
        });
    },
    dontEqualCombo: function (campo1, campo2, actual) {
        $(campo1).removeAttr('checked');
        $(campo2).removeAttr('checked');
        actual.attr('checked', true);
    }
};
var structureHTML = {
    popUp: function (title, content, icon = null) {
        var html = '' +
            '<div id="MyModalDigi" class="digi-modal digi-popup principal-pop" >' +
            '    <div class="container-fluid">' +
            '        <div class="row text-center">' +
            '            <div class="action-close-pop">' +
            '                <i class="fas fa-times"></i>' +
            '            </div>';

        if (icon != null) {
            html += '<div class="col-md-12 img-popup"><img src="../bto/images/icon/popup-' + icon + '.png" /></div>'
        }
        html += '            <div class="col-md-12 title-digi-popup font-weight-bold">' +
            '                <h5>' + title + '</h5>' +
            '            </div>' +
            '            <div class="col-md-12 body-digi-popup">' + content + '</div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        return html;
    },
    popUpCalendar: function (clas, force = null) {
        var html = '<div id="MyModalDigi" class="digi-modal digi-popup principal-pop-m6" >';
        if (clas == 1) {
            html += this.popUpCalendarHeader('bto-day-activity-blue');
            if (force === true) {
                html += this.popUpCalendarPrivateBodyCancel();
            } else {
                html += this.popUpCalendarPrivateBody();
            }
        } else if (clas == 3) {
            html += this.popUpCalendarHeader('bto-day-activity-blue');
            html += this.popUpCalendarInviteBody();
        } else {
            html += this.popUpCalendarHeader('bto-day-activity-blue-light');
            html += this.popUpCalendarPublicBody();
        }
        html += '</div>';
        return html;
    },
    popUpCalendarHeader: function (clas) {
        return '    <div class="header-pop-m6 ' + clas + '">' +
            '        <div class="container-fluid">' +
            '           <div class="row text-center">' +
            '               <div class="action-close-pop">' +
            '                   <i class="fas fa-times"></i>' +
            '               </div>' +
            '               <div class="col-md-12 title-digi-popup">' +
            '                   <h5>Título de la Jornada</h5>' +
            '               </div>' +
            '               <div class="col-md-12 body-digi-popup">Icogroup</div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    popUpCalendarPrivateBody: function () {
        return '    <div class="body-pop-m6">' +
            '       <div class="pesqui">' +
            '           <div class="pesqui-wrap">' +
            '               <h4>Pesquisas</h4>' +
            '               <img src="../bto/images/pesq/sgv.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/ant.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/vis.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/lab.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/aud.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/odt.png" class="img-pop-pesq" />' +
            '           </div>' +
            '       </div>' +
            '       <div class="container-fluid form-pop-m6  pt-4">' +
            '           <div class="row">' +
            '               <div class="col-12 col-sm-3 col-md-3">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Fecha</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="22-10-2018" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Hora</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="07:00" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-2 col-md-1">' +
            '                   <p class="alleter">a</p>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal"></label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="13:00" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Status</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="En marcha" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">N° Beneficiarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="8" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Ubicación</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="4ta. Av con 6ta los Palos Grandes" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Voluntarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="25 Registrados" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Tipo de Jornada</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="Privada" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 text-center pt-3">' +
            '                   <button id="editame" class="btn btn-dig-blue">Editar</button>' +
            '                   <button id="invitar" class="ml-3    btn btn-dig-blue">Invitar</button>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    popUpCalendarInviteBody: function () {
        return '    <div class="body-pop-m6">' +
            '       <div class="container-fluid form-pop-m6  pt-4">' +
            '           <div class="row">' +
            '                <div class="col-12">' +
            '                    <div class="select mt-2">' +
            '                        <select id="11111" class="select-text" required>' +
            '                            <option disabled selected></option>' +
            '                            <option value="1">Option 1</option>' +
            '                            <option value="2">Option 2</option>' +
            '                            <option value="3">Option 3</option>' +
            '                        </select>' +
            '                        <span class="select-highlight"></span>' +
            '                        <span class="select-bar"></span>' +
            '                        <label for="11111" class="select-label">*Participantes</label>' +
            '                    </div>' +
            '                </div>' +
            '                <div class="col-12">' +
            '                    <div class="select mt-2">' +
            '                        <select id="22222" class="select-text" required>' +
            '                            <option disabled selected></option>' +
            '                            <option value="1">Option 1</option>' +
            '                            <option value="2">Option 2</option>' +
            '                            <option value="3">Option 3</option>' +
            '                        </select>' +
            '                        <span class="select-highlight"></span>' +
            '                        <span class="select-bar"></span>' +
            '                        <label for="22222" class="select-label">*Rol</label>' +
            '                    </div>' +
            '                </div>' +
            '               <div class="col-12">' +
            '                   <div class="md-form">' +
            '                       <label for="3333333">*Mensaje</label>' +
            '                       <input type="text" id="3333333" class="form-control form-control-sm" autocomplete="off">' +
            '                       <div class="div-validador">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 text-center pt-3">' +
            '                   <button id="send_invite" class="btn btn-dig-blue">Enviar</button>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    popUpCalendarPrivateBodyCancel: function () {
        return '    <div class="body-pop-m6">' +
            '       <div class="pesqui">' +
            '           <div class="pesqui-wrap">' +
            '               <h4>Pesquisas</h4>' +
            '               <img src="../bto/images/pesq/sgv.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/ant.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/vis.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/lab.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/aud.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/odt.png" class="img-pop-pesq" />' +
            '           </div>' +
            '       </div>' +
            '       <div class="container-fluid form-pop-m6  pt-4">' +
            '           <div class="row">' +
            '               <div class="col-12 col-sm-3 col-md-3">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Fecha</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="22-10-2018" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Hora</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="07:00" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-2 col-md-1">' +
            '                   <p class="alleter">a</p>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal"></label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="13:00" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Status</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="En marcha" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">N° Beneficiarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="8" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Ubicación</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="4ta. Av con 6ta los Palos Grandes" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Voluntarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="25 Registrados" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Tipo de Jornada</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="Privada" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 text-center pt-3">' +
            '                  <button id="cancelar" class="btn btn-dig-blue">Cancelar</button>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    popUpCalendarPublicBody: function () {
        return '    <div class="body-pop-m6">' +
            '       <div class="pesqui">' +
            '           <div class="pesqui-wrap">' +
            '               <h4>Pesquisas</h4>' +
            '               <img src="../bto/images/pesq/sgv.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/ant.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/vis.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/lab.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/aud.png" class="img-pop-pesq" />' +
            '               <img src="../bto/images/pesq/odt.png" class="img-pop-pesq" />' +
            '           </div>' +
            '       </div>' +
            '       <div class="container-fluid form-pop-m6  pt-4">' +
            '           <div class="row">' +

            '               <div class="col-1 col-md-1 pt-4">' +
            '                   <div class="round">' +
            '                       <input type="checkbox" id="turn_1" />' +
            '                       <label for="turn_1"></label>' +
            '                       <span></span>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6 col-md-3">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Fecha</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="22-10-2018" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal">Hora</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="07:00" disabled>' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-2 col-md-1">' +
            '                   <p class="alleter">a</p>' +
            '               </div>' +
            '               <div class="col-5 col-md-2 este">' +
            '                   <div class="md-form w">' +
            '                       <label for="c_redLocal"></label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="13:00" disabled>' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Status</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="En marcha" disabled>' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 col-md-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">N° Beneficiarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="8" disabled>' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Ubicación</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off" value="4ta. Av con 6ta los Palos Grandes" disabled>' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Voluntarios</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="25 Registrados" disabled>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-6">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Tipo de Jornada</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm" value="Privada" disabled>' +
            '                   </div>' +
            '               </div>' +
            '                <div class="col-12">' +
            '                    <div class="select mt-2">' +
            '                        <select id="22222" class="select-text" required>' +
            '                            <option disabled selected></option>' +
            '                            <option value="1">Option 1</option>' +
            '                            <option value="2">Option 2</option>' +
            '                            <option value="3">Option 3</option>' +
            '                        </select>' +
            '                        <span class="select-highlight"></span>' +
            '                        <span class="select-bar"></span>' +
            '                        <label for="22222" class="select-label">*Rol</label>' +
            '                    </div>' +
            '                </div>' +
            '               <div class="col-12 text-center">' +
            '                   <button id="participar" class="btn btn-dig-blue">Participar</button>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    popUpCalendarCancelBody: function () {
        return '       <div class="form-pop-m6  pt-4">' +
            '           <div class="row">' +
            '               <div class="col-12">' +
            '                   <p>¿Estás seguro que deseas cancelar tu participación en esta jornada?</p>' +
            '               </div>' +
            '               <div class="col-12 pb-4">' +
            '                   <div class="div_sino">' +
            '                       <div class="col-12">' +
            '                           <div class="tipo-re-fa">' +
            '                               <div class="round round22">' +
            '                                   <input type="radio" id="dir_si" name="radio-dir">' +
            '                                   <label for="dir_si"></label>' +
            '                                   <span>Si estoy seguro</span>' +
            '                               </div>' +
            '                           </div>' +
            '                           <div class="tipo-re-fa">' +
            '                               <div class="round round22">' +
            '                                   <input type="radio" id="dir_no" name="radio-dir">' +
            '                                   <label for="dir_no"></label>' +
            '                                   <span>No estoy seguro</span>' +
            '                               </div>' +
            '                           </div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12">' +
            '                   <div class="md-form">' +
            '                       <label for="c_redLocal" class="active">Indícanos la razón</label>' +
            '                       <input type="text" id="c_redLocal" class="form-control form-control-sm " autocomplete="off">' +
            '                       <div class="div-validador text-left">' +
            '                           <div class="bto-validator">&nbsp;</div>' +
            '                       </div>' +
            '                   </div>' +
            '               </div>' +
            '               <div class="col-12 text-center">' +
            '                   <button id="cancelar_last" class="btn btn-dig-blue">Enviar</button>' +
            '               </div>' +
            '           </div>' +
            '       </div>' +
            '    </div>';
    },
    missPassword: function () {
        var html = '' +
            '<p>Escribe aquí el correo electrónico que usaste para registrarte en la plataforma.' +
            '<br>Luego revisa tu bandeja de entrada</p>' +
            '<div class="container-fluid">' +
            '    <div class="row ">' +
            '        <div class="col-md-12 pt-2">' +
            '            <div class="md-form">' +
            '                <label for="rp_email">Correo electrónico</label>' +
            '                <input type="text" id="rp_email" class="form-control form-control-sm " autocomplete="off">' +
            '                <div class="div-validador text-left">' +
            '                    <div class="bto-validator">&nbsp;</div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>' +
            '<div class="col-md-12 pb-2 text-center">' +
            '    <button class="btn btn-dig-blue" id="recoveryPass">Enviar</button>' +
            '</div>';
        return html;
    },
    popUpModule4: function (id, text) {
        var html = '<div id="MyModalDigi" class="digi-modal digi-popup principal-pop-m6 more-opt" >';

        html += "<div class='text-center font-weight-bold'><h3>Más Opciones</h3></div>"

        html += ' <div class="autori col-12">' +
            '<div class="col-12">' +
            '   <div class="round">' +
            '        <input type="checkbox" id="check10" />' +
            '        <label for="check10"></label>' +
            '        <span>Comenzar evaluación médica</span>' +
            '    </div>' +
            '</div>';
        html += '<div class="col-12">' +
            '   <div class="round">' +
            '        <input type="checkbox" id="check11" />' +
            '        <label for="check11"></label>' +
            '        <span>Eliminar registro</span>' +
            '    </div>' +
            '</div>';
        html += '<div class="col-12">' +
            '   <div class="round">' +
            '        <input type="checkbox" id="check12" />' +
            '        <label for="check12"></label>' +
            '        <span>Registrar beneficiario nuevo</span>' +
            '    </div>' +
            '</div>';
        html += '<div class="col-12">' +
            '   <div class="round">' +
            '        <input type="checkbox" id="check13" />' +
            '        <label for="check13"></label>' +
            '        <span>Registro masivo</span>' +
            '    </div>' +
            '</div>';
        html += '<div class="col-12">' +
            '   <div class="round">' +
            '        <input type="checkbox" id="check1" />' +
            '        <label for="check1"></label>' +
            '        <span>ir a Home</span>' +
            '    </div>' +
            '</div>';
        html += '<div class="col-12 text-center">' +
            ' <button class="btn btn-dig-blue cerrar-si">Aceptar</button>' +
            '</div>';
        html += '</div></div>';
        return html;
    },
    newDateM6: function (id) {
        return '<div id="divp_' + id + '" class="new_date_cre col-12 row">'
            + '<div class="col-sm-4 text-center ">'
            + '    <input type="text" id="inp_' + id + '" class="aa datepicker-here text-center" data-language="es"'
            + '        data-date-format="dd - mm - yyyy" readonly placeholder="DD - MM - YY"  />'
            + '    <div class="div-validador">'
            + '        <div class="bto-validator">&nbsp;</div>'
            + '    </div>'
            + '</div>'
            + '<div class="col-sm-3 text-center">'
            + '    <input type="time" class=" aa text-center"  value="00:00" />'
            + '    <div class="div-validador">'
            + '        <div class="bto-validator">&nbsp;</div>'
            + '    </div>'
            + '</div>'
            + '<div class="col-sm-1 text-center">'
            + '    <label>a</label>'
            + '</div>'
            + '<div class="col-sm-3 text-center">'
            + '    <input type="time" class="aa text-center"  value="00:00"/>'
            + '    <div class="div-validador">'
            + '        <div class="bto-validator">&nbsp;</div>'
            + '    </div>'
            + '</div>'
            + '<div class="col-sm-1 rest_date_jou">'
            + '    <img src="../bto/images/icon/Icon_x.png" />'
            + '</div>'
            + '</div>';
    },
    cardModule13: function (_type, _name, _cargo, _country, _color, _id) {
        var html = ' ';

        html = '<div class="card-search-detail ' + _color + '">'
            + '  <div class="card-body-detail">'
            + '    <h2>' + _name + '</h2>'
            + '    <h3><span>' + _cargo + '</span> - ' + _country + '</h3>'
            + '    <p class="text-dig-silver-light ">Digisalud</p>'
            + '  </div>';
        if (_type == 1) {
            html += '<div class="card-button-detail">'

                + '<div class="round round-large">'
                + '<input type="checkbox" id="' + _id + '"/>'
                + '<label for="' + _id + '"></label>'
                + '<span></span>'
                + '</div>'

                // + '   <button class="btn_add btn btn-dig-silver-inv">AGREGAR</button>'
                // + '   <button class="btn_invite mt-3 btn btn-dig-silver-inv">INVITAR</button>'
                + '</div>';
        } else if (_type == 2) {
            html += '<div class="card-button-detail edit_vol">'
                + '   <button class="btn_edit_vol btn btn-dig-silver-inv">EDITAR</button>'
                + '   <button class="btn_delete_vol mt-3 btn btn btn-dig-silver-inv">ELIMINAR</button>'
                + '</div>';
            html += '<div class="card-button-detail save_vol">'
                + '   <button class="btn_save_vol btn btn-dig-silver-inv mt-4">GUARDAR</button>'
                + '</div>';
        } else {
            html += '<div class="card-button-detail">'
                + '   <button class="btn_record_vol btn btn-dig-silver-inv">RECORDAR</button>'
                + '   <button class="btn_delete_vol_conf mt-3 btn btn-dig-silver-inv">ELIMINAR</button>'
                + '</div>';
        }
        html += '</div>';

        return html;
    },

    // Formularios
    title: function (_title) {
        return '<div class="col-12 title-m4">' +
            '       <h3>' + _title + '</h3>' +
            '   </div>';
    },
    subTitle: function (_title, _paT) {
        return '<div class="col-12 subtitle-m4 ' + _paT + '">' +
            '       <h3>' + _title + '</h3>' +
            '   </div>';
    },
    input: function (_id, _name) {
        return '<div class="md-form mt-3">' +
            '       <label for="' + _id + '">' + _name + '</label>' +
            '       <input type="text" id="' + _id + '" class="form-control form-control-sm" autocomplete="off">' +
            '       <div class="div-validador">' +
            '           <div class="bto-validator">&nbsp;</div>' +
            '       </div>' +
            '   </div>';
    },
    checkEncuesta: function (_id, _name) {
        return '<div class="tipo-re-encu">' +
            '        <div class="round">' +
            '            <input type="checkbox" id="' + _id + '" />' +
            '            <label for="' + _id + '"></label>' +
            '           <span>' + _name + '</span>' +
            '       </div>' +
            '   </div>';
    }
};

// Data
var Data = {
    getHistorialDeSalud: function () {
        return [
            {
                'section': 'Al Nacer',
                'type': '2',
                'data': [
                    { 'id': 'a1', 'name': 'Fórceps', 'type': 'checkEncuesta' },
                    { 'id': 'a2', 'name': 'Ictericia', 'type': 'checkEncuesta' },
                    { 'id': 'a3', 'name': 'Prematuro', 'type': 'checkEncuesta' },
                    { 'id': 'a4', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }, {
                'section': 'Virus',
                'type': '2',
                'data': [
                    { 'id': 'a5', 'name': 'Meningitis', 'type': 'checkEncuesta' },
                    { 'id': 'a6', 'name': 'Respiratorios', 'type': 'checkEncuesta' },
                    { 'id': 'a7', 'name': 'Sarampión', 'type': 'checkEncuesta' },
                    { 'id': 'a8', 'name': 'Varicela', 'type': 'checkEncuesta' },
                    { 'id': 'a9', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }, {
                'section': 'Padecimientos',
                'type': '2',
                'data': [
                    { 'id': 'a10', 'name': 'Anemia', 'type': 'checkEncuesta' },
                    { 'id': 'a11', 'name': 'Asma', 'type': 'checkEncuesta' },
                    { 'id': 'a12', 'name': 'Diábetes', 'type': 'checkEncuesta' },
                    { 'id': 'a13', 'name': 'Epilepsia', 'type': 'checkEncuesta' },
                    { 'id': 'a14', 'name': 'Malformaciones Congénitas', 'type': 'checkEncuesta' },
                    { 'id': 'a15', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }, {
                'section': 'Dificultades',
                'type': '2',
                'data': [
                    { 'id': 'a16', 'name': 'Lenguaje', 'type': 'checkEncuesta' },
                    { 'id': 'a17', 'name': 'Auditiva', 'type': 'checkEncuesta' },
                    { 'id': 'a18', 'name': 'Visual', 'type': 'checkEncuesta' },
                    { 'id': 'a19', 'name': 'Aprendizaje', 'type': 'checkEncuesta' },
                    { 'id': 'a20', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }, {
                'section': 'Atención Especial',
                'type': '2',
                'data': [
                    { 'id': 'a21', 'name': 'Neurológica', 'type': 'checkEncuesta' },
                    { 'id': 'a22', 'name': 'Psicológica', 'type': 'checkEncuesta' },
                    { 'id': 'a23', 'name': 'Psicopedagógica', 'type': 'checkEncuesta' },
                    { 'id': 'a24', 'name': 'Psiquiátrica', 'type': 'checkEncuesta' },
                    { 'id': 'a25', 'name': 'Terapia del Lenguaje', 'type': 'checkEncuesta' },
                    { 'id': 'a26', 'name': 'Terapia Ocupacional', 'type': 'checkEncuesta' },
                    { 'id': 'a27', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }, {
                'section': 'Tipo de Sangre',
                'type': '2',
                'data': [
                    { 'id': 'a28', 'name': 'AB+', 'type': 'checkEncuesta' },
                    { 'id': 'a29', 'name': 'AB-', 'type': 'checkEncuesta' },
                    { 'id': 'a30', 'name': 'A+', 'type': 'checkEncuesta' },
                    { 'id': 'a31', 'name': 'A-', 'type': 'checkEncuesta' },
                    { 'id': 'a32', 'name': 'B+', 'type': 'checkEncuesta' },
                    { 'id': 'a33', 'name': 'B-', 'type': 'checkEncuesta' },
                    { 'id': 'a34', 'name': 'O+', 'type': 'checkEncuesta' },
                    { 'id': 'a35', 'name': 'O-', 'type': 'checkEncuesta' },
                    { 'id': '', 'name': '', 'type': 'break' },
                ]
            }, {
                'section': 'Indique Alergias',
                'type': '2',
                'data': [
                    { 'id': 'a38', 'name': 'Rinitis', 'type': 'checkEncuesta' },
                    { 'id': 'a39', 'name': 'Urticaria', 'type': 'checkEncuesta' },
                    { 'id': 'a40', 'name': 'Anafiláxia', 'type': 'checkEncuesta' },
                    { 'id': 'a41', 'name': 'Respiratorias', 'type': 'checkEncuesta' },
                    { 'id': 'a42', 'name': 'Asma', 'type': 'checkEncuesta' },
                    { 'id': 'a43', 'name': 'Dermatológica', 'type': 'checkEncuesta' },
                    { 'id': 'a44', 'name': 'Conjuntivitis', 'type': 'checkEncuesta' },
                    { 'id': 'a45', 'name': 'Otro (indique)', 'type': 'input' },
                ]
            }
        ]
    },
    getAntecendentesFamiliares: function () {
        return [
            {
                'section': 'Antecedentes familiares',
                'type': '1',
                'data': [
                    { 'id': '1', 'name': 'Anemia', 'type': 'checkEncuesta' },
                    { 'id': '2', 'name': 'Asma', 'type': 'checkEncuesta' },
                    { 'id': '3', 'name': 'Cardiovasculares', 'type': 'checkEncuesta' },
                    { 'id': '4', 'name': 'Ceguera', 'type': 'checkEncuesta' },
                    { 'id': '5', 'name': 'Diábetes', 'type': 'checkEncuesta' },
                    { 'id': '6', 'name': 'Epilepsia', 'type': 'checkEncuesta' },
                    { 'id': '7', 'name': 'Discapacidad', 'type': 'checkEncuesta' },
                    { 'id': '8', 'name': 'Glaucoma   ', 'type': 'checkEncuesta' },
                    { 'id': '9', 'name': 'Hepáticas', 'type': 'checkEncuesta' },
                    { 'id': '10', 'name': 'Hipertensión', 'type': 'checkEncuesta' },
                    { 'id': '11', 'name': 'Hipertensión', 'type': 'checkEncuesta' },
                    { 'id': '12', 'name': 'Meningitis', 'type': 'checkEncuesta' },
                    { 'id': '13', 'name': 'Mentales', 'type': 'checkEncuesta' },
                    { 'id': '14', 'name': 'Sordera', 'type': 'checkEncuesta' },
                    { 'id': '15', 'name': 'Várices', 'type': 'checkEncuesta' },
                ]
            }, {
                'section': 'Cáncer',
                'type': '2',
                'data': [
                    { 'id': '17', 'name': 'de Mama', 'type': 'checkEncuesta' },
                    { 'id': '18', 'name': 'de Riñón', 'type': 'checkEncuesta' },
                    { 'id': '19', 'name': 'de Pulmón', 'type': 'checkEncuesta' },
                    { 'id': '20', 'name': 'de Hígado', 'type': 'checkEncuesta' },
                    { 'id': '21', 'name': 'de Próstata', 'type': 'checkEncuesta' },
                    { 'id': '22', 'name': 'de Colon', 'type': 'checkEncuesta' },
                    { 'id': '23', 'name': 'Cerebral', 'type': 'checkEncuesta' },
                    { 'id': '24', 'name': 'de Piel', 'type': 'checkEncuesta' },
                    { 'id': '25', 'name': 'de Vejiga', 'type': 'checkEncuesta' },
                    { 'id': '26', 'name': 'de Estómago', 'type': 'checkEncuesta' },
                    { 'id': '27', 'name': 'de Páncreas', 'type': 'checkEncuesta' },
                    { 'id': '28', 'name': 'Leucemia', 'type': 'checkEncuesta' },
                    { 'id': '29', 'name': 'Linfoma No Hodking', 'type': 'checkEncuesta' }
                ]
            }, {
                'section': 'Malformaciones congénitas',
                'type': '2',
                'data': [
                    { 'id': '30', 'name': 'Labio Leporino', 'type': 'checkEncuesta' },
                    { 'id': '31', 'name': 'Pie de Equino', 'type': 'checkEncuesta' },
                    { 'id': '32', 'name': 'Polidactilia', 'type': 'checkEncuesta' },
                    { 'id': '33', 'name': 'Espina Bífida', 'type': 'checkEncuesta' },
                    { 'id': '34', 'name': 'Fisura Palatina', 'type': 'checkEncuesta' },
                    { 'id': '35', 'name': 'Pie Deforme', 'type': 'checkEncuesta' },
                    { 'id': '36', 'name': 'Anencefalia', 'type': 'checkEncuesta' },
                    { 'id': '37', 'name': 'Hidrocefália', 'type': 'checkEncuesta' },
                    { 'id': '38', 'name': 'Displasia de la Cadera', 'type': 'checkEncuesta' },
                    { 'id': '39', 'name': ' Pie Deforme', 'type': 'checkEncuesta' }
                ]
            }
        ];
    },
}