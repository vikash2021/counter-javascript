import "./styles.css";

document.getElementById("app").innerHTML = `
<main>
<h1>Counter</h1>
<h2 id="value">0</h2>
<div id="inputWrapper">
<h4>Increment/Decrement by:</h4>
<input id="input" type="number" value="1" />
</div>
<div id="ctrlBtnWrapper">
<button id="incrementBtn">+</button>
<button id="decrementBtn">-</button>
</div>
<div id="btnWrapper">
<button id="resetBtn">Reset</button>
</div>


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
      parseInt(changingValue.textContent) + input.valueAsNumber;
  };

  const onDecrement = () => {
    changingValue.textContent =
      parseInt(changingValue.textContent) - input.valueAsNumber;
  };

  const onReset = () => {
    changingValue.textContent = 0;
    input.value = 1;
  };

  input.addEventListener("change", onChange);
  incrementer.addEventListener("click", onIncrement);
  decrementer.addEventListener("click", onDecrement);
  resetter.addEventListener("click", onReset);
})();
