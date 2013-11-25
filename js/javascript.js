/**
 * Created by Артем on 25.11.13.
 */
;(function($){

    $.fn.asd=function(){
      console.log(this);
      return this.append();
    };

    $('script').asd();

})(jQuery);