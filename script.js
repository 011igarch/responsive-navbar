const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navContainer = document.getElementsByClassName('nav-container')[0];

toggleButton.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});