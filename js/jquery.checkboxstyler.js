
/*
* Checkboxstyler plugin for jQuery
* ---
* Copyright 2013, Sergey Sukhenko
* Released under the MIT, BSD, and GPL Licenses.
*/
(function($){
	$.fn.checkboxstyler = function(options) {
     var settings = $.extend({
        'class':''
    }, options);
     this_class = ' ' + settings['class'] + '';
     if ($('.'+$(this).attr('class')).length>0){
        this.each(function() {
           var id_elem=$(this).attr('id');
           $(this).hide();

           $(this).addClass('checkboxelem_'+id_elem);
           if ($(this).prop('checked')===false){
              $(this).after('<div id="checkboxstyler_'+id_elem+'" class="'+this_class+' checkboxstyler noselect"></div>');
          }
          else{
              $(this).after('<div id="checkboxstyler_'+id_elem+'" class="'+this_class+' checkboxstyler yesselect"></div>');
          }
          var one_elem=$('#checkboxstyler_'+id_elem)
          one_elem.click(function(e){
            e.preventDefault();
            var temp = $(this).attr('id');
            temp = temp.replace(/checkboxstyler_/g, "");
            if ($(this).hasClass('noselect')){
                $(this).removeClass('noselect');
                $(this).addClass('yesselect');
                $('.checkboxelem_'+temp).attr("checked",true);
            }
            else{
                $(this).removeClass('yesselect');
                $(this).addClass('noselect'); 
                $('.checkboxelem_'+temp).removeAttr("checked");
            }
        });
      });
}
};
})( jQuery );