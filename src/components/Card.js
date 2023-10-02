export default class Card {
  constructor(
    { name, link, _id, userId, isLiked },
    handleCardClick,
    cardSelector,
    handleDeleteCard,
    handleLikeCard
  ) {
    this._name = name;
    this._link = link;
    this.cardId = _id;
    this._userId = userId;
    this._likes = isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this.handleLikeCard = handleLikeCard;
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

  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

  showLikes(data) {
    this._likes = data || [];
    this._likeCounter.textContent = this._likes.length;
    this._handleLikeButton();
  }

  _renderLikes() {
    if (this._likes) {
      this._cardElement
        .querySelector(".cards__like-button")
        .classList.add(".cards__like-button_active");
    } else {
      this._cardElement
        .querySelector(".cards__like-button")
        .classList.remove(".cards__like-button_active");
    }
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
    this._likeCounter = this._cardElement.querySelector(".cards__like-counter");
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardElementTitle.textContent = this._name;

    this._setEventListeners();
    this._renderLikes(this._likes);
    return this._cardElement;
  }
}
