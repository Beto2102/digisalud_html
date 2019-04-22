/* 
 Created on : 19/11/2018, 08:43:44 AM
 Author     : Alberto De Jesus
 PageWeb    : https://btowebsolutions.com
 */

var btoCalendar = {
    init: function (_year, _month, _week, _values) {
        var that = this;
        $("#type1").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            if ($(this).data("activity") == 1) {
                $(this).data("activity", 0);
                $(this).removeClass("bto-day-activity-blue").addClass("bto-day-activity-silver");
            } else {
                $(this).data("activity", 1);
                $(this).removeClass("bto-day-activity-silver").addClass("bto-day-activity-blue");
            }
            if ($(".bto-type-month").data("status") == 1) {
                $(".bto-days").html(that.callDays(year, month, week, _values));
            } else {
                $(".bto-days").html(that.callWeek(year, month, week, _values));
            }
        });
        $("#type2").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            if ($(this).data("activity") == 1) {
                $(this).data("activity", 0);
                $(this).removeClass("bto-day-activity-blue-light").addClass("bto-day-activity-silver");
            } else {
                $(this).data("activity", 1);
                $(this).removeClass("bto-day-activity-silver").addClass("bto-day-activity-blue-light");
            }
            if ($(".bto-type-month").data("status") == 1) {
                $(".bto-days").html(that.callDays(year, month, week, _values));
            } else {
                $(".bto-days").html(that.callWeek(year, month, week, _values));
            }
        });
        $(".next-calendar").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            if ($(".bto-type-month").data("status") == 1) {
                month++;
                if (month == 13) {
                    month = 1;
                    year++;
                }
                $(".bto-days").html(that.callDays(year, month, 0, _values));
            } else {
                week++;
                if (week >= that.countWeekByMonth(_year, _month).weeks - 2) {
                    month++;
                    if (month == 13) {
                        month = 1;
                        year++;
                    }
                    week = 0;
                }
                $(".bto-days").html(that.callWeek(year, month, week, _values));
            }
            that.showDiss();
        });
        $(".prev-calendar").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            if ($(".bto-type-month").data("status") == 1) {
                month--;
                if (month == 0) {
                    month = 12;
                    year--;
                }
                $(".bto-days").html(that.callDays(year, month, 0, _values));
            } else {
                week--;
                if (week < 0) {
                    month--;
                    if (month == 0) {
                        month = 12;
                        year--;
                    }
                    week = that.countWeekByMonth(year, month).weeks - 2;
                }
                $(".bto-days").html(that.callWeek(year, month, week, _values));
            }
            that.showDiss();
        });

        $(".bto-type-week").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            $(".bto-type-week").addClass("active").data("status", 1);
            $(".bto-type-month").removeClass("active").data("status", 0);
            $(".bto-days").html(that.callWeek(year, month, week, _values));
            that.showDiss();
        });
        $(".bto-type-month").on("click", function () {
            let year = $("#bto-calendar").data("year");
            let month = $("#bto-calendar").data("month");
            let week = $("#bto-calendar").data("week");
            $(".bto-type-month").addClass("active").data("status", 1);
            $(".bto-type-week").removeClass("active").data("status", 0);
            $(".bto-days").html(that.callDays(year, month, week, _values));
            that.showDiss();
        });
        $(".bto-days").html(that.callDays(_year, _month, _week, _values));
