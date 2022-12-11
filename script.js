const gridContainer = document.querySelector("#grid-container");
const grids = document.createElement("div");
const range = document.getElementById('size');
const rangeLabel = document.querySelector('label');
const gridSizes = [ 4, 8, 16, 32, 64 ];

function updateRange() {
    console.log(range.value)
    document.getElementById('grid-size').textContent = `${gridSizes[range.value]} x ${gridSizes[range.value]}`
}

grids.classList.add("grid")

gridContainer.appendChild(grids);

let size = document.getElementById(`size`).value;
console.log(size)
for (let i = 1; i < size * size; i++) {
    gridContainer.appendChild(grids.cloneNode());
}
gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridContainer.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
