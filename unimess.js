// Toggle Dark Theme
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// // Open Chat
// function openChat(name) {
//   document.getElementById("chatUser").innerText = name;
//   document.getElementById("chatMessages").innerHTML =
//     `<p style="padding:10px; color:gray;">Chat with ${name} started...</p>`;
// }

// // Send Message
// function sendMessage() {
//   const input = document.getElementById("messageInput");
//   const messageText = input.value.trim();
//   if (messageText === "") return;

//   const chatMessages = document.getElementById("chatMessages");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");
//   messageDiv.style.padding = "8px";
//   messageDiv.style.margin = "5px 0";
//   messageDiv.style.background = "#d1f7d6";
//   messageDiv.style.borderRadius = "5px";
//   messageDiv.innerText = messageText;

//   chatMessages.appendChild(messageDiv);
//   input.value = "";
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// Open chat and update header
// Select elements
// const themeToggle = document.getElementById("themeToggle");

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});




function openChat(name) {
  const chat = [...document.querySelectorAll(".chat")].find(
    c => c.querySelector(".chat-name").textContent === name
  );

  if (chat) {
    const userName = chat.querySelector(".chat-name").textContent;
    const userImg = chat.querySelector("img").src;

    // Update header name & profile picture
    document.getElementById("chatUser").textContent = userName;
    document.querySelector("#chatHeader img").src = userImg;

    // Clear previous messages
    document.getElementById("chatMessages").innerHTML = `
      <p><strong>${userName}:</strong> Chat started...</p>
    `;
  }
}

// Send message
function sendMessage() {
  const input = document.getElementById("messageInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatMessages = document.getElementById("chatMessages");
  const newMsg = document.createElement("p");
  newMsg.innerHTML = `<strong>You:</strong> ${msg}`;
  chatMessages.appendChild(newMsg);

  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Theme toggle (just as placeholder)
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
