class FormValidator {
  constructor(options, formElements, formInputs, formButton) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;

    this._formElements = formElements;
    this._formInputs = formInputs;
    this._formButton = formButton;
  }

  _showErrorMessage() {}

  _hideErrorMessage() {}

  _toggleButtonState() {}

  _hasInvaidInput() {}

  _setEventListeners() {
    this._formInputs = [
      ...this._formElements.querySelectorAll(this._inputSelector),
    ];
    this._formButton = this._formElements.querySelector(
      this._submitButtonSelector
    );
    toggleButtonState(formInputs, formButton, options);
    console.log(formInputs);
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, options);
        toggleButtonState(formInputs, formButton, options);
      });
    });
  }

  enableValidation() {
    this._formElements.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export default FormValidator;
