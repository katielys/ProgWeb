
function handleMouseOver(e){
    e.target.style.background='black';
    e.target.style.color='white';
   }

   var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//invoking the object
var cir = new circle(30, 30, 15, '#000FFF');

function circle(x, y, radius, color){
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI*2);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}