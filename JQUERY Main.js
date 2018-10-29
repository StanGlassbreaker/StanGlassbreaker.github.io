$(document).ready(function(){

offset = $("#button").offset();

$("#button").on("mouseenter",function(e){

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - offset.left;
    relMouseY = mouseY - offset.top;

    $("#fill").css({left:relMouseX, top:relMouseY});
    $("#fill").animate({height:'400px',width:'400px'},500);
});

$("#button").on("mouseleave", function(e){

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - offset.left;
    relMouseY = mouseY - offset.top;

    $("#fill").animate({height:'0px',width:'0px',left:relMouseX,top:relMouseY},400);
});
});
