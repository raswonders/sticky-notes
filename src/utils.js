import { addNote } from "./components/note";

export const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

const offsetX = 50;
const offsetY = 50;
const noteSize = 250;
const deleterRadius = 12.5;
const minDistance = offsetX + noteSize + deleterRadius;
const initLocation = { x: 0, y: headerHeight };
let spawnLocation = { ...initLocation };
export function placeNote() {
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
}

export function focusElement(elmnt) {
  const isNote = elmnt.classList.contains("note");
  if (isNote) elmnt.querySelector(".note-text").focus();
  else elmnt.focus();
}

export function moveNoteToFront(note) {
  const notes = document.querySelectorAll(".note");
  const highestZIndex = Array.from(notes).reduce((maxZIndex, note) => {
    const zIndex = parseInt(window.getComputedStyle(note).zIndex, 10);
    return isNaN(zIndex) ? maxZIndex : Math.max(maxZIndex, zIndex);
  }, 0);

  note.style.zIndex = highestZIndex + 1;
}

export function dragElement(elmnt) {
  let cursorX, cursorY, cursorXDelta, cursorYDelta;
  elmnt.onmousedown = dragStart;

  function dragStart(e) {
    e.preventDefault();
    moveNoteToFront(elmnt);
    cursorX = e.clientX;
    cursorY = e.clientY;
    // capture dragging movements outside of elmnt for smoothness
    document.onmouseup = dragEnd;
    document.onmousemove = moveElement;
  }

  function moveElement(e) {
    e.preventDefault();
    cursorXDelta = cursorX - e.clientX;
    cursorYDelta = cursorY - e.clientY;
    cursorX = e.clientX;
    cursorY = e.clientY;
    // update element's position
    elmnt.style.left = elmnt.offsetLeft - cursorXDelta + "px";
    elmnt.style.top = elmnt.offsetTop - cursorYDelta + "px";
  }

  function dragEnd() {
    focusElement(elmnt);
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
