import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._cardImage = this._popupElement.querySelector(".modal__image");
    this._cardDescritpion = this._popupElement.querySelector(
      ".modal__image-caption"
    );
    console.log(this._cardDescritpion);
  }

  open({ name, link }) {
    super.open();
    this._cardImage.src = link;
    this._cardDescritpion.textContent = name;
    this._cardImage.alt = name;
  }
}
