import _list from "../Models/List.js";
import _store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(rawList) {
    let list = new _list(rawList);
    _store.State.lists.push(list);
    _store.saveState();
  }
  addItem(listItem, listId) {
    let list = _store.State.lists.find((l) => l.id == listId);
    if (list.items.length >= 10) {
      // throw stops a function and creates an error to whomever called it
      throw new Error("Too many items!");
    }
    if (listItem == "asdf") {
      this.deleteList(listId);
      throw new Error("No Profanities!!");
    }
    list.items.push(listItem);
    _store.saveState();
  }
  deleteList(id) {
    if (confirm("Are you sure you want to delete?")) {
      _store.State.lists = _store.State.lists.filter((l) => l.id != id);
    }
    _store.saveState();
  }
  deleteItem(listId, index) {
    if (confirm("Are you sure you want to delete?")) {
      let list = _store.State.lists.find((i) => i.id == listId);
      list.items.splice(index, 1);
    }
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;

console.log("Service.js present");
