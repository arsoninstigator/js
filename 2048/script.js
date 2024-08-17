const gridItems = [ 
    ...document.querySelectorAll(".grid-item"), 
]; 
const score_val = document.querySelector(".score-value"); 
const result = document.querySelector(".result"); 
let score = 0; 
let moves = 0; 
let moveFactor = 4; 
let options = [ 
    2, 4, 8, 2, 4, 8, 2, 2, 4, 4, 2, 8, 2, 2, 4, 4, 2, 
]; 
let matrix = []; 
let prevMatrix; 

let colors = [ 
    "#caf0f8", 
    "#90e0ef", 
    "#00b4d8", 
    "#0077b6", 
    "#03045e", 
    "#023047", 
    "#fca311", 
    "#14213d", 
    "#e63946", 
    "#ffc300", 
    "#6a040f", 
    "#000000", 
]; 

// initial game grid 
let row = []; 
for (let index = 1; index < gridItems.length + 1; index++) { 
    if (index % 4 === 0) { 
        let item = gridItems[index - 1]; 
        item.firstElementChild.innerText = ""; 
        row.push(item); 
        matrix.push(row); 
        row = []; 
    } else { 
        let item = gridItems[index - 1]; 
        item.firstElementChild.innerText = ""; 
        row.push(item); 
    } 
} 

// assign 2 game grids as 2
const rowIdx = Math.floor(Math.random() * 4); 
const colIdx = Math.floor(Math.random() * 4); 
let rowIdx2 = Math.floor(Math.random() * 4); 
let colIdx2 = Math.floor(Math.random() * 4); 
  
if (rowIdx === rowIdx2 && colIdx === colIdx2) { 
    rowIdx2 = Math.floor(Math.random() * 4); 
    colIdx2 = Math.floor(Math.random() * 4); 
}
matrix[rowIdx][colIdx].firstElementChild.textContent = 2; 
matrix[rowIdx2][colIdx2].firstElementChild.textContent = 2; 

let availIndexes = updateAvailIndexes(); 
  
updateColors(); 
