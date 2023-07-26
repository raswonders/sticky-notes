import "./note.css";
import { moveToTop, noteGallery } from "../utils";

window.addEventListener('beforeunload', saveSessionData);

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

let counter = 1; // to be used as id for element drag
function createNote(x, y, offset=true) {
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
  console.log(elmnt);
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
    console.log("yup");
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

// Local Storage Section
export function saveSessionData() {
  const notes = document.querySelectorAll(".note");
  const sessionData = [];

  notes.forEach((note) => {
    const content = note.querySelector(".note-text").value;
    const position = { top: note.style.top, left: note.style.left };

    const noteData = { content, position };
    sessionData.push(noteData);
  });

  localStorage.setItem("sticky_notes_session", JSON.stringify(sessionData));
}

// Load localStorage Data
export function loadSessionData() {
  const sessionData = localStorage.getItem("sticky_notes_session");

  if (sessionData) {
    const notesData = JSON.parse(sessionData);

    // Loop through the saved data and create stickies
    notesData.forEach((noteData) => {
      const { content, position } = noteData;
      const note = createNote(parseInt(position.left), parseInt(position.top), false);
      note.querySelector(".note-text").value = content;

      // Append the note to the container
      document.querySelector(".note-gallery").appendChild(note);
    });
  }
}
