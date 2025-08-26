"use strict";
const takingNotes = document.getElementById("takeNoteBtn");
const savedNotes = document.getElementById("savedNotesBtn");
function saved() {
  window.location.href = "saved.html";
}
function taking() {
  window.location.href = "note.html";
}
takeNoteBtn.addEventListener("click", taking);
savedNotes.addEventListener("click", saved);
