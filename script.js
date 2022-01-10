let classicModeOn = true;
let rainbowModeOn = false;
let eraserModeOn = false;
let rowSize = 16;//stores the row size
let colSize = 16;//stores the col size
let rainbowColor = "#000000"; //stores color for rainbowMode

const container = document.getElementById("container");
const classicBtn = document.getElementById("classic");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");
const slider = document.getElementById("size");
const output = document.getElementById("sizeText");

classicBtn.addEventListener('click', classicMode);
rainbowBtn.addEventListener('click',rainbowMode);
eraserBtn.addEventListener('click', eraserMode);
clearBtn.addEventListener('click',clearScreen);

//takes two inputs (row and col) to create the drawing area
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.className = "grid-item";
        container.appendChild(cell).id = i;
        cell.addEventListener('mouseover',function(e){
            if(classicModeOn){
                cell.style.backgroundColor = "black";
            } else if(rainbowModeOn){
                rainbowColor = Math.floor(Math.random()*16777215).toString(16);
                cell.style.backgroundColor = "#" + rainbowColor;
            } else {
                cell.style.backgroundColor = "rgb(165,165,165)";
            }
            
        });
    };
    
};

//creates the initial 16x16 drawing area
makeRows(16,16);//initially create a 16x16 drawing area

//sets initial mode to classicMode
classicBtn.focus();

function classicMode(){
    classicModeOn = true;
    rainbowModeOn = false;
    eraserModeOn = false;
}

function rainbowMode(){
    classicModeOn = false;
    rainbowModeOn = true;
    eraserModeOn = false;
}

function eraserMode(){
    classicModeOn = false;
    rainbowModeOn = false;
    eraserModeOn = true;
}

//updates the text above the slider
output.innerHTML = slider.value + " x " + slider.value;

//Update the current slider value (each time you drag the slider handle)
slider.oninput = function(){
    rowSize = this.value;
    colSize = this.value;
    output.innerHTML = rowSize + " x " + colSize;
}

//clears the divs in preparation of creating more in a different pixel resolution
function reset(){
    document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
}

//clears the current sketch pad
function clearScreen(){
    //clears the drawing board
    const pixels = document.getElementsByClassName("grid-item");
    for(let j = 0; j < pixels.length; j++){
        pixels[j].style.backgroundColor = "rgb(165,165,165)";
    }
    reset();//clears the drawing canvas
    makeRows(rowSize,colSize); //create a new canvas based on the slider 
    classicMode();
    classicBtn.focus();
}












