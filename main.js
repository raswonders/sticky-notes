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

const offsetX = 50;
const offsetY = 50;
const noteSize = 250;
const deleterRadius = 12.5;
const minDistance = offsetX + noteSize + deleterRadius;
const initLocation = { x: 0, y: headerHeight };
let spawnLocation = { ...initLocation };
document.querySelector(".add-button").addEventListener("click", () => {
  let vw = document.body.clientWidth;
  let vh = document.body.clientHeight;

  let isCrossingXBorder = spawnLocation.x + minDistance >= vw;
  let isCrossingYBorder = spawnLocation.y + minDistance >= vh;

  if (isCrossingXBorder || isCrossingYBorder) {
    spawnLocation = { ...initLocation };
  }

  spawnLocation.x += offsetX;
  spawnLocation.y += offsetY;

  addNote(spawnLocation.x, spawnLocation.y);
});

loadSession();
