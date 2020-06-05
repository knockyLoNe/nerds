var link = document.querySelector('.adress .button');
var popup = document.querySelector('.modal-answer');
var close = document.querySelector('.modal-close');

var body = document.querySelector('.wrapper');


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal');
});