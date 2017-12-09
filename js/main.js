$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});

$(document).ready(function(){
    
    $(window).scroll(function(event){
        var y = $(this).scrollTop();
        if(y>=190){
            $('.navigation').addClass('addingclass');
        }
        else{
            $('.navigation').removeClass('addingclass');
        }
    });
});






//function for search bar
    
    
function navbarshow(){
    $(".navbar-left").show("slide",{direction:"right"},500);
    $(".srch").toggleClass('hideme');
    $(".fa-times").toggleClass('showme');
}
function navbarhide(){
    $(".navbar-left").hide("slide",{direction:"right"},500);
    $(".srch").toggleClass('hideme');
    $(".fa-times").toggleClass('showme');
}

$(document).ready(function(){
//function for slider
var fadeOutIdno=100;
var fadeInIdno=101;
var refreshId = setInterval(slideThis,7000);
function slideThis(){
    fadeOutIdno++;
    fadeInIdno++;
    $("#"+fadeOutIdno).fadeOut(00);
    $("#"+fadeInIdno).fadeIn(500);
    if(fadeInIdno==102){
    $(".onebut").css("background-color", "white");
     $(".twobut").css("background-color", "red");
    };
    if(fadeInIdno==103){
    $(".twobut").css("background-color", "white");
     $(".threebut").css("background-color", "red");
    };
    if(fadeInIdno==101){
    $(".threebut").css("background-color", "white");
     $(".onebut").css("background-color", "red");
    };
    if(fadeInIdno==103){
        fadeInIdno=100;
    };
    if(fadeOutIdno==103){
        fadeOutIdno=100;
    };
};
    
    
    
    
    //function for button
    
    $(".onebut").click(function(){
     clearInterval(refreshId);
    
    $("#101").fadeIn(500);
    $("#102").fadeOut(00);
    $("#103").fadeOut(00);
    
    
    $(".onebut").css("background-color", "red");
    $(".threebut").css("background-color", "white");
    $(".twobut").css("background-color", "white");
});


$(".twobut").click(function(){
    
    
    clearInterval(refreshId);
    
    $("#102").fadeIn(500);
    $("#101").fadeOut(00);
    $("#103").fadeOut(00);
    
    $(".twobut").css("background-color", "red");
    $(".onebut").css("background-color", "white");
    $(".threebut").css("background-color", "white");
});


$(".threebut").click(function(){
    
    
    clearInterval(refreshId);
    
    $("#103").fadeIn(500);
    $("#101").fadeOut(00);
    $("#102").fadeOut(00);
    
    $(".threebut").css("background-color", "red");
    $(".onebut").css("background-color", "white");
    $(".twobut").css("background-color", "white");
});

});




//function for food offer


function offershow(){
    $(".offerone").delay(800).show("slide",{direction:"down"},700);
    $(".offertwo").delay(800).show("slide",{direction:"right"},700);
    $(".offerthree").delay(800).show("slide",{direction:"left"},700);
    $(".offerfour").delay(800).show("slide",{direction:"up"},700);
    $(".offermain").addClass('addmain');
    var timedel = setTimeout(delaytwo,1000);
    
}
function offerhide(){
    $(".offerone").hide("slide",{direction:"down"},700);
    $(".offertwo").hide("slide",{direction:"right"},700);
    $(".offerthree").hide("slide",{direction:"left"},700);
    $(".offerfour").hide("slide",{direction:"up"},700);
   var settime = setTimeout(removeoffer,700);
    var timedelay = setTimeout(fordelay,1500);
}

function removeoffer(){
    $(".offermain").removeClass('addmain');
}

$(".btshow").click(function(){
    offershow();
     $(".btshow").css("display","none");
     $(".bestoffer").css("display","none");
});
                     
$(".bthide").click(function(){
    offerhide();
     $(".bthide").css("display","none");
});     

//function delay

function fordelay(){
     $(".bestoffer").css("display","block");
    $(".btshow").css("display","block");
}

function delaytwo(){
     $(".bthide").css("display","block");
}



//function for our menu

function ourMenuOne(){
     $(".menuSliderOne").css("top","-0px");
     $(".menuSliderTwo").css("top","-1192px");
}


function ourMenuTwo(){
     $(".menuSliderOne").css("top","-298px");
     $(".menuSliderTwo").css("top","-894px");
}

function ourMenuThree(){
     $(".menuSliderOne").css("top","-596px");
     $(".menuSliderTwo").css("top","-596px");
}

function ourMenuFour(){
     $(".menuSliderOne").css("top","-894px");
     $(".menuSliderTwo").css("top","-298px");
}

function ourMenuFive(){
     $(".menuSliderOne").css("top","-1192px");
     $(".menuSliderTwo").css("top","-0px");
}

$(".btone").click(function(){
    ourMenuOne();
    
    $(".btone").addClass('activated');
    $(".bttwo").removeClass('activated');
    $(".btthree").removeClass('activated');
    $(".btfour").removeClass('activated');
    $(".btfive").removeClass('activated');
});

$(".bttwo").click(function(){
    ourMenuTwo();
    
     $(".btone").removeClass('activated');
    $(".bttwo").addClass('activated');
    $(".btthree").removeClass('activated');
    $(".btfour").removeClass('activated');
    $(".btfive").removeClass('activated');
});

$(".btthree").click(function(){
    ourMenuThree();
    
     $(".btone").removeClass('activated');
    $(".bttwo").removeClass('activated');
    $(".btthree").addClass('activated');
    $(".btfour").removeClass('activated');
    $(".btfive").removeClass('activated');
});

$(".btfour").click(function(){
    ourMenuFour();
    
     
     $(".btone").removeClass('activated');
    $(".bttwo").removeClass('activated');
    $(".btthree").removeClass('activated');
    $(".btfour").addClass('activated');
    $(".btfive").removeClass('activated');
});

$(".btfive").click(function(){
    ourMenuFive();
    
     
     $(".btone").removeClass('activated');
    $(".bttwo").removeClass('activated');
    $(".btthree").removeClass('activated');
    $(".btfour").removeClass('activated');
    $(".btfive").addClass('activated');
});

//function for parallex scroll


$(window).scroll(function(){
    parra()
})

function parra(){
    var wscroll=$(window).scrollTop();
    

    if(wscroll>=5200){
         $(".chefHeight").css("top",(wscroll-5200)*(2.7)+"px")
    }
}
