let alpha = 1;

document.addEventListener("DOMContentLoaded", createGrid(16))

function createGrid(size) {
    clearBox(".container");
    let container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.style.flex = "1 1 calc(100% / " + size + ")";
            gridItem.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = generateRandomColor();
            })
            container.appendChild(gridItem);
        }
    }
}

function changeGridSize() {
    let size = prompt("Choisissez une taille entre 1 et 100");
    while (size > 100) size = prompt("Choisissez une taille (Max 100x100)");
    createGrid(size);
}

function clearBox(elementID) {
    document.querySelector(elementID).innerHTML = "";
}

function generateRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    if (alpha <= 0) alpha = 1;
    else alpha -= 0.1;
    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}