//        $(".bto-days").html(that.callWeek(_year, _month, _week, _values));
    },
    showDiss: function () {
        $("[data-btotype]").each(function () {
            var type1 = $("#type1").data("activity");
            var type2 = $("#type2").data("activity");
            var value = $(this).data("btotype");
            if (value == 1) {
                if (type1 == 0) {
                    $(this).css("visibility", "hidden");
                } else {
                    $(this).css("visibility", "visible");
                }
            }

            if (value == 2) {
                if (type2 == 0) {
                    $(this).css("visibility", "hidden");
                } else {
                    $(this).css("visibility", "visible");
                }
            }

        });
    },
    monthTranslate: function (_month) {
        var arrayMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return arrayMonth[_month - 1];
    },
    dayTranslate: function (_day) {
        var arrayMonth = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
        return arrayMonth[_day];
    },
    callWeek: function (_year, _month, _week, _values) {
        var html = '';
        var that = this;
        var contador = 0;
        var labelMonth;
        var totaitem = 10;
        var type1 = $("#type1").data("activity");
        var type2 = $("#type2").data("activity");

        // Fecha Actual
        var now = new Date();

        // Total de dias a restar
        var startDayMonth = (this.CalDayOfWeek(1, _month, _year) - 1) - (_week * 7);

        // Fecha Solicitada
        var myDate = new Date(_year + '/' + _month + '/01');
        myDate.setDate(myDate.getDate() - startDayMonth);
        labelMonth = myDate.getMonth() + 1;

        // Header
        var ArrayTEMP = [];
        for (var a = 0; a < 7; a++) {
            if (myDate.getDate() == now.getDate() && myDate.getMonth() == now.getMonth() && myDate.getYear() == now.getYear()) {
                html += that.structureHeaderWeek("today", that.dayTranslate(contador), myDate.getDate());
            } else {
                html += that.structureHeaderWeek("", that.dayTranslate(contador), myDate.getDate());
            }
            var contItem = 0;

            $.each(_values, function (key, value) {
                if (contador == 0) {
                    ArrayTEMP.push(value);
                }
                var ciclo = new Date(value.date);
                if (myDate.getDate() == ciclo.getDate() && myDate.getMonth() == ciclo.getMonth() && myDate.getYear() == ciclo.getYear()) {
                    contItem++;
                }
            });
            // Numero de cuadros que vamos a pintar en los dias si es mayor a 10 pinta mas sino no
            if (contItem > totaitem) {
                totaitem = contItem;
            }
            contador++;
            myDate.setDate(myDate.getDate() + 1);
        }

        // Contenido
        for (var a = 0; a < totaitem; a++) {
            var temDate = new Date(_year + '/' + _month + '/01');
            temDate.setDate(temDate.getDate() - startDayMonth);
            // Numero de dias a pintar
            for (var t = 0; t < 7; t++) {
                var entro = 0;
                // Busco fecha a fecha el item numero a 
                $.each(ArrayTEMP, function (keyTEMP, valueTEMP) {
                    var ciclo = new Date(valueTEMP.date);
                    if (temDate.getDate() == ciclo.getDate() && temDate.getMonth() == ciclo.getMonth() && temDate.getYear() == ciclo.getYear() && ((type1 == 1 && valueTEMP.type == 1) || (type2 == 1 && valueTEMP.type == 2))) {
                        if (now > temDate || temDate.getMonth() != now.getMonth()) {
                            html += that.structureContentWeek(valueTEMP.label, valueTEMP.type, "expired", "");
                        } else {
                            if (ciclo.getDate() == now.getDate() && ciclo.getMonth() == now.getMonth() && ciclo.getYear() == now.getYear()) {
                                html += that.structureContentWeek(valueTEMP.label, valueTEMP.type, "", "today");
                            } else {
                                html += that.structureContentWeek(valueTEMP.label, valueTEMP.type, "", "");
                            }
                        }
                        entro = 1;
                        ArrayTEMP.splice(keyTEMP, 1);
                        return false;
                    }
                });
                if (entro == 0) {
                    if (temDate.getDate() == now.getDate() && temDate.getMonth() == now.getMonth() && temDate.getYear() == now.getYear()) {
                        html += that.structureContentWeek("", null, "", "today");
                    } else {
                        html += that.structureContentWeek("", null, "", "");
                    }

                }
                temDate.setDate(temDate.getDate() + 1);
            }
        }

        // Pinto los valores y actualizo valores de año, mes y semana
        $(".bto-header-month-label").html(that.monthTranslate(_month) + " " + _year);
        $("#bto-calendar").data("year", _year).data("month", _month).data("week", _week);

        return html;
    },
    callDays: function (_year, _month, _week, _values) {
        var that = this;
        var contador = 0;
        var cla = "primeros";
        var cla2 = 'active';
        var html = '';
        var dayWeek = this.CalDayOfWeek(1, _month, _year) - 1;
        var myDate = new Date(_year + '/' + _month + '/01');
        var type1 = $("#type1").data("activity");
        var type2 = $("#type2").data("activity");

        var dd = new Date();
        var m = dd.getMonth() + 1;
        var d = dd.getDate();
        var y = dd.getFullYear();
        var dayLabel = this.CalDayOfWeek(d, m, y) - 1;

        myDate.setDate(myDate.getDate() - dayWeek);
        for (var a = 0; a < that.countWeekByMonth(_year, _month).days; a++) {
            if (contador > 6) {
                cla = '';
            }
            if (contador == dayLabel) {
                cla2 = 'active';
            } else {
                cla2 = '';
            }
            var now = new Date();
            var filters = [];
            $.each(_values, function (key, value) {
                var ciclo = new Date(value.date);
                if (myDate.getDate() == ciclo.getDate() && myDate.getMonth() == ciclo.getMonth() && myDate.getYear() == ciclo.getYear() && ((type1 == 1 && value.type == 1) || (type2 == 1 && value.type == 2))) {
                    filters.push(value);
                }
            });
            if (myDate.getDate() == now.getDate() && myDate.getMonth() == now.getMonth() && myDate.getYear() == now.getYear()) {
                html += that.structureDay(cla, that.dayTranslate(contador), cla2, myDate.getDate(), filters, "today", "");
            } else {
                if (now > myDate || myDate.getMonth() != now.getMonth()) {
                    html += that.structureDay(cla, that.dayTranslate(contador), cla2, myDate.getDate(), filters, "", "expired");
                } else {
                    html += that.structureDay(cla, that.dayTranslate(contador), cla2, myDate.getDate(), filters, "", "");
                }

            }
            contador++;
            myDate.setDate(myDate.getDate() + 1);
        }

        $(".bto-header-month-label").html(that.monthTranslate(_month) + " " + _year);
        $("#bto-calendar").data("year", _year).data("month", _month).data("week", _week);
        return html;
    },
    CalDayOfWeek: function (day, month, year) {
        var a = Math.floor((14 - month) / 12);
        var y = year - a;
        var m = month + 12 * a - 2;
        var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
                Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
        return parseInt(d);
    },
    countWeekMonth: function (_year, _month) {
        var primerdia = ((new Date(_year, _month, 1).getDay() - 1) % 7 + 7) % 7;
        var dias = new Date(_year, _month, 0).getDate() - 7 + primerdia /*+ this.CalDayOfWeek(1,_month,_year)*/;
        return Math.ceil(dias / 7);
    },
    countWeekByMonth: function (_year, _month) {

        var realDate = new Date(_year + '/' + _month + '/01');
        var calDate = new Date(_year + '/' + _month + '/01');
        var week = 1;
        var day = this.CalDayOfWeek(1, _month, _year);
        var numberWeek = this.CalDayOfWeek(1, _month, _year);
//        console.log("\n=================== \n INICIO SEMANA # " + week + " \n===================\n\n");

        while (realDate.getMonth() == calDate.getMonth()) {
//            console.log("Dia Sem:   " + numberWeek);
//            console.log("Dia Fec:   " + day);
            if (numberWeek > 6) {
                numberWeek = 1;
                week++;
//                console.log("\n=================== \n INICIO SEMANA # " + week + " \n===================\n\n");
            } else {
                numberWeek++;
            }

            day++;
            calDate.setDate(calDate.getDate() + 1);
        }
        day += (7 - this.CalDayOfWeek(31, _month, _year)) - 1;
        return {"weeks": week, "days": day};

    },
    structureDay: function (_first, _dayLabel, _dayLabelToday, _day, _values, _today, _expired) {
        if (_day < 10) {
            _day = '0' + _day;
        }

        var clase;
        var html =
                '<div class="bto-day ' + _first + ' ' + _expired + ' ' + _today + '">'
                + '<span class="bto-day-legend ' + _dayLabelToday + '">' + _dayLabel + '</span>'
                + '<span class="bto-day-number ' + _today + '">' + _day + '</span>'
                + '<div class="bto-day-content">';

        var cont = 0;
        for (var x = 0; x < _values.length; x++) {
            if (x > 2) {
                cont++;
            } else {
                if (parseInt(_values[x].type) == 1) {
                    clase = 'bto-day-activity-blue';
                } else {
                    clase = 'bto-day-activity-blue-light';
                }
                html += '      <div class="bto-day-activity" data-btotype="' + _values[x].type + '">'
                        + '        <div class="' + clase + '">'
                        + '            <a href="' + _values[x].url + '">' + _values[x].label + '</a>'
                        + '        </div>'
                        + '    </div>';
            }
        }

        if (cont > 0) {
            html += '      <div class="bto-day-activity" >'
                    + '        <div class="bto-day-activity-legende">'
                    + '            <a href="#">+ ' + cont + ' Jornadas</a>'
                    + '        </div>'
                    + '    </div>';
        }

        html += '    </div>'
                + '</div>';
        return html;
    },
    structureHeaderWeek: function (_today, _dayLabel, _day) {
        if (_day < 10) {
            _day = '0' + _day;
        }

        var html =
                '<div class="bto-day-week ' + _today + '">'
                + '<span class="bto-day-legend">' + _dayLabel + '</span>'
                + '<span class="bto-day-number">' + _day + '</span>'
                + '</div>';
        return html;
    },
    structureContentWeek: function (_label, _type, _expired, _today) {
        var _clss = ' ';
        if (parseInt(_type) == 1) {
            _clss = 'bto-day-activity-blue';
        } else if (parseInt(_type) == 2) {
            _clss = 'bto-day-activity-blue-light';
        }
        var html
                = '<div class="bto-day-week-content ' + _today + '">'
                + '<div class="bto-day-week-content-wrap ' + _expired + ' ' + _clss + '" data-btotype="' + _type + '" >'
                + '<span class="bto-day-week-label"><a class="text-white event-click" href="#" data-btotype="' + _type + '" >' + _label + '</a></span>'
                + '</div>'
                + '</div>';
        return html;
    },
};