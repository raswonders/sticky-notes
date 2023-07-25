import "./style.css";
import { addNote, removeNote } from "./src/components/note";

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-text")) return;
  if (event.target.classList.contains("note-deleter")) {
    removeNote(event.target.parentElement);
    return;
  }
  addNote();
});

//class for notes = "note"

const draggables = document.querySelectorAll('.note');
const container = document.querySelector('main');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    console.log('drag start');
  })
})
