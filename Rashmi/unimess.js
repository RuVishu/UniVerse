// Toggle Dark Theme
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});




// Function to open chat by ID
// --- Open a chat thread by its ID (e.g., 'Stu8') ---
function openChat(chatId) {
  // Hide all chat threads
  const threads = document.querySelectorAll(".chat-thread");
  threads.forEach(thread => (thread.style.display = "none"));

  // Show selected chat
  const activeThread = document.getElementById(chatId);
  if (activeThread) {
    activeThread.style.display = "block";
  }

  // Update header (name + avatar) using the sidebar item with matching onclick
  const chatElement = document.querySelector(`.chat[onclick="openChat('${chatId}')"]`);
  if (chatElement) {
    const nameEl = chatElement.querySelector(".chat-name");
    const imgEl = chatElement.querySelector("img");

    if (nameEl) document.getElementById("chatUser").innerText = nameEl.innerText;
    if (imgEl) document.querySelector(".chat-header img").src = imgEl.src;
  }

  // Keep the input ready to type
  const input = document.getElementById("messageInput");
  if (input) input.focus();

  // Scroll chat container to bottom
  const container = document.getElementById("chatMessages");
  if (container) container.scrollTop = container.scrollHeight;
}

// --- Send message to the currently visible thread ---
function sendMessage() {
  const input = document.getElementById("messageInput");
  if (!input) return;

  const text = input.value.trim();
  if (text === "") return;

  // Find the visible chat thread
  const activeThread = Array.from(document.querySelectorAll(".chat-thread"))
    .find(el => el.style.display !== "none");

  if (activeThread) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", "sent");

    const msgText = document.createElement("p");
    msgText.innerText = text;

    const msgTime = document.createElement("span");
    msgTime.classList.add("time");
    msgTime.innerText = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    msgDiv.appendChild(msgText);
    msgDiv.appendChild(msgTime);
    activeThread.appendChild(msgDiv);

    // Scroll the chat container to bottom after appending
    const container = document.getElementById("chatMessages");
    if (container) container.scrollTop = container.scrollHeight;
  }

  // Clear and refocus input
  input.value = "";
  input.focus();
}

// --- Setup: send on Enter key ---
(function attachEnterHandler() {
  const init = () => {
    const input = document.getElementById("messageInput");
    if (!input) return;

    // Remove any existing handler (avoid duplicates if script reloaded)
    input.onkeydown = null;

    input.addEventListener("keydown", function (e) {
      const isEnter = e.key === "Enter" || e.keyCode === 13;
      if (isEnter) {
        e.preventDefault();
        sendMessage();
      }
    });
  };

  // If the DOM is ready (defer script), init immediately; else wait
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
