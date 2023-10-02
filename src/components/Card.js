export default class Card {
  constructor(
    { name, link, _id },
    handleCardClick,
    cardSelector,
    handleDeleteCard
  ) {
    this._name = name;
    this._link = link;
    this.cardId = _id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handLikeIcon();
      });

    this._cardElement
      .querySelector(".cards__delete")
      .addEventListener("click", () => {
        this._handleDeleteCard(this);
      });

    this._cardImageElement.addEventListener("click", () =>
      this._handleCardClick({ name: this._name, link: this._link })
    );
  }

  _handLikeIcon() {
    this._cardElement
      .querySelector(".cards__like-button")
      .classList.toggle("cards__like-button_active");
  }

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__content")
      .cloneNode(true);

    this._cardImageElement = this._cardElement.querySelector(".cards__image");
    this._cardElementTitle = this._cardElement.querySelector(
      ".cards__description-text"
    );
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardElementTitle.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}
