import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  taskController = new TaskController();
}

window["app"] = new App();
