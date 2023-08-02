import "./note.css";
import { dragElement } from "../utils";
import { saveSession } from "../session";

window.addEventListener("beforeunload", saveSession);

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

export function createNote(x, y, offset = true) {
  const noteContents = `
    <div class="note-deleter"></div>
    <textarea class="note-text" placeholder="text here" value="text here"></textarea>
  `;
  if (offset) y = y - headerHeight;
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = noteContents;
  note.style.left = `${x}px`;
  note.style.top = `${y}px`;
  note.addEventListener("mousedown", dragElement(note));
  note.setAttribute("draggable", "true");
  return note;
}

export function addNote(x, y) {
  document.querySelector(".note-gallery").appendChild(createNote(x, y));
}

export function removeNote(note) {
  document.querySelector(".note-gallery").removeChild(note);
}

export function moveNoteToFront(note) {
  const notes = document.querySelectorAll(".note");
  const highestZIndex = Array.from(notes).reduce((maxZIndex, note) => {
    const zIndex = parseInt(window.getComputedStyle(note).zIndex, 10);
    return isNaN(zIndex) ? maxZIndex : Math.max(maxZIndex, zIndex);
  }, 0);

  note.style.zIndex = highestZIndex + 1;
}

export function focusNote(note) {
  note.querySelector(".note-text").focus();
}
