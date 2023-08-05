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

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector("#card-list");

//* Wrappers

const profileEditForm = document.querySelector("#profile-edit-modal");
const profileEditModal = document.querySelector("#profile-edit-modal");
const ProfileAddModal = document.querySelector("#profile-add-modal");

//* Buttons and other DOM nodes
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = document.querySelector("#modal-close");
const profileName = document.querySelector("#profile-name");
const profileSubtitle = document.querySelector("#profile_subtitle");
const modalName = document.querySelector("#modal__name");
const modalSubtitle = document.querySelector("#modal__subtitle");
const ProfileAddButton = document.querySelector("#profile-add-button");
const ProfileAddClose = document.querySelector("#modal-add-close");

//* Form Data
const nameInput = document.querySelector("#modal__add-title");
const jobInput = document.querySelector("#modal__add-subtitle");
const cardTitleInput = document.querySelector(".modal__input_type_name");
const cardLinkInput = document.querySelector(".modal__input_type_subtitle");

// ! Functions

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(CardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector("#cards-image");
  const cardDescriptionEL = cardElement.querySelector("#cards-description");

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
  closePopup(profileEditModal);
}

function handleProfileAddSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, cardsWrap);
  closePopup(ProfileAddModal);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
}

// ! Event Listeners

profileCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileEditButton.addEventListener("click", () => {
  modalName.value = profileName.textContent.trim();
  modalSubtitle.value = profileSubtitle.textContent.trim();
  profileEditModal.classList.add("modal_opened");
});

initialCards.forEach((CardData) => {
  const cardElement = getCardElement(CardData);
  cardList.prepend(cardElement);
});

ProfileAddButton.addEventListener("click", () => {
  ProfileAddModal.classList.add("modal_opened");
});

ProfileAddClose.addEventListener("click", closeAddForm);

const likeButton = document.querySelectorAll("#cards-like-button");
likeButton.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("cards__like-button_active");
  });
});

profileAddModal.addEventListener("submit", handleProfileAddSubmit);