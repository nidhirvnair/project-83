mouse_event="empty"
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d")

width=screen.width;
new_width=width-50;
new_height=screen.height-300;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if (mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_the_line;
        console.log("Last position of X and Y coordinates=");
        console.log("x="+ last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current position of X and Y coordinates=");
        console.log("x="+ current_position_of_x+"y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_x=current_position_of_x;
    last_position_y=current_position_of_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
}