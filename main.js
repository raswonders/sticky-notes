import "./style.css";
import { addNote, removeNote } from "./src/components/note";
import { loadSession } from "./src/session";
import { moveNoteToFront } from "./src/utils";

window.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("note-text")) return;

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

document.querySelector("#add-button").addEventListener("click", (event) => {
  addNote(event.pageX / 2.25, event.pageY / 2.25);
});

loadSession();
