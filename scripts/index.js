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

//Elements Below

const profileEditForm = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button"); //Recommended giving it an ID as that will never chnage!
const profileEditModal = document.querySelector("#profile-edit-modal");
const ModalCloseButton = document.querySelector("#modal-close");
const profileName = document.querySelector("#profile-name");
const profileSubtitle = document.querySelector("#profile_subtitle");
const modal_name = document.querySelector("#modal__name");
const modal__subtitle = document.querySelector("#modal__subtitle");

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
  modal__name.value = profileName.textContent;
  modal__subtitle.value = profileSubtitle.textContent;
  profileEditModal.classList.add("modal_opened"); // () => is the second argument and is a function.
});

//Examples of opening and closing a modal

ModalCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = modal__name.value;
  profileSubtitle.textContent = modal__subtitle.value;
  closePopup();
});
