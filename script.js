let classicModeOn = true;
let rainbowModeOn = false;
let eraserModeOn = false;

let rainbowColor = "#000000";


const container = document.getElementById("container");

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

makeRows(16,16);

//clears the current sketch pad
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click',clearScreen);

function clearScreen(){
    //clears the drawing board
    const pixels = document.getElementsByClassName("grid-item");
    for(let j = 0; j < pixels.length; j++){
        pixels[j].style.backgroundColor = "rgb(165,165,165)";
    }

    //add a shaking animation when clearing the screen
}



//Add button to select "rainbow colow" mode
const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click',rainbowMode);

function rainbowMode(){
    console.log("activate rainbow mode");
    classicModeOn = false;
    rainbowModeOn = true;
    eraserModeOn = false;
}

//Add a button to go back to "classic mode"
const classicBtn = document.getElementById("classic");
classicBtn.addEventListener('click', classicMode);

function classicMode(){
    console.log("activate classic mode");
    classicModeOn = true;
    rainbowModeOn = false;
    eraserModeOn = false;
}

//add a button to go to "eraser mode"
const eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener('click', eraserMode);

function eraserMode(){
    console.log("activate eraser")
    classicModeOn = false;
    rainbowModeOn = false;
    eraserModeOn = true;
}

//add a slider or input to select grid size, ie 16x16, 48x48 etc







