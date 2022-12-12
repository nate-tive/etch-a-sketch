let gridContainer = document.querySelector("#grid-container");
const grids = document.createElement("div");
const range = document.getElementById('size');
const rangeLabel = document.querySelector('label');
const gridSizes = [ 4, 8, 16, 32, 64 ];
const contentBody = document.getElementById('main');

document.getElementById('grid-size').textContent = `${gridSizes[range.value]} x ${gridSizes[range.value]}`;

function updateRange() {
    console.log(range.value);
    document.getElementById('grid-size').textContent = `${gridSizes[range.value]} x ${gridSizes[range.value]}`;
}

grids.classList.add("grid")


gridContainer.appendChild(grids);


let size = range.value;

console.log(size, gridSizes[size]);

for (let i = 1; i < gridSizes[size] * gridSizes[size]; i++) {
    gridContainer.appendChild(grids.cloneNode());
}
gridContainer.style.gridTemplateColumns = `repeat(${gridSizes[size]}, 1fr)`;
gridContainer.style.gridTemplateRows =  `repeat(${gridSizes[size]}, 1fr)`;

function randomColor() {
    let num = Math.floor(Math.random()*255);
    let color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    console.log(color);
}

function updateGrid() {
    size = range.value;
    gridContainer.remove();
    const newGrid = document.createElement('div');
    newGrid.id = 'grid-container';
    contentBody.appendChild(newGrid);
    gridContainer = document.querySelector("#grid-container");
    
    for (let i = 0; i < gridSizes[size] * gridSizes[size]; i++) {
        gridContainer.appendChild(grids.cloneNode());
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridSizes[size]}, 1fr)`;
    gridContainer.style.gridTemplateRows =  `repeat(${gridSizes[size]}, 1fr)`;
}

const allGrids = document.querySelectorAll('.grid');
//allGrids.addEventListener(`click`, randomColor());