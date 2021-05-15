const editFormEl = document.forms.edit;
// const editFormEl = document.querySelector("#edit-form");
const editFormNameinputEl = document.querySelector("#edit-name-input");
const editFormTitleinputEl = document.querySelector("#edit-title-input");

const cardNameEl = document.querySelector(".card__name");
const cardTitleEl = document.querySelector(".card__title");

editFormNameinputEl.value = cardNameEl.textContent;
editFormTitleinputEl.value = cardTitleEl.textContent;

editFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target.name.value);
  console.log(e.target.title.value);
});

editFormNameinputEl.addEventListener("input", function (e) {
  cardNameEl.textContent = e.target.value;
});
