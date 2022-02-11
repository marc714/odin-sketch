// Clone Node doesn't copy event handlers.
const container = document.querySelector('.container');
const div = document.createElement('div');
const reset = document.querySelector('#reset');
div.classList.add("blocks");
reset.addEventListener('click', resetGrid);
// mouse controls
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function gridLoad(squares){
    for (let i=0; i<squares; i++){  // row
        for (let j=0; j<squares; j++){ // column
            let clonedDiv = container.appendChild(div.cloneNode());
            
            ['mouseover', 'mousedown'].forEach(action => {
                clonedDiv.addEventListener(action, function(e){
                    if (e.type === 'mouseover' && !mouseDown) return; // if mouse up
                    e.target.style.backgroundColor = "pink";
                    //opacity bonus
                    let opacity = window.getComputedStyle(clonedDiv).getPropertyValue("opacity");
                    let parseOpacity = parseFloat(opacity);
                    let newOpacity = parseOpacity+0.1;
                    clonedDiv.style.opacity = newOpacity;
                });
            });  
        };
    };     
};

function resetGrid(){ 
    clearGrid();
    let userGridSize = prompt("How big is ur grid", 10); // returns a string
    let parsedGrid = parseInt(userGridSize*50);  
    if (userGridSize <= 100) {
      container.style.width = `${parsedGrid}px`;
      gridLoad(userGridSize);
    } else {
      alert("Please input less than 101.");
    };    
};

function clearGrid(){
    container.innerHTML = "";
};

gridLoad(10);