import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [
    /** @type {List[]} */
    new List({
      id: "ABC123",
      name: "Bathroom",
      items: [
        "Close door",
        "Lock door",
        "Test flush",
        "Take care of business",
        "Post flush",
        "Wash hands",
        "Check hair",
        "Exit",
      ],
      color: "#00ff00",
    }),
  ],
};
console.log(_state.lists);
console.log("^from store^");

//NOTE You should not need to change the code from this point down
console.log("store.js present");

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map((l) => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const STORE = new Store();
export default STORE;
