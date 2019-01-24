/* Here goes your JS code */


const modal = document.querySelector(".popup");
const trigger = document.getElementById("show-popup-form");
const closeButton = document.getElementById("close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



document.getElementById("myBtn").onclick = function() {
  setTimeout(myFunction(), 3000)
};

function myFunction() {
  modal.classList.toggle("show-modal");
  document.getElementById("show-popup-form").innerHTML = "Thank you!";
}
