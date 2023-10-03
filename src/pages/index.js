import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import { data } from "autoprefixer";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/API.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//* Arrays

///* Wrappers

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");

//* Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const modalName = document.querySelector(".modal__name");
const modalSubtitle = document.querySelector(".modal__bio");
const profileAddButton = document.querySelector(".profile__add-button");

//* API

const api = new Api("https://around-api.en.tripleten-services.com/v1", {
  authorization: "7e84cba7-6af7-4727-bf28-6799c49e2b64",
  "Content-Type": "application/json",
});

//* Render Cards

function renderCard(cardData) {
  return new Card(
    cardData,
    handleCardClick,
    "#card-template",
    handleDelete
  ).getCard();
}

//* ==================================
//* Like card
//* ==================================

//* FormValidator.js logic

const editFormElement = profileEditModal.querySelector("#modal-edit-form");
const addFormElement = profileAddModal.querySelector("#modal-form-add");

const formValidatorOptions = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  formValidatorOptions,
  editFormElement
);
const addFormValidator = new FormValidator(
  formValidatorOptions,
  addFormElement
);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

//* userInfo.js

const userInfo = new UserInfo(
  ".profile__content-name",
  ".profile__content-subtitle"
);

//* Section.js
let cardSection;

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([data, cards]) => {
    cardSection = new Section(
      {
        items: cards,
        renderer: (cardData) => {
          cardSection.addItem(renderCard(cardData));
        },
      },
      "#card-list"
    );
    cardSection.renderItems();
  }
);

//* popupWithImage.js

const popupImage = new PopupWithImage({ popupSelector: "#image-modal" });
popupImage.setEventListeners();

function handleCardClick(cardData) {
  popupImage.open(cardData);
}

//* popupWithForm.js: Edit profile

profileEditButton.addEventListener("click", () => {
  let data = userInfo.getUserInfo();
  modalName.value = data.name;
  modalSubtitle.value = data.about;
  profileForm.open();
});

const profileForm = new PopupWithForm("#profile-edit-modal", (data) => {
  profileForm.setSubmitText(true);
  api
    .editUserInfo(data)
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about);
      profileForm.close();
    })
    .finally(() => profileForm.setSubmitText(false));
});
profileForm.setEventListeners();

//* popupWuthForm: Add Card

profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardForm.open();
});

const addCardForm = new PopupWithForm("#profile-add-modal", (inputValues) => {
  addCardForm.setSubmitText(true);
  api
    .addNewCard(inputValues)
    .then((data) => {
      cardSection.addItem(renderCard(data));
      addCardForm.close();
    })
    .finally(() => addCardForm.setSubmitText(false));
});
addCardForm.setEventListeners();

//* popupWithConfirmation

const confirmation = new PopupWithConfirmation({
  popupSelector: "#confirmation-modal",
});
confirmation.setEventListeners();

function handleDelete(card) {
  confirmation.open();
  confirmation
    .confirmDelete(() => {
      confirmation.setSubmitText(true, "Deleting...");
      api
        .deleteCard(card.cardId)
        .then(() => {
          confirmation.close();
          card.removeCard();
        })
        .catch((err) => console.log(err));
    })
    .finally(() => confirmation.setSubmitText(false));
}

// Todo: create a popup that allows the user to update their profile picture.
// Todo: Update the form UX and show "Saving" when a user submits a form.
