import "./note.css";
import { moveToTop, noteGallery } from "../utils";
import { saveSession } from "../session";

window.addEventListener("beforeunload", saveSession);

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

let counter = 1; // to be used as id for element drag
export function createNote(x, y, offset = true) {
  const noteContents = `
    <div class="note-deleter" id = "sticky${counter}" ></div>
    <textarea class="note-text" placeholder="text here" value="text here"></textarea>
  `;
  if (offset) y = y - headerHeight;
  counter++;
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = noteContents;
  note.style.left = `${x}px`;
  note.style.top = `${y}px`;

  // moves note to the top
  note.addEventListener("click", (event) => {
    moveToTop(event.currentTarget, noteGallery);
    event.currentTarget.querySelector(".note-text").focus();
  });
  note.addEventListener("mousedown", dragElement(note)); // element drag
  note.setAttribute("draggable", "true");
  return note;
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export function addNote(x, y) {
  document.querySelector(".note-gallery").appendChild(createNote(x, y));
}

export function removeNote(note) {
  document.querySelector(".note-gallery").removeChild(note);
}
