var item=null;
var animate;
function moveRight()
{
     item=document.getElementById("move1");
    item.style.left=parseInt(item.style.left)+10+'px';
    animate=setTimeout(moveRight,20);
}
function moveLeft()
{
     item=document.getElementById("move2");
    item.style.left=parseInt(item.style.left)-10+'px';
    animate=setTimeout(moveLeft,20);
}
window.onload=moveRight();

moveLeft();
