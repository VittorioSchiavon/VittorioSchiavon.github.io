var unit = parseFloat(window.getComputedStyle(player).getPropertyValue("width"));

var l=0;
var r=0;
var u=0;
var d=0;
var clicked=false;

class Player{
    constructor(){
        this.element = document.getElementById("player");
        this.imageX=0;
        this.imageY=0;
        this.changeImage=true;
        this.x = parseFloat(window.getComputedStyle(player).getPropertyValue("left"));
        this.y = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
        this.speed = parseFloat(window.getComputedStyle(player).getPropertyValue("width"))/4;
    }

    updateImage(l,t) {
        if(l===1){this.imageY=2};
        if(l===-1){this.imageY=1};
        if(t===1){this.imageY=3};
        if(t===-1){this.imageY=0};
        this.shiftImage();
    }
    
    shiftImage() {
        if(this.changeImage){
            this.element.style.backgroundImage=`url(images/Vittorio/V-${this.imageY}-${this.imageX}.png)`;
            this.imageX++;
            if(this.imageX==3){
                this.imageX=0;
            }
            this.changeImage=false;
        }
    }
}

class Background{
    constructor(){
        this.x = parseFloat(window.getComputedStyle(background).getPropertyValue("left"));
        this.y = parseFloat(window.getComputedStyle(background).getPropertyValue("top"));
        this.height=parseFloat(window.getComputedStyle(background).getPropertyValue("height"));
        this.width=parseFloat(window.getComputedStyle(background).getPropertyValue("width"));
        this.element=document.getElementById("background");
    }
    move(moveLeft, moveTop){
        
        if(this.checkBorders(moveLeft,moveTop)){
            this.x +=PlayerEl.speed*moveLeft;
            this.y +=PlayerEl.speed*moveTop;
            this.element.style.left = this.x + "px";
            this.element.style.top = this.y + "px";
        }
        PlayerEl.updateImage(moveLeft,moveTop);
    }
    
    checkBorders(movementLeft, movementTop){
        if(movementLeft){
            if(this.x+movementLeft*PlayerEl.speed>unit*5-unit/2 || this.x+movementLeft*PlayerEl.speed<-this.width+unit*10-unit*5+unit/2) return false;
        };
        if(movementTop){
            if(this.y+movementTop*PlayerEl.speed>unit*4 || this.y+movementTop*PlayerEl.speed<-this.height+unit*8-unit*4+unit/2) return false;
        };
        return true;
    }
}

var backgroundEl = new Background();
var PlayerEl = new Player();


var t = setInterval(function(){
    PlayerEl.changeImage=true;
    if(clicked || l-d-r+u!=0 ){
        backgroundEl.move(l+r,u+d);
    }
},60);

document.addEventListener("keyup", event=>{
    if(event.key==="ArrowLeft"|| event.key==="a") l=0;
    if(event.key==="ArrowRight"|| event.key==="d") r=0;
    if(event.key==="ArrowUp"|| event.key==="w") u=0;
    if(event.key==="ArrowDown"|| event.key==="s") d=0;
    PlayerEl.imageX=0;
    PlayerEl.changeImage=true;
    PlayerEl.shiftImage();
})


document.addEventListener("keydown", event=>{
    if(event.key==="ArrowLeft"|| event.key==="a") l=1;
    if(event.key==="ArrowRight"|| event.key==="d") r=-1;
    if(event.key==="ArrowUp"|| event.key==="w") u=1;
    if(event.key==="ArrowDown"|| event.key==="s") d=-1;
});


document.addEventListener("mousedown", event=>{
    clicked=true;
    mouseMove(event);
});
document.addEventListener("mouseup", event=>{
    clicked=false;
    l=d=r=u=0;
});

document.addEventListener("mousemove", event=>{
    if(clicked){
        mouseMove(event);
    };
});

function mouseMove(event) {
    l=r=u=d=0;
    if(0 <= event.clientX && event.clientX <= ((window.innerWidth/2)-unit)){
        l=1;
    }else if (event.clientX > ((window.innerWidth/2)+unit)) {
        r=-1;
    }

    if(0<=event.clientY && event.clientY <=((window.innerHeight/2)-unit)){
        u=1;
    }else if (event.clientY > ((window.innerHeight/2)+unit)) {
        d=-1;
    }     
}