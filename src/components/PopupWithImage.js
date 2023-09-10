import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._cardImageElement = this._popupElement.querySelector(".cards__image");
    this._cardElementTitle = this._popupElement.querySelector(
      ".cards__description-text"
    );
  }

  open(data) {
    this._cardImageElement.src = data._link;
    this._cardImageElement.alt = data._name;
    this._cardElementTitle.textContent = data._name;
    super.open();
  }
}
