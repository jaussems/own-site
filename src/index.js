import _ from "lodash";
import "style.scss";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join([`Hello`, `Jannes`], ` `);

  return element;
};
console.log(`Loadded`)
const dialog = document.querySelectorAll("dialog");
const showButton = document.getElementById("dialog-show-btn");
const closeButton = document.getElementById("dialog-close-btn");

showButton.addEventListener("click", () => {
  console.log(`CLICKED on show button`)
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

document.body.appendChild(component());
