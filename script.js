function alertInfo(){
    alert("Welcome to my daily fap updates! Click the image to see a quick review! Stay Safe!");
}
function giveAlert(){
    var mexNum=Math.round((Math.random()*7));
    var mex="";
    switch(mexNum){
        case 1:
            mex="Nice Cock: Great Width";
            break;
        case 2:
            mex="Too old";
            break;
        case 3:
            mex="I don't like this race";
            break;
        case 4:
            mex="Maybe without 30kg...";
            break;
        case 5:
            mex="Never again";
            break;
        case 6:
            mex="For me it's a no, but the husband is fire :o";
            break;
        default:
            mex="Nice Cock: Great Width";
            break;
    }
    alert(mex);
}

function getMembers(){
    var limite=Math.round((Math.random()*6));
for(var i=0; i<limite; i++){
    fetch('https://randomuser.me/api/')
    .then(res=> res.json())
    .then((data) => {
        const ide = i;
        console.log(ide);
        var input= `<div class="person ${ide}"\n>`;
        input+=`<img class="image ${ide}" src="${data.results[0].picture.large}" onclick="giveAlert()">\n`;
        
        input += `<p class="name ${ide}">${data.results[0].name.first} ${data.results[0].name.last}</p>\n`;

        input+=`<p class="age ${ide}">${data.results[0].dob.age} Years old</p>\n`;

        input+=`<p class="rating ${ide}">${Math.floor((Math.random()*5+0.4))}/5 ✰</p>\n`;

        input+=`</div>\n`;

        //input=`<img id"image ${i}" scr="${data.results[0].picture.large}">\n`;
        document.getElementById('person-container').innerHTML+=input;
        console.log(data.results[0].picture.large);
        console.log(data);
    })
    //document.getElementById("button").disabled = true;
}
}