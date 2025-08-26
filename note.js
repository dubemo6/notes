const storedNotes = localStorage.getItem("notes");
let notes = storedNotes ? JSON.parse(storedNotes) : [];

const title = document.getElementById("title");
const content = document.getElementById("content");
const saveBtn = document.getElementById("saveBtn");
const backToSavedBtn = document.getElementById("backToSavedBtn");

const params = new URLSearchParams(window.location.search);
const editId = params.get("edit");

// If edit mode, prefill the form
if (editId) {
  const noteToEdit = notes.find((note) => note.id === editId);
  if (noteToEdit) {
    title.value = noteToEdit.title;
    content.value = noteToEdit.content;
  }
}

function saveNote(event) {
  event.preventDefault();

  if (editId) {
    const index = notes.findIndex((note) => note.id === editId);
    if (index !== -1) {
      notes[index].title = title.value;
      notes[index].content = content.value;
      notes[index].createdAt = new Date().toLocaleString();
      alert("Note updated!");
    }
  } else {
    notes.unshift({
      id: generateId(),
      title: title.value,
      content: content.value,
      createdAt: new Date().toLocaleString(),
    });
    alert("Note saved!");
  }

  saveNotes();
  window.location.href = "saved.html";
}
document.getElementById("noteform").addEventListener("submit", saveNote);

document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "s") {
    event.preventDefault();
    saveNote(event);
  }
});

function generateId() {
  return Date.now().toString();
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

backToSavedBtn.addEventListener("click", function () {
  window.location.href = "saved.html";
});
