import "./styles.css";

document.getElementById("app").innerHTML = `
<main>
<h2>Counter</h2>
<div id="value">0</div>
<button id="incrementBtn">+</button>
<button id="decrementBtn">-</button>
<input id="input" placeholder="Enter number" type="number" value="1" min="1" max="10"/>
<button id="resetBtn">Reset</button>
</main>
`;

(function () {
  const changingValue = document.getElementById("value");
  const input = document.getElementById("input");
  const incrementer = document.getElementById("incrementBtn");
  const decrementer = document.getElementById("decrementBtn");
  const resetter = document.getElementById("resetBtn");

  const onChange = (e) => {
    const changeByValue = input.valueAsNumber;
    if (Number.isNaN(changeByValue)) {
      input.value = 1;
    } else if (changeByValue < 0) {
      input.value = 1;
    }
  };

  const onIncrement = () => {
    changingValue.textContent =
      +changingValue.textContent + input.valueAsNumber;
  };

  const onDecrement = () => {
    changingValue.textContent =
      parseInt(changingValue.textContent) - parseInt(input.valueAsNumber);
  };

  const onReset = () => {
    changingValue.textContent = 0;
  };

  input.addEventListener("change", onChange);
  incrementer.addEventListener("click", onIncrement);
  decrementer.addEventListener("click", onDecrement);
  resetter.addEventListener("click", onReset);
})();
