const toggle = document.querySelector("#navBarToggle");
const menuIcon = document.querySelector("#menu");
const text = document.querySelector("#text");

menuIcon.addEventListener("click", () => {
  if (toggle.classList.contains("navBarToggle")) {
    toggle.classList.remove("navBarToggle");
    text.classList.add("displayNone");
  } else {
    toggle.classList.add("navBarToggle");
    text.classList.remove("displayNone");
  }
});
