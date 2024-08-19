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

document.addEventListener("keydown", moveBlocks); 
const arrayColumn = (arr, n) => arr.map((x) => x[n]); // 2d array

// using arrows to move
function moveBlocks(e) { 
    if ( 
        e.key !== "ArrowLeft" && 
        e.key !== "ArrowRight" && 
        e.key !== "ArrowUp" && 
        e.key !== "ArrowDown"
    ) { 
        return; 
    } 
  
    moves++; 
    matrixVals = getCurrentMatrixValues(); 
    prevMatrix = matrixVals; 
  
    let col1 = arrayColumn(matrix, 0); 
    let col2 = arrayColumn(matrix, 1); 
    let col3 = arrayColumn(matrix, 2); 
    let col4 = arrayColumn(matrix, 3); 
    let row1 = matrix[0]; 
    let row2 = matrix[1]; 
    let row3 = matrix[2]; 
    let row4 = matrix[3]; 
  
    if (e.key === "ArrowLeft") { 
        moveLeft(row1); 
        moveLeft(row2); 
        moveLeft(row3); 
        moveLeft(row4); 
    } 
    if (e.key === "ArrowRight") { 
        moveRight(row1); 
        moveRight(row2); 
        moveRight(row3); 
        moveRight(row4); 
    } 
    if (e.key === "ArrowUp") { 
        moveLeft(col1); 
        moveLeft(col2); 
        moveLeft(col3); 
        moveLeft(col4); 
    } 
    if (e.key === "ArrowDown") { 
        moveRight(col1); 
        moveRight(col2); 
        moveRight(col3); 
        moveRight(col4); 
    }

    matrixVals = getCurrentMatrixValues(); 
    availIndexes = updateAvailIndexes(); 
    updateColors(); 
  
    let check = checkMatrixEquality(prevMatrix, matrixVals); 
  
    if (availIndexes.length === 0 && check === true) { 
        gameOver("loose"); 
    } 
  
    if (moves % moveFactor === 0) { 
        generateNewBlock(); 
    } 
} 
  
setInterval(() => { 
    availIndexes = updateAvailIndexes(); 
    generateNewBlock(); 
}, 8000); 
  
setTimeout(() => { 
    options.push(16); 
    setTimeout(() => { 
        options.push(16); 
        options.push(32); 
        setTimeout(() => { 
            options.push(16); 
            options.push(32); 
            options.push(64); 
        }, 40000); 
    }, 18000); 
}, 120000);

let availIndexes = updateAvailIndexes(); 
  
updateColors(); 
