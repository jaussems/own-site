
import "./style.scss";

const dialog = document.querySelector("dialog");
const contact = document.getElementById("contact");
const closeButton = document.getElementById("dialog-close-btn");
const navLinks = document.querySelectorAll(".page__header__list__item");
const navLinksMobile = document.querySelectorAll(".page__mobile-menu__list__item");
const nameInput = document.getElementsByClassName("name-input");
const mobileIcon = document.querySelector("div.page__mobile-menu__icon");
const mobileMenuList = document.querySelector("ul.page__mobile-menu__list");
let isShownMenu = false;
const storySection = document.querySelector("div.page__story");
const skillsSection = document.querySelector("div.page__skills");
const portfolioSection = document.querySelector("div.page__portfolio");


contact.addEventListener("click", () => {
  dialog.showModal();
  document.getElementById("dialog").scrollIntoView();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const handleNavLinkClick = (navlink) => {
  const navlinkName = navlink.attributes.getNamedItem("name").value;
  
  switch (navlinkName) {
    case "story":
      storySection.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
      break;
    case "skills":
      skillsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "portfolio":
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
  }
};

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    handleNavLinkClick(navlink);
  });
});

navLinksMobile.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    handleNavLinkClick(navlink);
  });
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

  console.log(`Chjecking ${navLinksMobile.length}`)
  if(isShownMenu) 
  {
    mobileMenuList.classList.add("page__mobile-menu__list--show");
  }
  else {
    mobileMenuList.classList.remove("page__mobile-menu__list--show");
  }
})