let box = document.querySelectorAll(".box");
let msgContainer = document.querySelector("#msgContainer");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
turno = true;
box.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box cliked!");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let posVal1 = box[patterns[0]].innerText;
    let posVal2 = box[patterns[1]].innerText;
    let posVal3 = box[patterns[2]].innerText;

    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
      }
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratluation! ${winner} won the match. :)`;
  msgContainer.classList.remove("hide");
  disableBox();
};

let disableBox = () => {
  for (let boxs of box) {
    boxs.disabled = true;
  }
};
let enableBox = () => {
  for (let boxs of box) {
    boxs.disabled = false;
    boxs.innerText = "";
  }
};
let resetGame = () => {
  turno = true;
  msgContainer.classList.add("hide");
  enableBox();
};
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
