var player = document.getElementById("player");
var x = parseFloat(window.getComputedStyle(player).getPropertyValue("left"));
var y = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
var speed = 5;
console.log(y);
console.log(x);

function moveLeft(moveSpeed){
    console.log(x);
    x+=moveSpeed;
    player.style.left = x + "px";
    
}
function moveTop(moveSpeed){
    console.log(y);
    y+=moveSpeed;
    player.style.top = y +"px";
}


document.addEventListener("keydown", event=>{
    if(event.key==="ArrowLeft"|| event.key==="a") moveLeft(-speed);
    if(event.key==="ArrowRight"|| event.key==="d") moveLeft(+speed);
    if(event.key==="ArrowUp"|| event.key==="w") moveTop(-speed);
    if(event.key==="ArrowDown"|| event.key==="s") moveTop(+speed);
})