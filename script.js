var unit = parseFloat(window.getComputedStyle(player).getPropertyValue("width"));

var l=0;
var r=0;
var u=0;
var d=0;
var clicked=false;
var squares=0;
var obstacleMode=false;
var borderString="";

class Player{
    constructor(){
        this.element = document.getElementById("player");
        this.imageX=0;
        this.imageY=0;
        this.changeImage=true;
        this.x = parseFloat(window.getComputedStyle(player).getPropertyValue("left"));
        this.y = parseFloat(window.getComputedStyle(player).getPropertyValue("top"));
        this.speed = unit/4;
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
        
        if(obstacleMode ||( this.checkBorders(moveLeft,moveTop) && obstaclesEl.checkObstacle(this.x +PlayerEl.speed*moveLeft,this.y +PlayerEl.speed*moveTop)!=0)){
            this.x +=PlayerEl.speed*moveLeft;
            this.y +=PlayerEl.speed*moveTop;
            this.element.style.left = this.x + "px";
            this.element.style.top = this.y + "px";
            moveSquares(moveLeft, moveTop);
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

class Obstacles{
    constructor(){
        this.obs= new Array(Math.ceil(backgroundEl.width/unit));

        for (var i = 0; i < this.obs.length; i++) {
            this.obs[i] = new Array(Math.floor(backgroundEl.height/unit));
        }
        for (var i = 0; i < Math.floor(backgroundEl.width/unit); i++) {
            for (var j = 0; j < Math.floor(backgroundEl.height/unit); j++) {
                this.obs[i][j] = 1;
            }
        }

          
    }
    
    checkObstacle(left,top){
        return this.obs[-(Math.floor(left/unit)-4)][-(Math.floor(top/unit)-3)];
    }

    setObstacle(){ 
        this.obs[3][7] = 0;
        this.obs[1][1]=4;
        this.obs[1][2]=4;
        this.obs[1][3]=4;
        this.obs[1][4]=4;
        this.obs[1][5]=4;
        this.obs[2][1]=4;
        this.obs[2][2]=4;
        this.obs[2][3]=4;
        this.obs[2][4]=4;
        this.obs[2][5]=4;
this.obs[4][7] = 0;
this.obs[5][7] = 0;
this.obs[6][7] = 0;
this.obs[6][6] = 0;
this.obs[7][6] = 0;
this.obs[7][4] = 0;
this.obs[7][5] = 0;
this.obs[8][5] = 0;
this.obs[9][4] = 0;
this.obs[10][4] = 0;
this.obs[10][4] = 0;
this.obs[10][5] = 0;
this.obs[9][5] = 0;
this.obs[9][6] = 0;
this.obs[10][6] = 0;
this.obs[12][6] = 0;
this.obs[11][6] = 0;
this.obs[11][7] = 0;
this.obs[12][7] = 0;
this.obs[12][9] = 0;
this.obs[12][8] = 0;
this.obs[12][10] = 0;
this.obs[11][10] = 0;
    }
}

var backgroundEl = new Background();
var PlayerEl = new Player();
var obstaclesEl= new Obstacles();
obstaclesEl.setObstacle();

var t = setInterval(function(){
    PlayerEl.changeImage=true;
    if(clicked || l-d-r+u!=0 ){
        backgroundEl.move(l+r,u+d);
        //console.log(obstaclesEl.obs);
        //console.log(backgroundEl.x);
    }
    if(obstaclesEl.checkObstacle(backgroundEl.x,backgroundEl.y)>1){
        document.getElementById("background").style.filter="invert(100%)";
    }else{
        document.getElementById("background").style.filter="invert(0%)";
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
    if(event.key==="o"|| event.key==="p"){
        if(obstacleMode) createSquare();
    }
    if(event.key==="g") {
        console.log("obstacle mode activated");
        obstacleMode=true;
        PlayerEl.speed=unit;
        PlayerEl.element.style.left= unit*4 + "px";
        PlayerEl.element.style.top= unit*3 + "px";
        backgroundEl.element.style.left= unit*4 + "px";
        backgroundEl.element.style.top= unit*3 + "px";
        backgroundEl.x= unit*4;
        backgroundEl.y= unit*3;
        PlayerEl.element.style.filter = "invert(100%)"; 
        document.getElementById("shadow").style.left =  unit*4 + "px";
        document.getElementById("shadow").style.top=  unit*3 + "px";
        console.log(PlayerEl.x/unit);

    } 
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

function moveSquares(moveLeft, moveTop){
    for (var i = 0; i < squares; i++) {

        var el = document.getElementById(`highlight${i}`);
       
        el.style.top= parseFloat(el.style.top)+ PlayerEl.speed*moveTop + "px";
        el.style.left= parseFloat(el.style.left)+ PlayerEl.speed*moveLeft + "px";
 
    }
}


function createSquare() {
    //obstaclesEl.obs[-(backgroundEl.x/unit-5)][-(backgroundEl.y/unit-4)] = 0;
    console.log(borderString+=`this.obs[${-(backgroundEl.x/unit-5)}][${-(backgroundEl.y/unit-4)}] = 0;\n`);
    var mydiv = document.createElement("div");
    mydiv.id = `highlight${squares}`;
    mydiv.style.left= 4*unit+"px";
    mydiv.style.top=3*unit+"px";
    mydiv.style.width = unit+"px";
    mydiv.style.backgroundColor = "rgba(255, 0, 0, 0.20)";
    mydiv.style.height = unit +"px";
    mydiv.style.margin=0;
    mydiv.style.padding=0;
    mydiv.style.position= "absolute";
    mydiv.style.zIndex=30;
    document.getElementById("game-board").appendChild(mydiv);
    squares++;
}