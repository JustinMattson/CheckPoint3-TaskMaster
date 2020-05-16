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

  deleteTopping(itemId, index) {
    let list = _store.State.lists.find((p) => p.id == itemId);
    list.items.splice(index, 1);
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;

console.log("Service.js present");
