

console.log(`Loadded`)
const dialog = document.querySelector("dialog");
const contact = document.getElementById("contact");
const closeButton = document.getElementById("dialog-close-btn");
const nameInput = document.getElementsByClassName("name-input");


contact.addEventListener("click", () => {
  console.log(`CLICKED on show button`)
  dialog.showModal();
  document.getElementById("dialog").scrollIntoView();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

