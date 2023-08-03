import "./style.css";
import { addNote, removeNote } from "./src/components/note";
import { loadSession } from "./src/session";
import { moveNoteToFront } from "./src/utils";
import { headerHeight } from "./src/utils";

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

// offsets for notes added by button
const offsetX = 50;
const offsetY = 50;
let prevSpawnLocation = { x: 0, y: headerHeight };
document.querySelector(".add-button").addEventListener("click", () => {
  let spawnLocation = {};
  spawnLocation.x = prevSpawnLocation.x + offsetX;
  spawnLocation.y = prevSpawnLocation.y + offsetY;
  addNote(spawnLocation.x, spawnLocation.y);
  prevSpawnLocation = spawnLocation;
});

loadSession();
