document.addEventListener("DOMContentLoaded", function () {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });

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


document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const dropdown = btn.parentElement;
    dropdown.classList.toggle('active');
  });
});

document.querySelectorAll('.dropdown .option').forEach(option => {
  option.addEventListener('click', (e) => {
    const dropdown = option.closest('.dropdown');
    const btn = dropdown.querySelector('.dropdown-btn');
    btn.innerHTML = option.innerHTML; // set selected option as button text
    dropdown.classList.remove('active');
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});

document.querySelectorAll('.dropdown .option').forEach(option => {
  option.addEventListener('click', () => {
    const dropdown = option.closest('.dropdown');
    const btn = dropdown.querySelector('.dropdown-btn');

    // update button text & icon
    btn.innerHTML = option.innerHTML;

    // reset previous state classes
    btn.className = 'dropdown-btn';

    // add class matching selected option
    if (option.classList.contains('attend')) btn.classList.add('attend');
    if (option.classList.contains('absent')) btn.classList.add('absent');
    if (option.classList.contains('cancel')) btn.classList.add('cancel');
    if (option.classList.contains('waiver')) btn.classList.add('waiver');

    dropdown.classList.remove('active');
  });
});
