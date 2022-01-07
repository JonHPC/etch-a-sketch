const container = document.getElementById("container");

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        cell.className = "grid-item";
        container.appendChild(cell).id = i;
        cell.addEventListener('mouseover',function(e){
            cell.style.backgroundColor = "black";
            console.log("color changed");
        });
    };
    
};

makeRows(16,16);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click',clearScreen);

function clearScreen(){
    //clears the drawing board
    const pixels = document.getElementsByClassName("grid-item");
    for(let j = 0; j < pixels.length; j++){
        pixels[j].style.backgroundColor = "white";
    }
}