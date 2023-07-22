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

//Elements

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

//Functions

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function GetCardElement(CardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector("#cards-image");
  const cardDescriptionEL = cardElement.querySelector("#cards-description");
  //set the path to the image to the link field of the object
  //set the image alt text to the name field of the object
  //set the card title to the name field of the object, too
  cardDescriptionEL.textContent = CardData.name;
  //return the ready HTML element with the filled-in data
  return cardElement;
  cardList.append(cardElement);
}

//Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = modal__name.value;
  profileSubtitle.textContent = modal__subtitle.value;
  closePopup();
}

//Event listeners

profileEditButton.addEventListener("click", () => {
  modal__name.value = profileName.textContent;
  modal__subtitle.value = profileSubtitle.textContent;
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
