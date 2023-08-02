export const noteGallery = document.querySelector(".note-gallery");

export function moveToTop(element, container) {
  if (!element) {
    console.debug("moveToTop() requires element, that exists, passed", element);
    return;
  }

  if (!container) {
    console.debug(
      "moveToTop() requires container, that exists, passed",
      container,
    );
    return;
  }

  container.insertBefore(element, null);
}

export function dragElement(elmnt) {
  let cursorX, cursorY, cursorXDelta, cursorYDelta;
  elmnt.onmousedown = dragStart;

  function dragStart(e) {
    e.preventDefault();
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
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
