
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");
    let rows = 16;
    let columns = 16;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "red";
            })
            container.appendChild(gridItem);
        }
    }
})