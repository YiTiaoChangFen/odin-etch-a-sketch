const sketchPad = document.getElementById("sketchPad");
let rowNum = 0;
let colNum = 0;


while (rowNum <= 16) {
    const row = document.createElement("div");
    row.classList.add("row");
    sketchPad.appendChild(row);
    ++rowNum;
    while (colNum <= 16) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
        ++colNum
    }
    colNum = 0;
}

let selectedNum = 0;
let selectedColor = null;
let selected = null

function select(e) {
    if (selectedNum != 0) {
        const lastSelected = document.getElementsByClassName("selected");
        lastSelected[0].classList.remove("selected");
        selected = document.getElementById(e.target.id);
        selected.classList.add("selected");
    } else {
        selected = document.getElementById(e.target.id);
        selected.classList.add("selected");
        ++selectedNum;
    }

    if (selected.classList[0] == "color") {
        selectedColor = selected.getAttribute('id');
    }
    if (selected.id == "eraser") {
        selectedColor = "white";
    } else if (selected.id == "clear") {
        clear();
        selectedColor = "white";
    }
}

function clear() {
    const grids = document.querySelectorAll(".col");
    grids.forEach(grid => {
        grid.style.backgroundColor = "white";
    })
    
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", select));

let timeoutId = null;

const grids = document.querySelectorAll(".col");

// window.addEventListener("mousedown", () => {
//     grids.forEach(grid => grid.addEventListener("mouseover", () => {
//         timeoutId = setTimeout(() => {
//             grid.style.backgroundColor = selectedColor;
//         }, 50);
//     }));
// });

// window.addEventListener("mouseup", () => {
//     clearTimeout(timeoutId);
// })

let isMousedown = false;
window.addEventListener("mousedown", () => {
    isMousedown = true;
})
window.addEventListener("mouseup", () => {
    isMousedown = false;
})

grids.forEach(grid => grid.addEventListener("mouseover", () => {
   if (isMousedown) {
        grid.style.backgroundColor = selectedColor;
   }
}));
