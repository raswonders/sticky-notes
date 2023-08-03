import "./style.css";
import { addNote, removeNote } from "./src/components/note";
import { loadSession } from "./src/session";
import { moveNoteToFront } from "./src/utils";
import { placeNote } from "./src/utils";

window.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("note-text")) return;
  if (event.target.classList.contains("add-button")) return;

  addNote(event.pageX, event.pageY);
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-deleter")) {
    removeNote(event.target.parentElement);
    return;
  }

  if (event.target.classList.contains("note")) {
    moveNoteToFront(event.target);
    return;
  }
});

document.querySelector(".add-button").addEventListener("click", placeNote);

loadSession();
