import { moveNoteToFront, focusNote } from "./components/note";

export function focusElement(elmnt) {
  const isNote = elmnt.classList.contains("note");
  if (isNote) elmnt.querySelector(".note-text").focus();
  else elmnt.focus();
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
    focusNote(elmnt);
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
