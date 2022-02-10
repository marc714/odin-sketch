//const container = document.querySelector('.container');
const div = document.createElement('div');
div.classList.add("blocks");

// appendChild does not insert copies. You can use cloneNode to make copies. https://forum.freecodecamp.org/t/why-my-for-loop-doesnt-repeat-the-div-10-times/340676
// also here: https://stackoverflow.com/questions/12730824/appendchild-in-for-loop-only-adds-1-child
// NOTE: Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using addEventListener() or those assigned to element properties (e.g., node.onclick = someFunction).
// https://stackoverflow.com/questions/15408394/how-to-copy-a-dom-node-with-event-listeners
// Delegation https://pawelgrzybek.com/cloning-dom-nodes-and-handling-attached-events/

function gridLoad(){
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add("blocks");
    for (let i=0; i<2; i++){  // row
        for (let j=0; j<2; j++){ // column
            container.appendChild(div.cloneNode(true));
           }
    };    
};

gridLoad();

// makes a nodelist for use in array methods
const blocksHolderVariable = document.querySelectorAll('.blocks');
const reset = document.querySelector('#reset');

blocksHolderVariable.forEach(square => {
    square.addEventListener('mousemove', function(e) {
    // square.classList.add('.mycolor');  this works, but the css doesn't.
    e.target.style.backgroundColor = "orange";
    });
        // https://www.w3schools.com/jsref/event_target.asp  
        // event.target = The "target" event property (a property of event) returns the element that triggered the event.


    // add reset button event listener to each square
    /*
    reset.addEventListener('click', function(e) {
        square.style.backgroundColor = "white";
        //reset.style.backgroundColor = "red";
        e.target.style.backgroundColor = "red";
                
    }); */
});

reset.addEventListener('click', resetGrid);
const container = document.querySelector('.container');
function resetGrid(){
    blocksHolderVariable.forEach(element => element.style.backgroundColor = "white");
    
    clearGrid();
    /*
    let gridNumber = prompt("How many grids do you want?", 16);
    if (gridNumber < 100) {
        userGridLoad(gridNumber);
    } else {
        alert("Please input grid number less than 100");
    };
    */
    gridLoad();
};

function clearGrid(){
    container.innerHTML = "";
};


function userGridLoad(gridnumber){
    for (let i=0; i<gridnumber; i++){
        for (let j=0; j<gridnumber; j++){
            container.appendChild(div.cloneNode(true));    
        }
    }
    //div.className = "blocks";

}


// reset.addEventListener('click', function(e){
//     blocksHolderVariable.forEach(element => {
//         element.remove();
//     });
    
//     /* The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's ELEMENTS that match the specified group of selectors.
    
//     https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
//     https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//     Executes a provided function once per NodeList ELEMENT, passing the ELEMENT (itself) as an argument to the function. */

    
//     let gridNumber = prompt("How many grids do you want?", 16);
//     if (gridNumber < 100) {
//         userGridLoad(gridNumber);
//     } else {
//         alert("Please input grid number less than 100");
//     }    
// })




//-------------------------- for the UL 1 and 2 test at bottom
// const list = document.querySelector('ul');
// list.addEventListener('mouseover', function(e){
//     e.target.style.color = "orange";
//     e.target.style.backgroundColor = "black";

//     setTimeout(function() {
//         e.target.style.color = "";
//         e.target.style.backgroundColor = "";
//       }, 3000);
//     }, false);


// const divTemp = document.querySelector('.divtemp');

// divTemp.addEventListener('mouseover', function(e) {
//     divTemp.style.backgroundColor = "black";
// })

