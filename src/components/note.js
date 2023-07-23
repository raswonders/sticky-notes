import "./note.css";

const note = `
<textarea class="note" placeholder="text here" value="text here"></textarea>
`;

export function addNote() {
  document.querySelector("#app").insertAdjacentHTML("beforeend", note);
}
