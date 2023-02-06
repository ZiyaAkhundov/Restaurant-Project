const tl=gsap.timeline({defaults:{duration:0.75, ease:"power1.out"}});
tl.fromTo('.header-image img',{scale:0},{scale:1});
const headerText=new SplitType('.headerAnimate');
gsap.to('.char',{y:0,stagger:0.05,delay:0.2,duration:0.1})

$("#navOpen").on("click",function(){
    $("#navResponsiveLogoMain").css("display", "none");
    $("nav").find("ul.nav").addClass("direction-column");
})
$("nav").find("ul.nav").css("flex-direction", "row");
$(".line").css({"display":"inline-block","width": ""});

$(window).scroll(function() {

    if ($(this).scrollTop()==0){
        $("#navbarTransparent").addClass("visible");
        $("#navbarBlack").css({"transform": "translateY(-110px)","transition":"transform .5s","transition-delay":"0.2s","transition-duration":0.1})
    }
    else{
        $("#navbarBlack").addClass("visible");
        $("#navbarBlack").css({"transform": "translateY(0)","transition":"transform .5s"})
        $("#navbarTransparent").removeClass("visible")
    }
});
