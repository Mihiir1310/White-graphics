/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

/***************preloader***********/
$(window).on('load',function(){
    $('#preloader').delay(500).fadeOut('slow')
});

/*************team section*******/
$(document).ready(function(){
    $("#team-right").owlCarousel({
        items:2,
        autoplay:true,
        margin:20,
        loop:true,
        nav:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        dots:false,
        navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
    });
});

$(document).ready(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow")+"%"
            },800);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


$(document).ready(function(){
    $('#services-tabs').responsiveTabs({
        animation:'slide'
    });
});


/********portfolio section********/
$(document).ready(function(){
    $("#isotope-continer").isotope({});
    
    $("#isotope-filters").on("click","button",function(){
        let filterValue=$(this).attr("data-filter");
//        console.log(filterValue);
        $("#isotope-container").isotope({
            filter: filterValue
        });
        
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled: true
    },
    zoom:{
        enabled:true,
        duration:300,
        easing:'ease-in-out',
        
        opener:function(openerElement){
            return openerElement.is('img') ? openerElement:
            openerElement.find('img')
        }
    }
    })
});
/*************testimonial section*******/
$(document).ready(function(){
  $("#testimonial-cards").owlCarousel({
      items:1,
      autoplay:true,
      margin:20,
      loop:true,
      nav:true,
      smartSpeed:1000,
      autoplayHoverPause:true,
      dots:false,
      navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
  });
});


$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      autoplay:true,
      margin:20,
      loop:true,
      nav:true,
      smartSpeed:1000,
      autoplayHoverPause:true,
      dots:false,
      navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
      
  });
});

/*************clients section*******/
$(document).ready(function(){
    $("#client-images").owlCarousel({
        items:6,
        autoplay:false,
        margin:10,
        loop:true,  
        nav:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        dots:false,
        navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:3,
                nav:true
            },
            768:{
                items:6,
                nav:true
            }
        }
    });
});


/********portfolio section********/
$(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:true,
        nav:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        dots:false,
        navText:['<i class="lni-chevron-left-circle"></i>','<i class="lni-chevron-right-circle"></i>'],
        responsive:{
            0:{
                items:2,
                nav:false
            },
            480:{
                items:4
            },
            768:{
                items: 6
            }
        }
    });
});

/*********************************************************
                    STATS COUNTER JS
*********************************************************/

$(document).ready(function(){ 
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            })
});


/************************GOOGLE MAPS**********************/
$(window).on('load',function(){
    console.log("hello world");
    var addressString = "Study link classes<br> RRT Road Mulund West"
    var myLatLng={
        lat:19.173829,
        lng:72.953716
    };
    
    var myMap = new google.maps.Map(document.getElementById('map'),{
        zoom:17,
        center:myLatLng
    });
   // var image='img\map\logo.jpg';
    var marker= new google.maps.Marker({
        position:myLatLng,
        map: myMap,
        title:" click to see address",
       // icon:image
    });
    
    var infoWindow = new google.maps.InfoWindow({
        content: addressString
    });
    marker.addListener('click',function(){
        infoWindow.open(myMap,marker);
    });
    marker.setAnimation(google.maps.Animation.BOUNCE);
    
});


/*************header************************/
$(function (){
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    });
    function showHideNav(){
        if($(window).scrollTop()>50){
            $("nav").addClass("scrolled-navbar green-nav-top");
            
            $(".navbar-brand img").attr('src',"img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();
        }else{
            $("nav").removeClass("scrolled-navbar green-nav-top");
            $(".navbar-brand img").attr('src',"img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});

/***********mobile-nav******************/
$(function(){
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    });
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
        $("#mobile-nav").css("height","0%");
    });
});

/****************smooth scrolling*********************/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(section_id).offset().top +50
        },1250,"easeInOutExpo")
    });
});










