const sketchPad = document.getElementById("sketchPad");
const grid = document.createElement("div");
grid.classList.add("grid")
let gridNum = 0;


while (gridNum < 256) {
    sketchPad.appendChild(grid);
    console.log("grid")
    ++gridNum;
    
}