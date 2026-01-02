class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  async execute() {
    const userInput = await this.view.input();

    const result = this.model.calculate(userInput);

    this.view.print(result);
  }
}

export default Controller;
