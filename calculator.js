class Calculator {
  constructor() {
    this.currentLeft = "0"; // 78 --> 132
    this.operation = ""; //
    this.currentRight = ""; //
  }

  setLeft(left) {
    this.currentLeft = left;
  }

  setRight(right) {
    this.currentRight = right;
  }

  setOperation(operation) {
    this.operation = operation;
  }

  evaluate() {
    let result = 0;
    // do something

    this.currentLeft = result.toString();
    this.operation = "";
    this.currentRight = "";
  }

  debug() {
    console.log(
      `Left value is ${this.currentLeft} will be performing ${this.operation} operation to right value which is ${this.currentRight}`
    );
  }
}

console.log("Started...");

window.onload = (event) => {
  const calculator = new Calculator();

  const numberHandler = (event) => {
    console.log(event.target.innerHTML);
    calculator.debug();
  };

  const operationHandler = (event) => {
    console.log(event);
    calculator.debug();
  };

  document
    .querySelectorAll(".number>button")
    .forEach((numberButton) =>
      numberButton.addEventListener("click", numberHandler)
    );

  document
    .querySelectorAll(".operation>button")
    .forEach((numberButton) =>
      numberButton.addEventListener("click", numberHandler)
    );
};
