export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  setEventListeners() {
    //sets eventlisteners
  }

  open() {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscape);
    modal.addEventListener("mousedown", closeModalOnClick);
  }

  close() {
    //closes popup
  }

  _handleEscClose() {
    //listens for esc button
  }
}
