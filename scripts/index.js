const editFormEl = document.querySelector(".edit-form");
const editFormNameInput = document.querySelector(".edit-form__name");
const editFormTitleInput = document.querySelector(".edit-form__title");

const cardEditBtnEl = document.querySelector("#card-edit-btn");
const modalCloseBtnEl = document.querySelector(".modal__close-btn");

const modalEl = document.querySelector(".modal");

const cardNameEl = document.querySelector(".js-card-name");
const cardTitleEl = document.querySelector(".js-card-title");

function closeModal() {
  modalEl.classList.remove("modal_open");
}

cardEditBtnEl.addEventListener("click", function () {
  modalEl.classList.add("modal_open");
});

modalCloseBtnEl.addEventListener("click", function () {
  closeModal();
});

editFormNameInput.value = cardNameEl.textContent;
editFormTitleInput.value = cardTitleEl.textContent;

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  cardNameEl.textContent = editFormNameInput.value;
  cardTitleEl.textContent = editFormTitleInput.value;
  closeModal();
});
