import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
    /** @type  {String[]} */
    this.items = data.items || [];
    this.color = data.color;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
      <div class="card shadow m-2 border-secondary">
        <!-- Card Header -->
        <div
          class="d-flex justify-content-between p-2"
          style="background-color:${this.color};"
        >
          <span>
            <h3 id="taskName" class="mt-2 text-light ts-dark pl-2">
              ${this.name}
            </h3>
          </span>
          <span>
            <button
              type="submit"
              class="btn ml-1"
              onclick="app.listsController.deleteList('${this.id}')"
            >
              <i class="fa fa-times text-danger ts-dark"></i>
            </button>
          </span>
        </div>
        <!-- Card Body -->
        <div class="card-body d-flex flex-column mt-3 p-3">
          <ul class="pl-3">
            ${this.itemsTemplate}
          </ul>
          <form
            class="p-1"
            onsubmit="app.listsController.addItem(event, '${this.id}')"
          >
            <div class="form-group d-flex mb-1">
              <input
                type="text"
                class="form-control border-0 bs-none"
                name="item"
                id="item"
                aria-describedby="helpId"
                placeholder="Add list item..."
                required
              />
              <button type="submit" class="btn ml-1">
                <i class="fas fa-plus action ts-dark" style="color:${this.color}"></i>
              </button>
            </div>
            <div
              class="bs-none"
              style="
                height: 3px;
                width: 100%;
                background-color: ${this.color};
              "
            ></div>
          </form>
        </div>
      </div>
    `;
  }

  get itemsTemplate() {
    let template = "";
    this.items.forEach((item, index) => {
      template += /*html*/ `
        <li>${item}
            <i class="fas fa-times text-danger action"
                onclick="app.listsController.deleteItem('${this.id}', ${index})"></i>
        </li>
        `;
    });
    return template;
  }
}
console.log("Model.js present");
