import _listsService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists;
  console.log(lists);
  console.log("^from _drawLists Controller^");

  let template = "";
  lists.forEach((l) => (template += l.Template));
  document.getElementById("taskItems").innerHTML = template;
}

//Public
export default class ListsController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event) {
    event.preventDefault();
    let rawList = {
      color: event.target.color.value,
      name: event.target.list.value,
    };
    console.log(rawList);
    console.log("^addTaskList^");

    _listsService.addList(rawList);
    event.target.reset();
    _drawLists();
  }

  addPizza(e) {
    e.preventDefault();
    let rawList = {
      list: e.target.list.value,
    };
    _listsService.addPizza(rawList);
    // e.target.reset()
    _drawLists();
  }
}

console.log("Controller.js present");
