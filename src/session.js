import { createNote } from "./components/note";

export function saveSession() {
  const notes = document.querySelectorAll(".note");
  const sessionData = [];

  notes.forEach((note) => {
    const content = note.querySelector(".note-text").value;
    const position = { top: note.style.top, left: note.style.left };

    const noteData = { content, position };
    sessionData.push(noteData);
  });

  localStorage.setItem("sticky_notes_session", JSON.stringify(sessionData));
}

export function loadSession() {
  const sessionData = localStorage.getItem("sticky_notes_session");

  if (sessionData) {
    const notesData = JSON.parse(sessionData);

    // Loop through the saved data and create stickies
    notesData.forEach((noteData) => {
      const { content, position } = noteData;
      const note = createNote(
        parseInt(position.left),
        parseInt(position.top),
        false,
      );
      note.querySelector(".note-text").value = content;

      // Append the note to the container
      document.querySelector(".note-gallery").appendChild(note);
    });
  }
}
