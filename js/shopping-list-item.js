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

  render(idx) {
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.className = 'check';

    if (this.isDone) {
      return `<li class="completed_${this.isDone}">
        <button onclick="removeItemButtonClicked(${idx})">x</button>
        <input onchange="changeCheckedStatus(${idx}, this)" type="checkbox" class="check" checked/> 
        <span>${this.name}</span> 
        <span>${this.description}</span>
        </li>`;
    } else {
      return `<li class="completed_${this.isDone}">
        <button onclick="removeItemButtonClicked(${idx})">x</button>
        <input onchange="changeCheckedStatus(${idx}, this)" type="checkbox" class="check"/> 
        <span>${this.name}</span> 
        <span>${this.description}</span>
        </li>`;
    }
  }
}

// module.exports = {
//   ShoppingListItem : ShoppingListItem
// };
