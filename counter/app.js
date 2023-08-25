var value = document.querySelector("#value");
var decrease = document.querySelector(".decrease");
var reset = document.querySelector(".reset");
var increase = document.querySelector(".increase");
let inc = 0;
reset.addEventListener("click", function () {
  value.textContent = 0;
  inc = 0;
});

increase.addEventListener("click", function () {
  inc++;
  value.textContent = inc;
});
decrease.addEventListener("click", function () {
  inc--;
  value.textContent = inc;
});
