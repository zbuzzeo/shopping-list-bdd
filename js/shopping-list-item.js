'use strict';

class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    this.isDone = true;
  }

  uncheck() {
    this.isDone = false;
  }

  render() {
    return `<li class="completed_${this.isDone}"><span>${
      this.name
    }</span> <span>${this.description}</span></li>`;
  }
}

module.exports = {
  ShoppingListItem : ShoppingListItem
};
