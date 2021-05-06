  'use strict';

const spnCursorOne = document.querySelector('.cursorOne');
const spnCursorTwo = document.querySelector('.cursorTwo');
const spnText = document.querySelector('.text');
const spnTextTwo = document.querySelector('.textTwo');
const txt = ['Hello Ardent Code!'];
const txtTwo = ['Take a look at my text-editor'];
const btnBold = document.querySelector('.btnbold');
const btnItalic = document.querySelector('.btnitalic');
const btnDott = document.querySelector('.btndott');
const btnToJson = document.querySelector('.btntojson');
const btnToText = document.querySelector('.btntotext');
const btnSave = document.querySelector('.btnsave');
const btnOpen = document.querySelector('.btnopen');
const editor = document.querySelector('.edit');
console.log(editor);

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

//addEventListeners
let actives = {
  text: '',
  bold: false,
  italic: false,
  dott: false,
  texttojson: false,
  jsontotext: false,
  save: false,
  open: false
}


btnBold.addEventListener('click', () => {
  // console.log('działa bold');
  if(actives.bold === false){
  editor.innerHTML = editor.textContent.bold();
  actives.bold = true;
  console.log(actives);

} else if(actives.bold === true){
  editor.innerHTML = editor.textContent;
  actives.bold = false;
  console.log(actives);

}
});

btnItalic.addEventListener('click', () => {
  // console.log('działa ital');
  if(actives.italic === false) {
  editor.innerHTML = editor.textContent.italics();
  actives.italic = true;
  console.log(actives);

} else if(actives.italic === true) {
  editor.innerHTML = editor.textContent;
  actives.italic = false;
  console.log(actives);

  // console.log(activeButtonBold, activeButtonItalic);
}
})

btnDott.addEventListener('click', () => {
  console.log('działa dott');
})

btnToText.addEventListener('click', () => {
  console.log('działa text');
})

btnToJson.addEventListener('click', () => {
  console.log('działa json');
})

btnSave.addEventListener('click', () => {
  console.log('działa save');
})

btnOpen.addEventListener('click', () => {
  console.log('działa open');
})

console.log(actives);
