// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(ormEl, inputEl, { inputErrorClass, errorClass }) {
  const errorMessage = document.querySelector(`#${inputEl}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessage.textContent = inputEl.validationMessage;
  errorMessage.classList.add(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputElements = [...formEl.querySelectorAll(inputSelector)];
  inputElements.forEach((inputEl) => {
    checkInputValidity(formEl, inputEl, options);
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll("options.formSlector")];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, options);
    //* look for inputs in form
    //* loop through the inputs to check validity
    //* if input not valid grab the validation message
    //* add error class to input and show display error message
    //* Make sure button is disabled, if all valid then enable button
    //* reset error messages
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
