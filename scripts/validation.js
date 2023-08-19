const showErrorMessage = (input, { errorClass, inputErrorClass }) => {
  const errorMessage = document.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
  errorMessage.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

const hideErrorMessage = (input, { errorClass, inputErrorClass }) => {
  const errorMessage = document.querySelector(`#${input.id}-error`);
  errorMessage.classList.remove(errorClass);
  errorMessage.classList.remove(inputErrorClass);
  errorMessage.textContent = "";
};

const checkInputValidity = (input, options) => {
  if (input.validity.valid) {
    hideErrorMessage(input, options);
  } else {
    showErrorMessage(input, options);
  }
};

const toggleButtonState = (inputs, button, options) => {
  const isValid = inputs.every((input) => input.validity.valid);
  console.log(isValid, button);
  if (isValid) {
    button.classList.remove(options.inactiveButtonClass);
  } else {
    button.classList.add(options.inactiveButtonClass);
  }
};

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  ...options
}) => {
  const formElements = [...document.querySelectorAll(formSelector)];
  console.log(formElements);
  formElements.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const formInputs = [...document.querySelectorAll(inputSelector)];
    const formButton = form.querySelector(submitButtonSelector);
    console.log(formInputs);
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkInputValidity(input, options);
        toggleButtonState(formInputs, formButton, options);
      });
    });
  });
};

//* Objects

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
});
