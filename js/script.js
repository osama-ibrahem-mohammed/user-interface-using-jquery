$(window).on('load', function(){
    $('#status').fadeOut(4500);
    $('#preloader').fadeOut(4500);
   
})
/*
25-navigator
*/
$(document).ready(function(){
 showhidenav();
 $(window).scroll(function(){
    showhidenav();
 })
})
function showhidenav(){
    if($(window).scrollTop()>50)
    {
           $("nav").addClass("white-nav-bar");
        $(".navbar-brand img").attr("src","img/logo/logo-dark.png")
          
    }
    else
    {
        $("nav").removeClass("white-nav-bar");
        $(".navbar-brand img").attr("src","img/logo/logo.png")
    
    }
}
$(document).ready(function(){

    $("a.smooth-scroll").click(function(e){
        e.preventDefault();
        var section_id = $(this).attr("href")
        $("html,body").animate({
            scrollTop: $(section_id).offset().top    
        },1000)
    })
})



/*
13-team section
*/
$(document).ready(function(){
    $('#team-members').owlCarousel({
        items:2,
        loop:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed:500

    })
})
$(document).ready(function(){
    $("#progress-elements").waypoint(function(){

        $(".progress-bar").each(function(){
            $(this).animate({
             width: $(this).attr("aria-valuenow")+"%",
            },3000)
        });
        this.destroy();
    },{
        offset:'bottom-in-view'
    })
  
})

/*
15-services
*/
$(document).ready(function(){
    $("#services-tabs").responsiveTabs({
        animation:'slide'
    })
})

/*
16- portfolio
*/
$(window).on('load',function(){
    $("#isotope-container").isotope({
      });
      // filter items on button click
      $("#isotope-filters").on('click','button',function(){
        //get filter value
        var filtervalue = $(this).attr('data-filter');
       
        //filter portfolio
        $("#isotope-container").isotope({
            filter : `${filtervalue}`
            
          });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
      });
})

/*magnifier*/ 
$(function(){
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery:{
            enabled:true
        } 
      });
})

/*
19-stats
*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
  })

})