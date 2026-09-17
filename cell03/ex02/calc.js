document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const leftStr = document.getElementById("left").value;
    const rightStr = document.getElementById("right").value;
    const op = document.getElementById("operator").value;

    const isPositiveInteger = (str) => {
      return /^\d+$/.test(str);
    };

    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
      alert("Error :(");
      return;
    }

    const a = parseInt(leftStr, 10);
    const b = parseInt(rightStr, 10);

    if ((op === "/" || op === "%") && b === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }

    let result;
    switch (op) {
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = a / b; break;
      case "%": result = a % b; break;
    }

    alert(result);
    console.log(result);
  });

  setInterval(() => {
    alert("Please, use me...");
  }, 30000);
});