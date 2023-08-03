import "./note.css";
import { dragElement } from "../utils";
import { saveSession } from "../session";
import { headerHeight } from "../utils";

window.addEventListener("beforeunload", saveSession);

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
