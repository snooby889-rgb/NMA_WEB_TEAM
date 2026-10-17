/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var hamburgerButton = document.getElementById("hamburger");

hamburgerButton.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
    const isOpen = hamburgerButton.classList.toggle('is-open');
  hamburgerButton.setAttribute('aria-expanded', isOpen);
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
