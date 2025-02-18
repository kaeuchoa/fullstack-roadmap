class MainController {
  _input;
  _inputValue = "";
  constructor() {
    this._input = document.getElementById("search");
    this.initInput();
  }

  initInput() {
    if (!this._input) {
      throw new Error("Input not found");
    }

    this._input.addEventListener("input", (event) => {
      this._inputValue = event.target.value;
    });
  }
}

export default MainController;
