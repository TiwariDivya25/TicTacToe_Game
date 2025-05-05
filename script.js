let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0 ,1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //PlayerX
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else {
            //PlayerY
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });   
});

resetBtn.addEventListener("click", () => {
    turnO = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    resetBtn.innerText = "Reset Game";
})

const checkWinner = () => {
    let isDraw = true; // Assume it's a draw
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            for (let box of boxes) {
                box.disabled = true;
            }
            resetBtn.innerText = "New Game"
            alert("The winner is " + pos1Val);
            return; // Exit function early if there's a winner
        }
    }

    // Check if all boxes are filled (no empty boxes left)
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false; // If there's an empty box, it's not a draw
            break;
        }
    }

    if (isDraw) {
        alert("It's a draw!");
        resetBtn.innerText = "New Game";
    }
};
