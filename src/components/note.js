import "./note.css";

function createNote() {
  const noteContents = `
    <div class="note-deleter"></div>
    <textarea class="note-text" placeholder="text here" value="text here"></textarea>
  `;
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = noteContents;
  note.setAttribute('draggable', 'true');

  return note;
}

export function addNote() {
  document.querySelector(".note-gallery").appendChild(createNote());
}

export function removeNote(note) {
  document.querySelector(".note-gallery").removeChild(note);
}
