  'use strict';

const spnCursorOne = document.querySelector('.cursorOne');
const spnCursorTwo = document.querySelector('.cursorTwo');
const spnText = document.querySelector('.text');
const spnTextTwo = document.querySelector('.textTwo');
const txt = ['Hello Ardent Code!'];
const txtTwo = ['Take a look at my text-editor'];
const buttons = document.querySelectorAll('button');

/*letters animation*/
let activeLetterOne = -35;
let activeTextOne = 0;
let activeLetterTwo = -65;
let activeTextTwo = 0;

const addLetter = () => {

 if (activeLetterOne >= 0) {
  spnText.textContent += txt[activeTextOne][activeLetterOne];
}
 activeLetterOne++;

 if (activeLetterOne === txt[activeTextOne].length) {

  activeTextOne++;

  spnText.style.color = '#e74c3c';


  if (activeTextOne === txt.length) return;

  return setTimeout(() => {
   activeLetterOne = -5;
   addLetter();
 }, 2000)
 }

 setTimeout(addLetter, 100)
}

const addLetterTwo = () => {
 if (activeLetterTwo >= 0) {
  spnTextTwo.textContent += txtTwo[activeTextTwo][activeLetterTwo];
}
 activeLetterTwo++;

 if (activeLetterTwo === txtTwo[activeTextTwo].length) {

  activeTextTwo++;

  spnTextTwo.style.fontWeight = 'bold';

  if (activeTextTwo === txtTwo.length) return;

  return setTimeout(() => {
   activeLetterTwo = -5;
   addLetterTwo();
 }, 2000)
 }

 setTimeout(addLetterTwo, 100)
}

addLetter();

addLetterTwo();

const cursorAnimation = () => {
 spnCursorOne.classList.toggle('active');
 spnCursorTwo.classList.toggle('active');
 if(spnText.textContent === 'Hello Ardent Code!' && spnTextTwo.textContent === 'Take a look at my text-editor'){
 spnCursorOne.textContent = '';
 spnCursorTwo.textContent = '';
}
}
setInterval(cursorAnimation, 400);

//addEventListener with iteration
  textEditor.document.designMode = "On";
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
    let cmd = buttons[i].getAttribute('data-cmd');
    textEditor.document.execCommand(cmd, false, null)
    })
  }
