// Animate circular progress
const circle = document.querySelector('.bar');
const totalLength = circle.getTotalLength();

const current = 5;
const total = 17;
const percentage = (current / total) * 100;

const offset = totalLength - (percentage / 100 * totalLength);
circle.style.strokeDasharray = totalLength;
circle.style.strokeDashoffset = offset;

// Generate a new blank text file when Notes button is clicked
function createNote() {
  const content = "Start writing your notes here...\n";
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "MyNotes.txt"; // default filename
  a.click();

  URL.revokeObjectURL(url);
}


// Show/hide note editor
function toggleNotes() {
  const noteArea = document.getElementById("noteArea");
  noteArea.classList.toggle("hidden");
}

// Save note as .txt file
function saveNote() {
  const content = document.getElementById("noteInput").value;
  if (!content.trim()) {
    alert("Your note is empty!");
    return;
  }

  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `Note-${new Date().toISOString().slice(0,10)}.txt`;
  a.click();

  URL.revokeObjectURL(url);
}
