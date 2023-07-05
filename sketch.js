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