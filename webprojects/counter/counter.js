console.log("Initializing...");

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

increment.addEventListener("click", () => changeCounter(1));
decrement.addEventListener("click", () => changeCounter(-1));
reset.addEventListener("click", resetCounter);

function changeCounter(value) {
  const counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) + value;
  bobCounter();
}

function resetCounter() {
  const counter = document.getElementById("counter");
  counter.textContent = 0;
  bobCounter();
}

function bobCounter() {
  counter.classList.remove("bob");
  void counter.offsetWidth; 
  counter.classList.add("bob");
}