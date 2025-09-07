document.addEventListener('DOMContentLoaded', function() {
        if (window.lucide) {
          window.lucide.createIcons();
        }
      });

document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Image picker
    document.getElementById("imageBtn").addEventListener("click", () => {
      document.getElementById("imageInput").click();
    });

    // Video picker
    document.getElementById("videoBtn").addEventListener("click", () => {
      document.getElementById("videoInput").click();
    });

    // Emoji picker toggle
    const emojiBtn = document.getElementById("emojiBtn");
    const emojiPicker = document.getElementById("emojiPicker");
    const textarea = document.querySelector("textarea");

    emojiBtn.addEventListener("click", (e) => {
      const rect = emojiBtn.getBoundingClientRect();
      emojiPicker.style.left = rect.left + "px";
      emojiPicker.style.top = rect.bottom + "px";
      emojiPicker.style.display = emojiPicker.style.display === "none" ? "block" : "none";
    });

    // Insert emoji into textarea
    emojiPicker.addEventListener("click", (e) => {
      if (e.target.textContent) {
        textarea.value += e.target.textContent;
        emojiPicker.style.display = "none";
      }
    });

    // Map button (for now just alert, can be expanded with Google Maps API)
    document.getElementById("mapBtn").addEventListener("click", () => {
      alert("Open location picker here");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const textarea = document.querySelector("textarea");

  textarea.addEventListener("input", function () {
    this.style.height = "auto"; // reset height
    this.style.height = this.scrollHeight + "px"; // set to scrollHeight
  });
});


document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Close button → go back
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    window.history.back(); // takes user to previous page
  });
});


document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const replyBtn = document.getElementById("replyBtn");
  const replyMenu = document.getElementById("replyMenu");

  // Toggle menu
  replyBtn.addEventListener("click", () => {
    replyMenu.classList.toggle("hidden");
  });

  // Handle selection
  replyMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const value = e.target.dataset.value;
      replyBtn.textContent = e.target.textContent; // update button text
      replyMenu.classList.add("hidden"); // close menu

      console.log("Selected:", value);
    }
  });

  // Close menu if clicked outside
  document.addEventListener("click", (e) => {
    if (!replyBtn.contains(e.target) && !replyMenu.contains(e.target)) {
      replyMenu.classList.add("hidden");
    }
  });
});

