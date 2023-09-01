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
