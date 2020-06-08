var link = document.querySelector(".adress .button");
var popup = document.querySelector(".modal-answer");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal");
  console.log("open close");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal");
});