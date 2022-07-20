const popups = document.querySelectorAll(".popup")
const popupImage = document.querySelector(".popup_img")
const popupCards = document.querySelector(".popup_edit_card")
const formAddCards = popupCards.querySelector(".popup__form_add_card")
const titleInput = formAddCards.querySelector(".popup__text_value_title")
const linkInput = formAddCards.querySelector(".popup__text_value_link")
const popupProfile = document.querySelector(".popup_edit_profile")
const formElement = popupProfile.querySelector(".popup__form_edit_profile")
const nameInput = formElement.querySelector(".popup__text_value_name")
const descriptionInput = formElement.querySelector(".popup__text_value_descr")

const validatorSettings = {
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type-error",
  errorClass: "popup__text-error_active",
};

export {
  popups,
  popupImage,
  popupCards,
  formAddCards,
  titleInput,
  linkInput,
  formElement,
  popupProfile,
  nameInput,
  descriptionInput,
  validatorSettings,
};
