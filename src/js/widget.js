import checker from './checker';
import cardType from './cardType';

export default class CcWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  static get cards() {
    return `
        <ul class="card__list">
            <li class="card__item card_mir hidden"></li>
            <li class="card__item card_visa hidden"></li>
            <li class="card__item card_mastercard hidden"></li>
            <li class="card__item card_american_express hidden"></li>
            <li class="card__item card_discover hidden"></li>
            <li class="card__item card_jcb hidden"></li>
            <li class="card__item card_diners_club hidden"></li>
        </ul>
        `;
  }

  static get markup() {
    return `
        <form class="form__widget">
            <input type="text" class="input__widget" placeholder="Credit Card number">
            <button class="btn">Click to validate</button>
        </form>
        `;
  }

  static get selector() {
    return '.form__widget';
  }

  static get inputSelector() {
    return '.input__widget';
  }

  static get submitSelector() {
    return '.btn';
  }

  static get invalidMessage() {
    return `
        <div class="invalid">Invalid CCN!</div>
        `;
  }

  paymentSystemActive(systemType) {
    if (systemType) {
      const element = this.parentEl.querySelector(`.card_${systemType}`);
      element.classList.remove('hidden');
      element.classList.add('active');
    }
  }

  clearClass() {
    const listC = this.parentEl.querySelector('.card__list');
    if (listC.querySelector('.active')) {
      listC.querySelector('.active').classList.add('hidden');
      listC.querySelector('.active').classList.remove('active');
    }
  }

  bindToDOM() {
    this.parentEl.insertAdjacentHTML('beforeend', CcWidget.cards);
    this.parentEl.insertAdjacentHTML('beforeend', CcWidget.markup);

    this.element = this.parentEl.querySelector(CcWidget.selector);
    this.input = this.element.querySelector(CcWidget.inputSelector);
    this.submit = this.element.querySelector(CcWidget.submitSelector);
    this.reset = this.element.querySelector(CcWidget.reset);

    this.element.addEventListener('submit', this.onSubmit);
    this.element.addEventListener('input', this.onInput);
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.input;
    if (checker(value)) {
      this.paymentSystemActive(cardType(value));
    } else if (!this.parentEl.querySelector('.invalid')) {
      this.parentEl.insertAdjacentHTML('beforeend', CcWidget.invalidMessage);
    }
  }

  onInput() {
    this.clearClass();
    const invalid = this.parentEl.querySelector('.invalid');
    if (invalid) {
      invalid.remove();
    }
  }
}
