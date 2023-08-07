//* Arrays

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

//* Templates

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__content");

//* Wrappers

const cardList = document.querySelector(".cards__list");
const profileEditForm = document.querySelector("#modal-edit-form");
const profileEditModal = document.querySelector("#profile-edit-modal");
const ProfileAddModal = document.querySelector("#profile-add-modal");
const ProfileAddForm = document.querySelector("#modal-form-add");

//* Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".modal__close");
const profileName = document.querySelector(".profile__content-name");
const profileSubtitle = document.querySelector(".profile__content-subtitle");
const modalName = document.querySelector(".modal__name");
const modalSubtitle = document.querySelector(".modal__subtitle");
const ProfileAddButton = document.querySelector(".profile__add-button");
const ProfileAddClose = document.querySelector(".modal__close");

//* Form Data
const cardTitleInput = document.querySelector(".modal__input_type_name");
const cardLinkInput = document.querySelector(".modal__input_type_subtitle");

// ! Functions

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(CardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardDescriptionEL = cardElement.querySelector(
    ".cards__description-text"
  );
  const postDeleteButton = cardElement.querySelector(".cards__delete");
  const likeButton = cardElement.querySelector(".cards__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("cards__like-button_active");
  });

  postDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.src = CardData.link;
  cardImageEl.alt = CardData.name;
  cardDescriptionEL.textContent = CardData.name;

  return cardElement;
}

function closeAddForm() {
  ProfileAddModal.classList.remove("modal_opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = modalName.value;
  profileSubtitle.textContent = modalSubtitle.value;
  closePopup();
}

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link });
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
}

// ! Event Listeners

profileCloseButton.addEventListener("click", closePopup);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
ProfileAddForm.addEventListener("submit", handleProfileAddSubmit);

profileEditButton.addEventListener("click", () => {
  modalName.value = profileName.textContent.trim();
  modalSubtitle.value = profileSubtitle.textContent.trim();
  profileEditModal.classList.add("modal_opened");
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardList);
});

ProfileAddButton.addEventListener("click", () => {
  ProfileAddModal.classList.add("modal_opened");
});

ProfileAddClose.addEventListener("click", closeAddForm);
