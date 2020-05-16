import ListController from "./Controllers/ListController.js";

//NOTE This should be good to go
class App {
  listController = new ListController();
}

console.log("main.js present");
window["app"] = new App();
