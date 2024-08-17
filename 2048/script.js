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
matrix[rowIdx][colIdx].firstElementChild.textContent = 2; 
matrix[rowIdx2][colIdx2].firstElementChild.textContent = 2; 
