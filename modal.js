class Modal {
  constructor(element) {
    this.element = element;
    this.updateCallback = null;

    this.titleElement = this.element.querySelector('.title');
    this.titleValidation = this.element.querySelector('.title_validation');
    this.priceElement = this.element.querySelector('.price');
    this.priceValidation = this.element.querySelector('.price_validation');

    const buttonSubmit = this.element.querySelector('.form_submit');
    buttonSubmit.addEventListener('click', () => {
      let hasError = false;
      this.titleValidation.classList.add('hidden');
      this.priceValidation.classList.add('hidden');

      const title = this.titleElement.value;
      if (!title) {
        this.titleValidation.classList.remove('hidden');
        hasError = true;
      }

      let price;
      try {
        price = Number(this.priceElement.value);
        if (!price) {
          this.priceValidation.classList.remove('hidden');
          hasError = true;
        }
      } catch (e) {
        this.priceValidation.classList.remove('hidden');
        hasError = true;
      }

      if (!hasError) {
        this.updateCallback(title, price);
        this.close();
      }
    });

    const buttonClose = this.element.querySelector('.form_close');
    buttonClose.addEventListener('click', () => {
      this.close();
    });
  }

  open(title, price, updateCallback) {
    this.titleElement.value = title;
    this.priceElement.value = price;
    this.updateCallback = updateCallback;

    this.element.classList.remove('hidden');
  }

  close() {
    this.titleElement.value = '';
    this.priceElement.value = '';
    this.updateCallback = null;
    this.titleValidation.classList.add('hidden');
    this.priceValidation.classList.add('hidden');

    this.element.classList.add('hidden');
  }
}

const modal = document.querySelector('.form-popup');
export default new Modal(modal);
