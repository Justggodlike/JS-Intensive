"use strict";

const startButton = document.querySelector('.start-button'),
  firstScreen = document.querySelector('.first-screen'),
  mainForm = document.querySelector('.main-form'),
  formCalculate = document.querySelector('.form-calculate'),
  endButton = document.querySelector('.end-button'),
  fastRange = document.querySelector('.fast-range'),
  total = document.querySelector('.total');

function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

function handlerCallBackForm(event) {
  
  if(event.target.classList.contains('want-faster')) {
    event.target.checked ? showElem(fastRange) : hideElem(fastRange);
  }

};

startButton.addEventListener('click', function() {
  showElem(mainForm);
  hideElem(firstScreen);
});

endButton.addEventListener('click', function() {

  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
      hideElem(elem);
    }
  }

  showElem(total);

});

formCalculate.addEventListener('change', handlerCallBackForm);