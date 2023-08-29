export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //.cards__delete
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handLikeIcon();
      });

    this._cardElement
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });
  }

  _handLikeIcon() {
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getCard() {
    // get the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__content")
      .cloneNode(true);
    // set event listeners
    this._setEventListeners();
  }
}
