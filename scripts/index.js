const editPopup = document.querySelector("#edit-popup");
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEditPopupButton = editPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(".popup__input_type_description");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved-lago-di-braies.jpg"
  }
];

function openEditPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  editPopup.classList.add("popup_is-opened");
}

function closeEditPopup() {
  editPopup.classList.remove("popup_is-opened");
}

editProfileButton.addEventListener("click", openEditPopup);
closeEditPopupButton.addEventListener("click", closeEditPopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeEditPopup();
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach(function (card) {
  console.log(card.name);
});