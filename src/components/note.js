import "./note.css";

function createNote() {
  const noteContents = `
    <div class="note-deleter"></div>
    <textarea class="note-text" placeholder="text here" value="text here"></textarea>
  `;
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = noteContents;
  note.attr
  note.setAttribute('draggable', 'true');

  return note;
}

export function addNote() {
  document.querySelector("#app").appendChild(createNote());
}

export function removeNote(note) {
  document.querySelector("#app").removeChild(note);
}
