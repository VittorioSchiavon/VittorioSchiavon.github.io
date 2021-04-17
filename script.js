var unit = parseFloat(window.getComputedStyle(player).getPropertyValue("width"));

var l=0;
var r=0;
var u=0;
var d=0;
var clicked=false;
var pressed=false;
var squares=0;
var obstacleMode=false;
var borderString="";
var activeCode;
var mapmode=false;

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
        
        if(obstacleMode ||( this.checkBorders(moveLeft,moveTop) && obstaclesEl.checkObstacle(this.x +unit/2*moveLeft,this.y +unit*moveTop)!=0)){
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
            if(this.x+movementLeft*PlayerEl.speed>unit*5-unit/2 || this.x+movementLeft*PlayerEl.speed<-this.width+unit*10-unit*5+unit/2)
            return false;
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
            this.obs[i] = new Array(Math.round(backgroundEl.height/unit));
        }
        for (var i = 0; i < Math.round(backgroundEl.width/unit); i++) {
            for (var j = 0; j < Math.round(backgroundEl.height/unit); j++) {
                this.obs[i][j] = 1;
            }
        }

          
    }
    
    checkObstacle(left,top){
        return this.obs[-(Math.floor(left/unit)-5)][-(Math.floor(top/unit)-4)];
    }

    setObstacle(){
        this.obs[1][2] = 0;
        this.obs[2][2] = 0;
        this.obs[3][2] = 0;
        this.obs[4][2] = 0;
        this.obs[5][2] = 0;
        this.obs[6][2] = 0;
        this.obs[7][2] = 0;
        this.obs[8][2] = 0;
        this.obs[9][2] = 0;
        this.obs[10][2] = 0;
        this.obs[11][2] = 0;
        this.obs[12][2] = 0;
        this.obs[13][2] = 0;
        this.obs[14][2] = 0;
        this.obs[15][2] = 0;
        this.obs[16][2] = 0;
        this.obs[16][4] = 0;
        this.obs[16][3] = 0;
        this.obs[16][6] = 0;
        this.obs[16][5] = 0;
        this.obs[16][7] = 0;
        this.obs[17][7] = 0;
        this.obs[18][7] = 0;
        this.obs[19][7] = 0;
        this.obs[20][7] = 0;
        this.obs[20][8] = 0;
        this.obs[19][8] = 0;
        this.obs[18][8] = 0;
        this.obs[17][8] = 0;
        this.obs[16][8] = 0;
        this.obs[24][8] = 0;
        this.obs[24][7] = 0;
        this.obs[25][7] = 0;
        this.obs[26][7] = 0;
        this.obs[28][7] = 0;
        this.obs[29][7] = 0;
        this.obs[30][7] = 0;
        this.obs[30][8] = 0;
        this.obs[29][8] = 0;
        this.obs[28][8] = 0;
        this.obs[27][8] = 0;
        this.obs[27][7] = 0;
        this.obs[30][2] = 0;
        this.obs[29][2] = 0;
        this.obs[28][2] = 0;
        this.obs[26][2] = 0;
        this.obs[27][2] = 0;
        this.obs[25][2] = 0;
        this.obs[24][2] = 0;
        this.obs[23][2] = 0;
        this.obs[22][2] = 0;
        this.obs[21][2] = 0;
        this.obs[20][2] = 0;
        this.obs[18][2] = 0;
        this.obs[19][2] = 0;
        this.obs[17][2] = 0;
        this.obs[15][13] = 0;
        this.obs[16][13] = 0;
        this.obs[17][13] = 0;
        this.obs[14][13] = 0;
        this.obs[24][13] = 0;
        this.obs[26][13] = 0;
        this.obs[27][13] = 0;
        this.obs[28][13] = 0;
        this.obs[29][13] = 0;
        this.obs[30][13] = 0;
        this.obs[25][13] = 0;
        this.obs[24][14] = 0;
        this.obs[25][14] = 0;
        this.obs[26][14] = 0;
        this.obs[27][14] = 0;
        this.obs[28][14] = 0;
        this.obs[30][14] = 0;
        this.obs[29][14] = 0;
        this.obs[24][19] = 0;
        this.obs[23][19] = 0;
        this.obs[22][19] = 0;
        this.obs[21][19] = 0;
        this.obs[20][19] = 0;
        this.obs[19][19] = 0;
        this.obs[18][19] = 0;
        this.obs[17][19] = 0;
        this.obs[15][19] = 0;
        this.obs[14][19] = 0;
        this.obs[16][19] = 0;
        this.obs[14][21] = 0;
        this.obs[14][20] = 0;
        this.obs[15][20] = 0;
        this.obs[16][20] = 0;
        this.obs[18][20] = 0;
        this.obs[19][20] = 0;
        this.obs[21][20] = 0;
        this.obs[23][20] = 0;
        this.obs[24][20] = 0;
        this.obs[22][20] = 0;
        this.obs[20][20] = 0;
        this.obs[16][20] = 0;
        this.obs[17][20] = 0;
        this.obs[14][22] = 0;
        this.obs[14][23] = 0;
        this.obs[14][25] = 0;
        this.obs[14][24] = 0;
        this.obs[13][24] = 0;
        this.obs[12][24] = 0;
        this.obs[11][24] = 0;
        this.obs[10][24] = 0;
        this.obs[10][23] = 0;
        this.obs[11][23] = 0;
        this.obs[12][23] = 0;
        this.obs[13][23] = 0;
        this.obs[14][26] = 0;
        this.obs[14][27] = 0;
        this.obs[14][28] = 0;
        this.obs[14][29] = 0;
        this.obs[14][30] = 0;
        this.obs[6][27] = 0;
        this.obs[7][27] = 0;
        this.obs[7][26] = 0;
        this.obs[5][26] = 0;
        this.obs[6][26] = 0;
        this.obs[4][26] = 0;
        this.obs[2][26] = 0;
        this.obs[1][26] = 0;
        this.obs[3][26] = 0;
        this.obs[1][27] = 0;
        this.obs[3][27] = 0;
        this.obs[4][27] = 0;
        this.obs[5][27] = 0;
        this.obs[2][27] = 0;
        this.obs[2][21] = 0;
        this.obs[1][21] = 0;
        this.obs[1][20] = 0;
        this.obs[2][20] = 0;
        this.obs[4][20] = 0;
        this.obs[5][20] = 0;
        this.obs[5][20] = 0;
        this.obs[6][20] = 0;
        this.obs[3][20] = 0;
        this.obs[3][21] = 0;
        this.obs[4][21] = 0;
        this.obs[5][21] = 0;
        this.obs[6][21] = 0;
        this.obs[7][21] = 0;
        this.obs[7][20] = 0;
        this.obs[7][15] = 0;
        this.obs[5][15] = 0;
        this.obs[3][15] = 0;
        this.obs[1][15] = 0;
        this.obs[1][14] = 0;
        this.obs[2][14] = 0;
        this.obs[3][14] = 0;
        this.obs[4][14] = 0;
        this.obs[5][14] = 0;
        this.obs[6][14] = 0;
        this.obs[7][14] = 0;
        this.obs[5][15] = 0;
        this.obs[4][15] = 0;
        this.obs[6][15] = 0;
        this.obs[2][15] = 0;
        this.obs[1][8] = 0;
        this.obs[2][8] = 0;
        this.obs[4][8] = 0;
        this.obs[6][8] = 0;
        this.obs[7][8] = 0;
        this.obs[9][8] = 0;
        this.obs[10][8] = 0;
        this.obs[10][7] = 0;
        this.obs[9][7] = 0;
        this.obs[7][7] = 0;
        this.obs[5][7] = 0;
        this.obs[3][7] = 0;
        this.obs[2][7] = 0;
        this.obs[1][7] = 0;
        this.obs[4][7] = 0;
        this.obs[6][7] = 0;
        this.obs[8][7] = 0;
        this.obs[8][8] = 0;
        this.obs[5][8] = 0;
        this.obs[3][8] = 0;
        this.obs[21][26] = 0;
        this.obs[23][26] = 0;
        this.obs[25][26] = 0;
        this.obs[27][26] = 0;
        this.obs[29][26] = 0;
        this.obs[30][26] = 0;
        this.obs[28][26] = 0;
        this.obs[26][26] = 0;
        this.obs[24][26] = 0;
        this.obs[22][26] = 0;
        this.obs[21][25] = 0;
        this.obs[23][25] = 0;
        this.obs[25][25] = 0;
        this.obs[27][25] = 0;
        this.obs[28][25] = 0;
        this.obs[29][25] = 0;
        this.obs[30][25] = 0;
        this.obs[26][25] = 0;
        this.obs[23][25] = 0;
        this.obs[22][25] = 0;
        this.obs[24][25] = 0;
        this.obs[3][4] = 101;
this.obs[3][3] = 101;
this.obs[6][3] = 101;
this.obs[6][4] = 101;
this.obs[10][4] = 101;
this.obs[10][3] = 101;
this.obs[13][3] = 101;
this.obs[13][4] = 101;
this.obs[8][8] = 101;
this.obs[8][9] = 101;
this.obs[8][10] = 101;
this.obs[5][10] = 101;
this.obs[5][9] = 101;
this.obs[2][9] = 101;
this.obs[2][10] = 101;
this.obs[5][15] = 101;
this.obs[5][16] = 101;
this.obs[5][17] = 101;
this.obs[2][17] = 101;
this.obs[2][16] = 101;
this.obs[2][22] = 101;
this.obs[2][23] = 101;
this.obs[5][23] = 101;
this.obs[5][22] = 101;
this.obs[5][28] = 101;
this.obs[5][29] = 101;
this.obs[2][29] = 101;
this.obs[2][28] = 101;
this.obs[12][25] = 101;
this.obs[12][26] = 101;
this.obs[23][27] = 101;
this.obs[23][28] = 101;
this.obs[26][28] = 101;
this.obs[26][27] = 101;
this.obs[29][27] = 101;
this.obs[29][28] = 101;
this.obs[29][15] = 101;
this.obs[29][16] = 101;
this.obs[26][16] = 101;
this.obs[26][15] = 101;
this.obs[22][22] = 101;
this.obs[22][21] = 101;
this.obs[19][21] = 101;
this.obs[19][22] = 101;
this.obs[16][22] = 101;
this.obs[16][20] = 101;
this.obs[16][21] = 101;
this.obs[15][14] = 102;
this.obs[16][14] = 102;
this.obs[16][15] = 102;
this.obs[15][15] = 102;
this.obs[18][9] = 101;
this.obs[18][10] = 101;
this.obs[19][3] = 101;
this.obs[19][4] = 101;
this.obs[22][4] = 101;
this.obs[22][3] = 101;
this.obs[25][3] = 101;
this.obs[25][4] = 101;
this.obs[28][4] = 101;
this.obs[28][3] = 101;
this.obs[29][9] = 101;
this.obs[29][10] = 101;
this.obs[26][10] = 101;
this.obs[26][9] = 101;
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
    let code=obstaclesEl.checkObstacle(backgroundEl.x,backgroundEl.y);
    if(code>1){
        activeCode = code;
        //document.getElementById("background").style.filter="invert(100%)";
        document.getElementById(`${activeCode}`).style.display = "block";
    }else{
        //document.getElementById("background").style.filter="invert(0%)";
        if(activeCode!== code && activeCode>0){ 
            document.getElementById(`${activeCode}`).style.display = "none";
            activeCode=-1;
        }
    }
    if(mapmode){
        document.getElementById(`img-map`).style.display = "block";
    }else{
        document.getElementById(`img-map`).style.display = "none";
    };

},60);

document.addEventListener("keyup", event=>{
    if(event.key==="ArrowLeft"|| event.key==="a") l=0;
    if(event.key==="ArrowRight"|| event.key==="d") r=0;
    if(event.key==="ArrowUp"|| event.key==="w") u=0;
    if(event.key==="ArrowDown"|| event.key==="s") d=0;
    PlayerEl.imageX=0;
    PlayerEl.changeImage=true;
    if(mapmode) mapmode=false;
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
    if(event.key==="m") mapmode=true;

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

document.addEventListener("touchstart", event=>{
    pressed=true;
    mouseMove(event.touches[0]);
});
document.addEventListener("touchend", event=>{
    pressed=false;
    l=d=r=u=0;
});
document.addEventListener("touchmove", event=>{
    if(pressed){
        mouseMove(event.touches[0]);
    };
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
    console.log(borderString+=`this.obs[${-Math.round(backgroundEl.x/unit-5)}][${-Math.round(backgroundEl.y/unit-4)}] = 101;\n`);
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