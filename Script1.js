const squares = document.querySelectorAll(".square");
let turn = "X";

for (const square of squares) {
    square.addEventListener("click", function () {
        if (square.textContent === "") {
            square.textContent = turn;
            turn = turn === "X" ? "O" : "X";
        }
    });
}