//---------------client height and width----------------------------------
var clientH = window.innerHeight;
var clientW = window.innerWidth;

//----convert units to set adaptables widths and heights----------------------
function toVh(value){
    return (100*value)/clientH;
};
function toVw(value){
    return (100*value)/clientW;
};
function vwToPx(value){
    return (clientW*value)/100;
};
function vhToPx(value){
    return (clientH*value)/100;
};

//---------setting apparition from left or right------------

// $(document).ready(function(){
//     $(window).on('scroll', function () {   
//     var elmt   = $('.from-left, .from-right');
//     var topImg = $('.from-left, .from-right').offset().top;
//     var scroll = $(window).scrollTop();   
//     var topImg = $(".firstLeft", ".firstRight").offset().top - 300; 
//     $("#main_name") 
//         $(elmt).each(function() {
//             var topImg = $(this).offset().top - 300;           
//             if ( topImg < scroll ) {                
//             $(this).css("transform", "translate(0,0)");
//             $(this).css("opacity", "1");               
//             };
//         });
//     });
// });

//---------menu for mobile-----------------------------------
var btn_menu = document.getElementById('display_menu');
if((window.getComputedStyle(btn_menu).display)==="block"){
    console.log("affichage mobile");
    $("#display_menu").click(function(){
        $("#main_menu").toggle();
    });

} else { console.log("affichage pc")};

$( window ).resize(function() {
    if(window.innerWidth >= 900){
        $("#main_menu").show();
    } else {
        $("#main_menu").hide();
    }
});