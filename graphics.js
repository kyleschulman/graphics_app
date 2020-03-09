        var box1 = document.getElementById("b1");
        var box2 = document.getElementById("b2");
        var box3 = document.getElementById("b3");

        box1.addEventListener('click', (event) => {
  changeColor1(event);
});
        box2.addEventListener('click', (event) => {
  changeColor2(event);
});
        box3.addEventListener('click', (event) => {
  changeColor3(event);
});

     function changeColor1(event) {
  let box1 = event.target
  let color1 = box1.style.backgroundColor;
  if(color == "red") {
    box1.style.backgroundColor = "black";
  } else {
    box1.style.backgroundColor = "red";
  }
}

       function changeColor2(event) {
  let box2 = event.target
  let color2 = box2.style.backgroundColor;
  if(color == "white") {
    box2.style.backgroundColor = "red";
  } else {
    box2.style.backgroundColor = "white";
  }
}
        function changeColor3(event) {
  let box3 = event.target
  let color3 = box3.style.backgroundColor;
  if(color == "green") {
    box3.style.backgroundColor = "yellow";
  } else {
    box3.style.backgroundColor = "green";
  }
}
