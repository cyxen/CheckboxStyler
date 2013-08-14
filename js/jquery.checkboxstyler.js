/*
 * Checkboxstyler plugin for jQuery
 * ---
 * Copyright 2013, Sergey Sukhenko
 * Released under the MIT, BSD, and GPL Licenses.
 */
(function($) {
    $.fn.checkboxstyler = function() {
        //создаем элементы
        count = 0;
        this.each(function() {
            $(this).hide();
            count++;
            $(this).addClass('checkboxelem_' + count);
            if ($(this).prop('checked') === false) {
                $(this).after('<div id="checkboxstyler_' + count + '" class="checkboxstyler noselect"></div>');
            } else {
                $(this).after('<div id="checkboxstyler_' + count + '" class="checkboxstyler yesselect"></div>');
            }
        });
        // обрабатываем клики
        var one_checkbox = $('.checkboxstyler');
        one_checkbox.click(function(e) {
            e.preventDefault();
            id_array = $(this).attr('id').split('_');
            if ($(this).hasClass('noselect')) {
                $(this).removeClass('noselect');
                $(this).addClass('yesselect');
                $('.checkboxelem_' + id_array[1]).attr("checked", true);
            } else {
                $(this).removeClass('yesselect');
                $(this).addClass('noselect');
                $('.checkboxelem_' + id_array[1]).removeAttr("checked");
            }
        });
    };
})(jQuery);