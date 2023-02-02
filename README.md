<!DOCTYPE html>
<html>
<head>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 10px;
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }

            .board button {
                font-size: 48px;
                width: 100%;
                height: 100%;
                background-color: lightgray;
                border: none;
            }
    </style>
</head>
<body>
    <div class="board">
        <button id="box-1"></button>
        <button id="box-2"></button>
        <button id="box-3"></button>
        <button id="box-4"></button>
        <button id="box-5"></button>
        <button id="box-6"></button>
        <button id="box-7"></button>
        <button id="box-8"></button>
        <button id="box-9"></button>
    </div>

    <script>
const boxes = document.querySelectorAll('.board button');
let currentPlayer = 'X';

for (const box of boxes) {
  box.addEventListener('click', function() {
    this.innerText = currentPlayer;
    this.disabled = true;

    if (checkWin(boxes)) {
      alert(`Player ${currentPlayer} wins!`);
      return;
    } else if (checkTie(boxes)) {
      alert("It's a tie!");
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  });
}

function checkWin(boxes) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      boxes[a].innerText === currentPlayer &&
      boxes[b].innerText === currentPlayer &&
      boxes[c].innerText === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie(boxes) {
  for (const box of boxes) {
    if (!box.innerText) {
      return false;
    }
  }
  return true;
}
</script> 

</body>
</html>
