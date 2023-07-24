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
const ModalCloseButton = document.querySelector("#modal-close");
const profileName = document.querySelector("#profile-name");
const profileSubtitle = document.querySelector("#profile_subtitle");
const modal_name = document.querySelector("#modal__name");
const modal__subtitle = document.querySelector("#modal__subtitle");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardList = document.querySelector("#card-list");

// ! Functions

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

// * Below is the used function to get the card Data to Display!
function GetCardElement(CardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector("#cards-image");
  const cardDescriptionEL = cardElement.querySelector("#cards-description");
  cardElement.querySelector("#cards-image").src = CardData.link;
  cardElement.querySelector("#cards-image").alt = CardData.name;
  cardElement.querySelector("#cards-description").textContent = CardData.name;
  cardDescriptionEL.textContent = CardData.name;
  return cardElement;
  cardList.append(cardElement);
}

// ! Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = modal__name.value;
  profileSubtitle.textContent = modal__subtitle.value;
  closePopup();
}

// ! Event Listeners

profileEditButton.addEventListener("click", () => {
  modal__name.value = profileName.textContent.trim();
  modal__subtitle.value = profileSubtitle.textContent.trim();
  profileEditModal.classList.add("modal_opened");
});

ModalCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((CardData) => {
  const cardElement = GetCardElement(CardData);
  cardList.prepend(cardElement);
});
