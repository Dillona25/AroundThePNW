import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

//* Arrays

const initialCards = [
  {
    name: "Mt Hood",
    link: "https://images.unsplash.com/photo-1663947718266-e5cfe7e95271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Multnomah Falls",
    link: "https://images.unsplash.com/photo-1657518860188-daa43c146ed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    name: "Diablo Lake",
    link: "https://images.unsplash.com/photo-1521400259647-cec809312f3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    name: "Mt Rainier",
    link: "https://images.unsplash.com/photo-1568226292321-dd67ff8b3b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    name: "Mt St Helens",
    link: "https://images.unsplash.com/photo-1616684553557-82371dfba65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
  },
  {
    name: "Oregon Coast",
    link: "https://images.unsplash.com/photo-1602966287996-dbdb3d69d36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
];

//* Template

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__content");

///* Wrappers

const cardList = document.querySelector(".cards__list");
const profileEditForm = document.querySelector("#modal-edit-form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileAddModal = document.querySelector("#profile-add-modal");
const profileAddForm = document.querySelector("#modal-form-add");
const imageModal = document.querySelector("#image-modal");

//* Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = profileEditModal.querySelector(".modal__close");
const profileName = document.querySelector(".profile__content-name");
const profileSubtitle = document.querySelector(".profile__content-subtitle");
const modalName = document.querySelector(".modal__name");
const modalSubtitle = document.querySelector(".modal__bio");
const profileAddButton = document.querySelector(".profile__add-button");
const imageModalCaption = document.querySelector(".modal__image-caption");

//* Form Data
const cardTitleInput = document.querySelector(".modal__add");
const cardLinkInput = document.querySelector(".modal__link");
const modalImageElement = imageModal.querySelector(".modal__image");

//* Modal Functions
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".modal_opened");
    closeModal(openPopup);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = modalName.value;
  profileSubtitle.textContent = modalSubtitle.value;
  closeModal(profileEditModal);
}

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link });
  closeModal(profileAddModal);
  profileAddForm.reset();
}

function handleCardClick(cardData) {
  modalImageElement.src = cardData.link;
  modalImageElement.alt = cardData.name;
  imageModalCaption.textContent = cardData.name;
  openModal(imageModal);
}

function renderCard(cardData) {
  const card = new Card(cardData, handleCardClick, "#card-template");
  const cardElement = card.getCard();
  cardList.prepend(cardElement);
}
//*  Event Listeners

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileAddForm.addEventListener("submit", handleProfileAddSubmit);

profileEditButton.addEventListener("click", () => {
  modalName.value = profileName.textContent.trim();
  modalSubtitle.value = profileSubtitle.textContent.trim();
  openModal(profileEditModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardList);
});

profileAddButton.addEventListener("click", () => {
  openModal(profileAddModal);
});

imageModal.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(imageModal);
  }
});

profileAddModal.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(profileAddModal);
  }
});

profileEditModal.addEventListener("mousedown", (evt) => {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(profileEditModal);
  }
});

//* Card.js logic
const cardData = {
  name: "Mt Hood",
  link: "https://images.unsplash.com/photo-1663947718266-e5cfe7e95271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
};

const card = new Card(cardData, "#card-template");
const cardElement = card.getCard();
console.log(cardElement);

//* FormValidator.js logic

const editFormElement = profileEditModal.querySelector("#modal-edit-form");
const addFormElement = profileAddModal.querySelector("#modal-form-add");

const FormValidatorOptions = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  FormValidatorOptions,
  editFormElement
);
const addFormValidator = new FormValidator(
  FormValidatorOptions,
  addFormElement
);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
