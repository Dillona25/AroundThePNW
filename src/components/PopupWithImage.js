import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ name, link }) {
    this._popupElement.querSelector(".modal__image-caption").textContent = name;
    const image = this._popupElement.querySelector(".modal__image");
    image.src = link;
    image.alt = name;
    super.open();
  }
}
