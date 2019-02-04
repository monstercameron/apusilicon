class DatabaseForm {
  constructor(parent) {
    this.id = "TBL" + uuid();
    this.parent = parent;
  }
  setParent(parent) {
    this.parent = parent;
    //method chaining
    return this;
  }
  getParent() {
    return this.parent;
  }
  getId() {
    return this.id;
  }
  setClassList(classList) {
    this.classList = classList;
    //method chainin
    return this;
  }
  getClassList() {
    return this.classList;
  }
  print(){
    console.info(this)
    //method chaining
    return this;
  }
  template() {
    return `<div class="col-sm-8 mx-auto border rounded shadow m-2 p-2">
        <!-- window action -->
        <div class="col-sm-12 p-0">
          <div class="col-sm-auto ml-auto p-1">
            <button 
            class="btn btn-block bg-light" style="max-height: 24px;"
            onclick="page.removeDbEntryForm().update()">
              <i class="material-icons"> expand_more </i>
            </button>
          </div>
        </div>
        <!-- title -->
        <div class="text-center mt-3 mb-3"><h3>Database Entry Form</h3></div>
        <!-- form -->
        <!-- image selection -->
        <input
          type="file"
          class="form-control bg-secondary text-white mt-1 mb-1"
          placeholder="Brand"
        />
        <!-- brand -->
        <input type="text" class="form-control mt-1 mb-1" placeholder="Brand" />
        <!-- family -->
        <input
          type="text"
          class="form-control mt-1 mb-1"
          placeholder="Family"
        />
        <!-- SKU -->
        <input type="text" class="form-control mt-1 mb-1" placeholder="SKU" />
        <!-- Apu selection -->
        <select class="form-control">
          <option value="" disabled selected>APU</option>
          <option value="">opt a</option>
          <option value="">opt a</option>
        </select>
        <!-- RAM -->
        <input type="text" class="form-control mt-1 mb-1" placeholder="RAM" />
        <!--  -->
        <input
          type="text"
          class="form-control mt-1 mb-1"
          placeholder="Storage"
        />
        <!-- display -->
        <input
          type="text"
          class="form-control mt-1 mb-1"
          placeholder="Display"
        />
        <!-- and more -->
      </div>`;
  }
}