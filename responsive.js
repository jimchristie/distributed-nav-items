jQuery(document).ready(function($){
    var navWidth,
        getWidth = function(){
            navWidth = $("#navigation").innerWidth();
			
		},
        assignMargins = function(){
            var navbarInnerWidth = $(".navbar-inner .container").innerWidth() - 10,
                numberOfLiElements = $(".nav > li").length,
                liWidth = Math.floor( navbarInnerWidth / numberOfLiElements ) - 0.2;
            $(".nav li a").css({"width": liWidth, "text-align": "center", "padding": "10px 0"});
        },
        //logs function to check on stuff - call it below if need be
        logs = function(){
            console.log ("navWidth = " + navWidth);
            };
        
    getWidth();
    //logs();
    
    if (navWidth >= 685) {
        assignMargins();
    }
    
    $(window).resize(function(){
        getWidth();
        //logs();
        if ( navWidth >= 685) {
            assignMargins();
        } else {
            $(".nav li a").css({"width":"", "text-align": "", "padding": ""});
        }
    });
});
