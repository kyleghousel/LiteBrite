
const container = document.getElementById('sketchboard');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    /*cell.innerText = (c + 1);*/
    container.appendChild(cell).className = 'gridPiece';
    cell.setAttribute('id', 'cell');
    cell.addEventListener('click', function onClick(event) {
        const deColores = ['#CCFF00', '#AAF0D1', '#66FF66', '#FF6EFF', '#FF9933', '#FFFF66', '#FF355E', '#FF00CC', '#50BFE6', ]
        const randomColor = deColores[Math.floor(Math.random() * deColores.length)];
        cell.style.backgroundColor = randomColor;
        /*change so that it selects from a predetermined array of 'neon' colors*/
    const clear = document.getElementById('clearButton');
    clear.addEventListener('click', function onClick(event) {
        cell.style.backgroundColor = 'black';
    });
    });
    
  };
};

function wipeGrid() {
const grid = document.querySelectorAll('.gridPiece');

grid.forEach(grid => {
  grid.remove();
});
}


const gridSize = document.getElementById('size-select');
gridSize.addEventListener('change', (e) => {
    
    let selector = e.target.value;
    
    switch (selector) {
        case '8':
            wipeGrid();
            makeRows(8,8);
            break;
        case '16':
            wipeGrid();
            makeRows(16,16);
            break;
        case '32':
            wipeGrid();
            makeRows(32,32);
            break;
        case '50':
            wipeGrid();
            makeRows(50,50);
            break;
        default:
            console.log('Something went wrong.')
    }
});



/* 
    Clear Button
    1. Add event listener to button
    2. Query select for all by id cell
    3. When clicked, change background color to rgb(0,0,0)
*/

/*
    Grid Size Selector
    1. Add Event listener
    2. When id of selection clicked 
        run makeRows() to match selection
*/