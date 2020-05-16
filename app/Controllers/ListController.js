import _listsService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists;
  console.log(lists);
  console.log("^from _drawLists Controller^");

  let template = "";
  _store.State.lists.forEach((l) => (template += l.Template));
  document.getElementById("taskItems").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addTaskList(event) {
    event.preventDefault();
    // let formData = event.target;
    // let rawTaskList = {
    //   color: formData.color.value,
    //   name: formData.name.value,
    // };
    // console.log(rawTaskList);
    console.log("^addTaskList^");

    //_listsService.addItemList(rawTaskList);
    //event.target.reset();
    //_drawLists();
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
