const containerDiv = document.querySelector(".container");
const btn = document.querySelector("#btn");

for (let i = 0; i < 16**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    containerDiv.appendChild(square);
    square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
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

    containerDiv.replaceChildren();

    for (let i = 0; i < size**2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
    containerDiv.appendChild(square);
    square.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
    });
}
};

btn.addEventListener("click", createGrid);