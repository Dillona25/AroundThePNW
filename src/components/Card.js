export default class Card {
  constructor(
    { name, link, _id, isLiked },
    handleCardClick,
    cardSelector,
    handleDeleteCard,
    handleLikeCard
  ) {
    this._name = name;
    this._link = link;
    this.cardId = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handleLikeCard(this);
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

  setLikeStatus(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("cards__like-button_active");
    } else {
      this._likeButton.classList.remove("cards__like-button_active");
    }
  }

  getId() {
    return this._id;
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
    this._likeButton = this._cardElement.querySelector(".cards__like-button");
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardElementTitle.textContent = this._name;

    this._setEventListeners();
    this._renderLikes();
    return this._cardElement;
  }
}
