// Get elements from the DOM
const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("addNoteButton");
const resetButton = document.getElementById("resetButton");
const noteList = document.getElementById("noteList");

// Add note function
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const noteItem = document.createElement("li");
    noteItem.className = "noteItem";
    noteItem.textContent = noteText;
    noteList.appendChild(noteItem);
    noteInput.value = "";
  }
}

// Reset notes function
function resetNotes() {
  noteList.innerHTML = "";
}

// Event listeners
addNoteButton.addEventListener("click", addNote);
resetButton.addEventListener("click", resetNotes);