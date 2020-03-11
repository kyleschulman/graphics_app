var img = document.createElement("img");

var img2 = document.createElement("img");

var but = document.getElementById("my_button");

but.addEventListener("mouseover", ()=>{
 rollDice();
})

let bro = document.getElementById("dice");

bro.addEventListener("dblclick",()=> {
 rollDice();
})


function rollDice(){
var id = document.getElementById("dice");
document.body.appendChild(img);
document.body.appendChild(img2);
var randomNum = Math.floor(Math.random() * 6);
var randomNum2 = Math.floor(Math.random() * 6);
var dicepic = ["https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png","https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png","https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png","https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png","https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png", "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"];

id.appendChild(img);
img.setAttribute("src", dicepic[randomNum]);
img2.setAttribute("src", dicepic[randomNum2]);
id.appendChild(img2);

}


document.getElementById("dice").onclick = function(){
	document.getElementById("output").style.color = 'blue';
  document.getElementById("output2").style.color = '#73C6B6 ';
}
document.getElementById("dice").ondblclick = function(){
	document.getElementById("output").style.color = 'green';
  document.getElementById("output2").style.color = 'red';
}

document.getElementById("my_button").onclick = function(){
	document.getElementById("output").style.color = 'red';
  document.getElementById("output2").style.color = 'red';
}
document.getElementById("my_button").onmouseover = function(){
	document.getElementById("output2").style.color = 'aqua';
  document.getElementById("output").style.color = 'aqua';
}

window.addEventListener("keypress", changeColor);
function changeColor(event) {
    if (event.key === "b"){
       document.getElementById("output").style.color = '#33FFB5';
  document.getElementById("output2").style.color = '#F09FDD';
    } else if (event.key === "o") {

    } else {

    }
}


