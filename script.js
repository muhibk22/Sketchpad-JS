const container = document.querySelector("#container");
let grid;
let red=0, blue=0, green=0;
let isMouseDown = false
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

function createDivs(size) {
    let divSize = 100/size; //calculates right width for div
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {

            grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
            grid.setAttribute("style", `width: ${divSize}%;`);
            grid.addEventListener("mouseover",draw);
            grid.addEventListener("mousedown",draw)
        }
    }
}

function draw(event){
    if (event.type==="mouseover" &&!isMouseDown){
        return;
    }
    event.target.style.backgroundColor = `rgb(${red},${blue},${green}`;
}


createDivs(26);