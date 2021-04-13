var background = document.getElementById("background");
var player = document.getElementById("player");
var unit = parseFloat(window.getComputedStyle(player).getPropertyValue("width"));
var centreX= unit*10;
var centreY= unit*18;
var x = parseFloat(window.getComputedStyle(background).getPropertyValue("left"));
var y = parseFloat(window.getComputedStyle(background).getPropertyValue("top"));
var backgroundWidth=parseFloat(window.getComputedStyle(background).getPropertyValue("width"));
var backgroundHeight=parseFloat(window.getComputedStyle(background).getPropertyValue("height"));
var speed = parseFloat(window.getComputedStyle(player).getPropertyValue("width"))/8;
var imageX=0;
var imageY=0;
var changeImage=true;


setInterval(function(){changeImage=true;},100);


function shiftImage(dir) {
    if(changeImage){
        player.style.backgroundImage=`url(images/Vittorio/V-${dir}-${imageX}.png)`;
        imageX++;
        if(imageX==3){
            imageX=0;
        }
        changeImage=false;
    }
}


document.addEventListener("keyup", event=>{
    imageX=0;
    shiftImage(0);
})


function moveLeft(moveSpeed){
    console.log(x);
    if(checkBorders(moveSpeed,0)){
        x+=moveSpeed;
        background.style.left = x + "px";
        
    }
    shiftImage(moveSpeed>0 ? 2 : 1);
}
function moveTop(moveSpeed){
    console.log(y);
    if(checkBorders(0,moveSpeed)){
        y+=moveSpeed;
        background.style.top = y +"px";
        
    }
    shiftImage(moveSpeed>0 ? 3 : 0);
}


document.addEventListener("keydown", event=>{
    if(event.key==="ArrowLeft"|| event.key==="a") moveLeft(+speed);
    if(event.key==="ArrowRight"|| event.key==="d") moveLeft(-speed);
    if(event.key==="ArrowUp"|| event.key==="w") moveTop(+speed);
    if(event.key==="ArrowDown"|| event.key==="s") moveTop(-speed);
});


function checkBorders(movementLeft, movementTop){
    //return true;
    console.log(backgroundHeight);
    if(movementLeft){
        if(x+movementLeft>unit*5-unit/2 || x+movementLeft<-backgroundWidth+unit*10-unit*5+unit/2) return false;
    };
    if(movementTop){
        if(y+movementTop>unit*4 || y+movementTop<-backgroundHeight+unit*8-unit*4+unit/2) return false;
    };
    return true;
}