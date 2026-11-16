// Seleção de elementos do Perfil
const editPopup = document.querySelector("#edit-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEditPopupButton = editPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(".popup__input_type_description");

// Seleção de elementos dos Cartões e Template
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

// Seleção de elementos do Pop-up "Novo Local"
const newCardPopup = document.querySelector("#new-card-popup");
const addCardButton = document.querySelector(".profile__add-button");
const closeNewCardPopupButton = newCardPopup.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = newCardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardForm.querySelector(".popup__input_type_url");

// Seleção de elementos do Pop-up "Imagem Ampliada"
const imagePopup = document.querySelector("#image-popup");
const closeImagePopupButton = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Array inicial de cartões
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Funções reutilizáveis para abrir e fechar qualquer modal
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Funções de Perfil
function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editPopup);
}

// Função para criar um elemento de cartão a partir do template
function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg"
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  // Listener de curtir cartão
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  // Listener de excluir cartão
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Listener de abrir imagem ampliada no pop-up
  cardImage.addEventListener("click", () => {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openModal(imagePopup);
  });

  return cardElement;
}

// Função para renderizar o cartão no início do container
function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

// Manipulador de envio do formulário "Novo Local"
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(cardNameInput.value, cardLinkInput.value, cardsContainer);
  newCardForm.reset();
  closeModal(newCardPopup);
}

// Event Listeners de Perfil
editProfileButton.addEventListener("click", openEditPopup);
closeEditPopupButton.addEventListener("click", () => {
  closeModal(editPopup);
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

// Event Listeners de Novo Local
addCardButton.addEventListener("click", () => {
  openModal(newCardPopup);
});
closeNewCardPopupButton.addEventListener("click", () => {
  closeModal(newCardPopup);
});
newCardForm.addEventListener("submit", handleCardFormSubmit);

// Event Listener de fechar Pop-up de Imagem
closeImagePopupButton.addEventListener("click", () => {
  closeModal(imagePopup);
});

// Renderização dos cartões iniciais
initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsContainer);
});