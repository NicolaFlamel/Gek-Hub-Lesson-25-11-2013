/**
 * Created by Артем on 25.11.13.
 */
;(function($){

    var input = $('input');
    console.log(input.prop({value:'asd',title:'qwe'}));
    console.log(input.prop('title',function(index,value){
        //console.log($(this).val());
        console.log(this.value);
        console.log(arguments);
    }));

})(jQuery);