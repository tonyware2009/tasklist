import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController()
  taskController = new TaskController()
}

window["app"] = new App();
