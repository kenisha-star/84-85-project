canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
r_w=100,r_h=90,r_x=100,r_y=200;
b_image="mars.jpg",r_image="rover.png";
function picture() {
 b=new Image();
 b.onload=upbg;
 b.src=b_image;

 r=new Image();
 r.onload=uprover;
 r.src=r_image;
}
function upbg() {
ctx.drawImage(b,0,0,canvas.width,canvas.height);  
}
function uprover() {
ctx.drawImage(r,r_x,r_y,r_w,r_h);    
}