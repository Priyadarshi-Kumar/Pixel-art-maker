// Select color input
var color = document.querySelector('#colorPicker');

let sizePicker = document.querySelector('#sizePicker2');
let pixelCanvas = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('click', function( evt ) {
  evt.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Your code goes here!
  let rows = document.querySelector('#inputHeight').value;
  let columns = document.querySelector('#inputWidth').value;
  let tbody = document.createElement('tbody');
  pixelCanvas.innerHTML = '';
  for (let i=0; i < rows; i++){
    let tr = document.createElement('tr');
    for (let j=0; j < columns; j++){
      let td = document.createElement('td');
      td.addEventListener('click', addEvent(td));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  pixelCanvas.appendChild(tbody);
}

let addEvent = function(td) {
        td.addEventListener('click', function() {
        td.style.backgroundColor = color.value;
      });
    }
