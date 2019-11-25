'use strict'
var names = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "usb",
    "water-can",
    "wine-glass",

];
var count = 0;
var leftImage = document.querySelector("#leftImage");
var middleImage = document.querySelector("#middleImage");
var rightImage = document.querySelector("#rightImage");
var imagesSection = document.querySelector("#imagesSection");


function Mall(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;
    Mall.all.push(this);
}
Mall.all = [];

for (let i = 0; i < names.length; i++) {
    new Mall(names[i]);
}

function render() {
    while (rightMall == leftMall || rightMall == middleMall || leftMall == middleMall) {

        var leftMall = Mall.all[randomNumber(0, Mall.all.length - 1)];
        var middleMall = Mall.all[randomNumber(0, Mall.all.length - 1)];
        var rightMall = Mall.all[randomNumber(0, Mall.all.length - 1)];
        leftMall.views++;
        middleMall.views++;
        rightMall.views++;


        console.log(leftMall);
    }

    leftImage.setAttribute("src", leftMall.imagePath);
    leftImage.setAttribute("alt", leftMall.name);
    leftImage.setAttribute("title", leftMall.name);

    middleImage.setAttribute("src", middleMall.imagePath);
    middleImage.setAttribute("alt", middleMall.name);
    middleImage.setAttribute("title", middleMall.name);

    rightImage.setAttribute("src", rightMall.imagePath);
    rightImage.setAttribute("alt", rightMall.name);
    rightImage.setAttribute("title", rightMall.name);
}

render();

imagesSection.addEventListener("click", function (e) {
    count++
    if (count < 25) {

        if (event.target.id !== "imagesSection") {
            for (let i = 0; i < Mall.all.length; i++) {
                if (event.target.title === Mall.all[i].name) {
                  Mall.all[i].votes++;
                }
              }
            
            render();

        }


 } if (count === 25){
     list();
 }

});
function list (){
    var container = document.getElementById("listAppear");
    var ulEl = document.createElement("ul");
    container.appendChild(ulEl);
    for ( var j = 0; j < Mall.all.length; j++) {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.textContent = `${Mall.all[j].name} had ${Mall.all[j].votes} votes and was shown ${Mall.all[j].views} times`;
        
    }
    
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
