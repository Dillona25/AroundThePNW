//* Elements
const formElement = document.querySelector(".modal__form");
const formInput = formElement.querySelector(".modal__input");
const formError = document.querySelector("modal__input_type_error");

//* Event Listeners
formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

const showError = (input, errorMessage) => {
  input.classList.add(".modal__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add(".modal__error_visbile");
};

const hideError = (input) => {
  input.classList.remove("modal__input_type_error");
  formError.classList.remove("modal__error_visible");
  formError.textContent = "";
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formInput.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
});
//* Objects
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
