const container = document.querySelector("#container");
const colorPicker = document.getElementById("colorPicker");
const palette = document.querySelector(".palette");
const pen=document.querySelector("#pen");
const pencil=document.querySelector("#pencil");
const eraser=document.getElementById("eraser");
const rainbow=document.getElementById("rainbow");

let currentColor="#000000"
let isMouseDown = false
let tool="pen";
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown=false)

function createDivs(size) {
    let divSize = 100/size; //calculates right width for div
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

           let grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
            grid.setAttribute("style", `width: ${divSize}%;`);
            grid.style.opacity = 0.0;
            grid.addEventListener("mouseover",draw);
            grid.addEventListener("mousedown",draw)
        }
    }
}

function draw(event){
    if (event.type==="mouseover" &&!isMouseDown){
        return;
    }
    if (tool==="pen"){
        event.target.style.opacity=1;
        event.target.style.backgroundColor = currentColor;
    }
    else if (tool==="pencil"){
        let currentOpacity=parseFloat(event.target.style.opacity);
        currentOpacity+=0.1;
        event.target.style.backgroundColor = currentColor;
        event.target.style.opacity=currentOpacity;
    }
    else if (tool=="eraser"){
        event.target.style.opacity=0;
    }
}

pen.addEventListener('click', function(){
    tool="pen";
});

pencil.addEventListener('click', function(){
    tool="pencil";
});

eraser.addEventListener('click', function(){
    tool="eraser";
});

function updateColor() {
    palette.style.backgroundColor = colorPicker.value;
    currentColor=colorPicker.value;
}


colorPicker.addEventListener('input', updateColor);
palette.addEventListener('click', function() {
    colorPicker.click(); 
});


createDivs(26);