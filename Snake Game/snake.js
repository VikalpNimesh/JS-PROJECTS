let lastTime = 0;
let snakeSpeed = 1;
function paint(currentTime) {
  let timeSecond = (currentTime - lastTime) / 1000;

  requestAnimationFrame(paint);
  if (timeSecond < 1 / snakeSpeed) return;
  lastTime = currentTime;
  console.log(timeSecond);

  update();
  draw();
}

window.requestAnimationFrame(paint);

let inputDirection = { a: 1, b: 0 };

let snakeBody = [
  { x: 8, y: 8 },
  { x: 9, y: 8 },
];

function update() {
  snakeMove();
  gameBoard.innerHTML = "";
}

function draw() {
  drawSnake();
}
const gameBoard = document.querySelector(".game-board");
function drawSnake() {
  snakeBody.forEach((segment) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

function snakeMove() {
  snakeBody[0].x += inputDirection.a;
  snakeBody[0].y += inputDirection.b;
  getInputDirection();
  
 
}


function getInputDirection(){
  window.addEventListener("keydown", (e) => {
  console.log(e.key);
   
  })
  
};