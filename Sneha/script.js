const searchInput = document.querySelector(".search-box input");
const dropdown = document.getElementById("dropdown");

searchInput.addEventListener("focus", () => {
  dropdown.style.display = "block";
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!document.querySelector(".search-box").contains(e.target)) {
    dropdown.style.display = "none";
  }
});

// Remove single history item
document.querySelectorAll(".remove").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing dropdown
    e.target.closest("li").remove();
  });
});
