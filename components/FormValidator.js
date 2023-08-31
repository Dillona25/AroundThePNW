class FormValidator {
  constructor(options, formElements) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
    this._form = formElements;
  }

  _showErrorMessage(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
    errorMessage.textContent = "";
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputElements)) {
      return this.disableButton();
    } else {
      return this.enableButton();
    }
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((input) => input.validity.valid);
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      return this._showErrorMessage(input);
    }
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputElemnts.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
