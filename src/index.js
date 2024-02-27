import _ from "lodash";
import "style.scss";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join([`Hello`, `Jannes`], ` `);

  return element;
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog-show-btn");
const closeButton = document.querySelector("dialog-close-btn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

document.body.appendChild(component());
