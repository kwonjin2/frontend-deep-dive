import Controller from "./Controller.js";
import View from "./View.js";
import Model from "./Model.js";

class App {
  async run() {
    const view = new View();
    const model = new Model();
    await new Controller(view, model).execute();
  }
}

export default App;
