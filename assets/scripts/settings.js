$(document).ready(function(){

    $('#travel-yes').click(function(){
        $(".travelling-place").removeAttr("disabled");
        // $("#travel-abroad").removeAttr("disabled");
    });

    $('#travel-no').click(function(){
        $(".travelling-place").attr("disabled", "");
        // $("#travel-abroad").attr("disabled", "");  
    });

});