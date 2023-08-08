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
const imageModal = document.querySelector("#image-modal");

//* Buttons and other DOM nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = document.querySelector(".modal__close");
const profileName = document.querySelector(".profile__content-name");
const profileSubtitle = document.querySelector(".profile__content-subtitle");
const modalName = document.querySelector(".modal__name");
const modalSubtitle = document.querySelector(".modal__subtitle");
const ProfileAddButton = document.querySelector(".profile__add-button");
const ProfileAddClose = document.querySelector(".modal__add-close");
const imageModalClose = document.querySelector(".modal__image-close");
const imageModalCaption = document.querySelector(".modal__image-caption");

//* Form Data
const cardTitleInput = document.querySelector(".modal__input_type_name");
const cardLinkInput = document.querySelector(".modal__input_type_subtitle");
const modalImageElement = imageModal.querySelector(".modal__image");

// ! Functions

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
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

  cardImageEl.addEventListener("click", () => {
    modalImageElement.src = CardData.link;
    imageModalCaption.src = CardData.Name;
    openModal(imageModal);
  });

  return cardElement;
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
  closeModal(ProfileAddModal);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardList.prepend(cardElement);
}

// ! Event Listeners

profileCloseButton.addEventListener("click", () => {
  console.log(profileEditModal);
  closeModal(profileEditModal);
});

ProfileAddClose.addEventListener("click", () => {
  closeModal(ProfileAddModal);
});

imageModalClose.addEventListener("click", () => {
  closeModal(imageModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
ProfileAddForm.addEventListener("submit", handleProfileAddSubmit);

profileEditButton.addEventListener("click", () => {
  modalName.value = profileName.textContent.trim();
  modalSubtitle.value = profileSubtitle.textContent.trim();
  openModal(profileEditModal);
});

initialCards.forEach((cardData) => {
  renderCard(cardData, cardList);
});

ProfileAddButton.addEventListener("click", () => {
  ProfileAddModal.classList.add("modal_opened");
});

modalImageElement.addEventListener("click", () => {
  openModal(imageModal);
});
