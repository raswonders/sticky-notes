import "./note.css";

const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

function createNote(x, y) {
  const noteContents = `
    <div class="note-deleter"></div>
    <textarea class="note-text" placeholder="text here" value="text here"></textarea>
  `;
  y = y - headerHeight;
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = noteContents;
  note.style.left = `${x}px`;
  note.style.top = `${y}px`;
  note.setAttribute("draggable", "true");

  return note;
}

export function addNote(x, y) {
  document.querySelector(".note-gallery").appendChild(createNote(x, y));
}

export function removeNote(note) {
  document.querySelector(".note-gallery").removeChild(note);
}
