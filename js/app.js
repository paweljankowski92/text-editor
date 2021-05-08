"use strict";

const spnCursorOne = document.querySelector(".cursorOne");
const spnCursorTwo = document.querySelector(".cursorTwo");
const spnText = document.querySelector(".text");
const spnTextTwo = document.querySelector(".textTwo");
const txt = ["Hello ArdentCode!"];
const txtTwo = ["Take a look at my text-editor"];
const buttons = document.querySelectorAll("button");
const btnDownload = document.getElementById("download");
const btnOpen = document.getElementById("open");

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

    spnText.style.color = "#e74c3c";

    if (activeTextOne === txt.length) return;

    return setTimeout(() => {
      activeLetterOne = -5;
      addLetter();
    }, 2000);
  }

  setTimeout(addLetter, 100);
};

const addLetterTwo = () => {
  if (activeLetterTwo >= 0) {
    spnTextTwo.textContent += txtTwo[activeTextTwo][activeLetterTwo];
  }
  activeLetterTwo++;

  if (activeLetterTwo === txtTwo[activeTextTwo].length) {
    activeTextTwo++;

    spnTextTwo.style.fontWeight = "bold";

    if (activeTextTwo === txtTwo.length) return;

    return setTimeout(() => {
      activeLetterTwo = -5;
      addLetterTwo();
    }, 2000);
  }

  setTimeout(addLetterTwo, 100);
};

addLetter();

addLetterTwo();

const cursorAnimation = () => {
  spnCursorOne.classList.toggle("active");
  spnCursorTwo.classList.toggle("active");
  if (
    spnText.textContent === "Hello ArdentCode!" &&
    spnTextTwo.textContent === "Take a look at my text-editor"
  ) {
    spnCursorOne.textContent = "";
    spnCursorTwo.textContent = "";
  }
};
setInterval(cursorAnimation, 400);

//addEventListener with iteration
textEditor.document.designMode = "On";
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let cmd = buttons[i].getAttribute("data-cmd");
    textEditor.document.execCommand(cmd, false, null);
  });
}

function restoreTextFromJson(elemId) {
  const elem = document.getElementById(elemId);

  if (elem && document.createEvent) {
    const evt = document.createEvent("MouseEvents");
    evt.initEvent("click", true, false);
    elem.dispatchEvent(evt);
  }

  document.getElementById(elemId).addEventListener(
    "change",
    function () {
      const fr = new FileReader();
      let uploadedText;

      fr.onload = function () {
        JSON.parse(fr.result.toString(), function (key, value) {
          if (key === "body") {
            uploadedText = value;
            setBodyFromBackup(uploadedText);
          }
        });
      };
      fr.readAsText(this.files[0]);
    },
    false
  );
}

function setBodyFromBackup(uploadedText) {
  const elem = document.getElementById("text-editor");
  elem.contentWindow.document.body.innerHTML = uploadedText;
}

function downloadBackup() {
  const elem = document.getElementById("text-editor");

  const editorText = elem.contentWindow.document.body.innerHTML;

  const textObject = {};
  textObject["body"] = editorText;

  const blob = new Blob([JSON.stringify(textObject)], {
    type: "text/json;charset=utf-8",
  });

  const blobPath = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = blobPath;
  anchor.target = "_blank";
  anchor.download = "textBackup.json";

  anchor.click();
  URL.revokeObjectURL(blobPath);
}

btnDownload.addEventListener("click", downloadBackup);
