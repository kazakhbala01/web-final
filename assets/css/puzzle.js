var rows = 5;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

window.onload = function() {
  //initialize the 5x5 board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let tile = document.createElement("img");
      tile.src = "./images2/blank.jpg";

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart); //click on image to drag
      tile.addEventListener("dragover", dragOver);   //drag an image
      tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
      tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
      tile.addEventListener("drop", dragDrop);       //drop an image onto another one
      tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

      document.getElementById("board").append(tile);
    }
  }

  //pieces
  let pieces = [];
  for (let i=1; i <= rows*columns; i++) {
    pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
  }
  pieces.reverse();
  for (let i =0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);

    //swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images2/" + pieces[i] + ".jpg";

    //DRAG FUNCTIONALITY
    tile.addEventListener("dragstart", dragStart); //click on image to drag
    tile.addEventListener("dragover", dragOver);   //drag an image
    tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
    tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
    tile.addEventListener("drop", dragDrop);       //drop an image onto another one
    tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

    document.getElementById("pieces").append(tile);
  }
}

//DRAG TILES
function dragStart() {
  currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
  otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText = turns;
}

// ... (your existing code)

// Add an event listener to the window for the space key press
window.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    resetGame();
  }
});

// Function to reset the game
function resetGame() {
  turns = 0;
  document.getElementById("turns").innerText = turns;

  // Clear the board
  const board = document.getElementById("board");
  board.innerHTML = "";

  // Initialize the board again
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "./images2/blank.jpg";

      // Add drag functionality (same as before)
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      board.append(tile);
    }
  }

  // Clear and shuffle the pieces
  const pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  // Create and display puzzle pieces
  const piecesContainer = document.getElementById("pieces");
  piecesContainer.innerHTML = "";

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images2/" + pieces[i] + ".jpg";

    // Add drag functionality (same as before)
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    piecesContainer.append(tile);
  }
}

// ... (rest of your existing code)

