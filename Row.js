import modal from './modal';

export default class Row {
  constructor(title, price, save = false) {
    this.element = null;
    // this.id = id;
    this.title = title;
    this.price = price;

    if (save) {
      this.renderElement();
    }
  }

  openModal() {
    modal.open(this.title, this.price, this.updateData.bind(this));
  }

  registerEvents() {
    const deleteButton = this.element.querySelector('.delete_button');
    deleteButton.addEventListener('click', () => {
      this.element.outerHTML = '';
    });

    const modifyButton = this.element.querySelector('.modify_button');
    modifyButton.addEventListener('click', () => {
      this.openModal();
    });
  }

  updateData(title, price) {
    this.title = title;
    this.price = price;

    this.renderElement();
  }

  renderElement() {
    if (!this.element) {
      this.element = document.createElement('tr');
      const tableBody = document.querySelector('.table_body');
      tableBody.append(this.element);
    }

    this.element.innerHTML = `<tr class='row'>
    <td>${this.title}</td>
    <td>${this.price}</td>
    <td>
      <button class='modify_button'>&#9998</button>
      <button class='delete_button'>&#10008</button>
    </td>
    </tr>`;

    this.registerEvents();
  }
}
