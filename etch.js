const containerDiv = document.querySelector(".container");
const btn = document.querySelector("#btn");

for (let i = 0; i < 16**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.opacity = 0.1;
    containerDiv.appendChild(square);
    square.addEventListener("mouseover", (e) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        let currentOpacity = parseFloat(square.style.opacity);
        let newOpacity = currentOpacity + 0.1;
        square.style.opacity = newOpacity;
        
        if (newOpacity > 1) {newOpacity = 1} ;

    });    
}

// btn.addEventListener("click", () => {

//     let userInput =  prompt("Enter number of squares per side for your new grid");
//     userInput = Number(userInput);

//     for (let i = 0; i < userInput**2; i++){
//     square.removeElement("div");
//     const square = document.createElement("div");
//     square.classList.add("square");
//     containerDiv.appendChild(square);   
//     }
// });


function createGrid(size) {

    let userInput =  prompt("Enter number of squares per side for your new grid");
        size = Number(userInput);

        if (userInput === null) { return }
        
        else if ( userInput > 100 || userInput < 0 || userInput === "" || isNaN(userInput) ) {
            return alert("Invalid entry");
        }

    containerDiv.replaceChildren();

    for (let i = 0; i < size**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    square.style.opacity = 0.1;
    containerDiv.appendChild(square);
    square.addEventListener("mouseover", (e) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        let currentOpacity = parseFloat(square.style.opacity);
        let newOpacity = currentOpacity + 0.1;
        square.style.opacity = newOpacity;
    });
    }
};

btn.addEventListener("click", createGrid);


