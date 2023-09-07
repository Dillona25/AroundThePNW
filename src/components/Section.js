export default class Section {
  constructor({ items, renderer }, //CSS Selector to add card elements) {}

  renderItems() {
    //Renders all elements on the page and uses "renderer" function  for each element
  }

  addItem() {
    //takes DOM element and adds it to container
  }
}

//The Section class doesn't have markup. It receives markup through the callback function and inserts it in the container.
