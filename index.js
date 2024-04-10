const dialog = document.querySelector("dialog");
const contact = document.getElementById("contact");
const closeButton = document.getElementById("dialog-close-btn");
const nameInput = document.getElementsByClassName("name-input");
const mobileIcon = document.querySelector("div.page__mobile-menu__icon");
const mobileMenuList = document.querySelector("ul.page__mobile-menu__list");
let isShownMenu = false;


contact.addEventListener("click", () => {
  console.log(`CLICKED on show button`)
  dialog.showModal();
  document.getElementById("dialog").scrollIntoView();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const skillsElement = document.querySelector(".page__skills__list");
function handleScrollDebounce() {
  if(isInViewport(skillsElement)) {
    skillsElement.classList.add('animation--skills-list');
  } else {
    skillsElement.classList.remove('animation--skills-list');
  }
}

let debounceTimer;
window.addEventListener('scroll', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(handleScrollDebounce, 400);
}, false);

mobileIcon.addEventListener("click", () => {
  isShownMenu = !isShownMenu;
  console.log(`Chjecking ${mobileMenuList}`)
  if(isShownMenu) 
  {
    mobileMenuList.classList.add("page__mobile-menu__list--show");
  }
  else {
    isShownMenu = false;
    mobileMenuList.classList.remove("page__mobile-menu__list--show");
  }
})