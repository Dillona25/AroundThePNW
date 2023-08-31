class FormValidator {
  constructor(options, formElements, formInputs, formButton) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
    this._form = formElements;
    this._formInputs = formInputs;
    this._formButotn = formButton;
  }

  _showErrorMessage() {}

  _hideErrorMessage() {}

  _toggleButtonState() {}

  _hasInvalidInput() {}

  _setEventListeners() {}

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log(this._form);
    });
  }
}

export default FormValidator;
