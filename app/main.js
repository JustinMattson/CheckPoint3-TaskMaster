import ListsController from "./Controllers/ListsController.js";

//NOTE This should be good to go
class App {
  listsController = new ListsController();
}

console.log("main.js present");
window["app"] = new App();
