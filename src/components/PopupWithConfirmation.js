import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._modalForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupElement.querySelector(".modal__button");
  }

  confirmDelete(confirmation) {
    this._handFormSubmit = confirmation;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handFormSubmit();
    });
  }
}
