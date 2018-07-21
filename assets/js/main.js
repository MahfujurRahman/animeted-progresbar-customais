(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(document).ready(function(){
            $('#bar1').barfiller({
                barColor:"#000"
            });
        });
        $(document).ready(function(){
            $('#bar2').barfiller({
                barColor:"#000"
            });
        });
        $(document).ready(function(){
            $('#bar3').barfiller({
                barColor:"#000"
            });
        });
        $(document).ready(function(){
            $('#bar4').barfiller({
                barColor:"#000"
            });
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	