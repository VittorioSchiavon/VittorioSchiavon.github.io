function getMembers(){
for(var i=0; i<3; i++){
    fetch('https://randomuser.me/api/')
    .then(res=> res.json())
    .then((data) => {
        const ide = i;
        console.log(ide);
        var input= `<div class="person ${ide}"\n>`;
        input+=`<img class="image ${ide}" src="${data.results[0].picture.large}">\n`;
        
        input += `<p class="name ${ide}">${data.results[0].name.first} ${data.results[0].name.last}</p>\n`;

        input+=`<p class="age ${ide}">${data.results[0].dob.age} Years old</p>\n`;

        input+=`<p class="rating ${ide}">${Math.floor((Math.random()*5+0.4))}/5 ✰</p>\n`;

        input+=`</div>\n`;

        //input=`<img id"image ${i}" scr="${data.results[0].picture.large}">\n`;
        document.getElementById('person-container').innerHTML+=input;
        console.log(data.results[0].picture.large);
        console.log(data);
    })
    document.getElementById("button").disabled = true;
}
}