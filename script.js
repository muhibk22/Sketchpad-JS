const container = document.querySelector("#container");
const colorPicker = document.getElementById("colorPicker");
const palette = document.querySelector(".palette");
const pen = document.querySelector("#pen");
const pencil = document.querySelector("#pencil");
const eraser = document.getElementById("eraser");
const rainbow = document.getElementById("rainbow");
const slider = document.getElementById("slider");

let currentColor = "#000000"
let isMouseDown = false
let tool = "pen";
let size = 16;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);


function createDivs(size) {
    let divSize = 100 / size; //calculates right width for div
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            let grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
            grid.setAttribute("style", `width: ${divSize}%;`);
            grid.style.opacity = 0.0;
            grid.addEventListener("mouseover", draw);
            grid.addEventListener("mousedown", draw);

        }
    }
}

function draw(event) {
    if (event.type === "mouseover" && !isMouseDown) {
        return;
    }

   
    if (tool === "pen") {
        event.target.style.opacity = 1;
        event.target.style.backgroundColor = currentColor;
    }
    else if (tool === "pencil") {
        let currentOpacity = parseFloat(event.target.style.opacity);
        currentOpacity += 0.1;
        event.target.style.backgroundColor = currentColor;
        event.target.style.opacity = currentOpacity;
    }
    else if (tool == "eraser") {
        event.target.style.opacity = 0;
    }
    else if (tool == "rainbow") {
        let red, green, blue;
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
        event.target.style.opacity = 1;
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}

pen.addEventListener('click', function () {
    tool = "pen";
});

pencil.addEventListener('click', function () {
    tool = "pencil";
});

eraser.addEventListener('click', function () {
    tool = "eraser";
});

rainbow.addEventListener('click', function () {
    tool = "rainbow";
})

slider.onchange = (e) => setSize(e.target.value);

function setSize(target) {
    container.innerHTML = "";
    size = 16 + (100 - target);
    createDivs(size);
}

function updateColor() {
    palette.style.backgroundColor = colorPicker.value;
    currentColor = colorPicker.value;
}


colorPicker.addEventListener('input', updateColor);
palette.addEventListener('click', function () {
    colorPicker.click();
});

let alertShown=false;
document.body.addEventListener("touchstart",function(){
    if (!alertShown){
        alert("This tool is optimized for use with a mouse. Press OK to continue if you'd like to use it on a touch device.");
        alertShown=true;
    }
})
createDivs(size);