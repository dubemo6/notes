const takeNoteBtn = document.getElementById("takeNoteBtn");
const savedNotesBtn = document.getElementById("savedNotesBtn");

const storedNotes = localStorage.getItem("notes");
const notes = storedNotes ? JSON.parse(storedNotes) : [];

if (notes.length === 0) {
  savedNotesBtn.style.display = "none";
}

function saved() {
  window.location.href = "saved.html";
}

function taking() {
  window.location.href = "note.html";
}

takeNoteBtn.addEventListener("click", taking);
savedNotesBtn.addEventListener("click", saved);
