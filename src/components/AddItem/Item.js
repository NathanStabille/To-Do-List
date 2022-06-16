class Item {
  constructor(text, lastId = 0) {
    this.id = lastId + 1;
    this.text = text;
    this.done = false;

    localStorage.setItem("lastId", this.id);
  }
}

export default Item;
