const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

var dateElements = document.getElementsByClassName("date");

var currentYear = new Date().getFullYear();

for (var i = 0; i < dateElements.length; i++) {
  var dateString = "Copyright © " + currentYear + ", All Rights Reserved";
  dateElements[i].innerHTML = dateString;
}
