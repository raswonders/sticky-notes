import "./style.css";
import { addNote, removeNote } from "./src/components/note";

window.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("note-text")) return;
  
  addNote(event.pageX, event.pageY);
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("note-deleter")) {
    removeNote(event.target.parentElement);
    return;
  }
});





//class for notes = "note"
