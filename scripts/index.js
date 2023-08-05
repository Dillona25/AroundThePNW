const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago Di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

// ! Elements below

const profileEditForm = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#modal-close");
const profileName = document.querySelector("#profile-name");
const profileSubtitle = document.querySelector("#profile_subtitle");
const modalName = document.querySelector("#modal__name");
const modalSubtitle = document.querySelector("#modal__subtitle");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector("#card-list");

// ! Functions

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

// * Below is the used function to get the card Data to Display!
function getCardElement(CardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector("#cards-image");
  const cardDescriptionEL = cardElement.querySelector("#cards-description");
  cardImageEl.src = CardData.link;
  cardImageEl.alt = CardData.name;
  cardDescriptionEL.textContent = CardData.name;
  return cardElement;
}

// ! Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = modalName.value;
  profileSubtitle.textContent = modalSubtitle.value;
  closePopup();
}

// ! Event Listeners

profileEditButton.addEventListener("click", () => {
  modalName.value = profileName.textContent.trim();
  modalSubtitle.value = profileSubtitle.textContent.trim();
  profileEditModal.classList.add("modal_opened");
});

profileCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((CardData) => {
  const cardElement = getCardElement(CardData);
  cardList.prepend(cardElement);
});

//! Elements for Adding posts

const ProfileAddButton = document.querySelector("#profile-add-button");
const ProfileAddModal = document.querySelector("#profile-add-modal");
const ProfileAddClose = document.querySelector("#modal-add-close");

//!Functions for adding posts

function closePopup() {
  ProfileAddModal.classList.remove("modal__add-opened");
}

//! Event Listerners for adding posts

ProfileAddButton.addEventListener("click", () => {
  ProfileAddModal.classList.add("modal__add-opened");
});

ProfileAddClose.addEventListener("click", closePopup);

//!Event handlers for adding posts
