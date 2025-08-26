const createNoteBtn = document.getElementById("createNoteBtn");
const notesContainer = document.getElementById("notesContainer");

const notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.forEach(function (note) {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note");
  noteCard.setAttribute("data-id", note.id);
  noteCard.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <span>Created at: ${note.createdAt}</span><br/>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  notesContainer.appendChild(noteCard);
});

const removeItem = document.querySelectorAll(".delete-btn");
removeItem.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const noteElement = event.target.closest(".note");
    const noteId = noteElement.dataset.id;
    const index = notes.findIndex((note) => note.id === noteId);

    if (index !== -1) {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      noteElement.remove();
    }
  });
});

const editItem = document.querySelectorAll(".edit-btn");
editItem.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const noteElement = event.target.closest(".note");
    const noteId = noteElement.dataset.id;
    window.location.href = `note.html?edit=${noteId}`;
  });
});

createNoteBtn.addEventListener("click", function () {
  window.location.href = "note.html";
});
