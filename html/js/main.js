// main.js

document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
});

/* =========================
   LOGIN STATUS & NAVIGATION
   ========================= */

function checkLoginStatus() {
  const user = localStorage.getItem("loggedInUser");
  const nav = document.querySelector("nav");

  if (!nav) return;

  if (user) {
    nav.innerHTML += `
      <span style="color:white; margin-left:15px;">
        Welcome, ${user}
      </span>
      <a href="#" onclick="logout()">Logout</a>
    `;
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out.");
  window.location.href = "index.html";
}

/* =========================
   PROTECT PAGES
   ========================= */

function requireLogin() {
  if (!localStorage.getItem("loggedInUser")) {
    alert("Please login to access this page.");
    window.location.href = "login.html";
  }
}

/* =========================
   DYNAMIC CONTENT (EXAMPLE)
   ========================= */

// Example: dynamically load featured exhibits
function loadFeaturedExhibits() {
  const exhibits = [
    "Ancient Civilizations",
    "Renaissance Art",
    "Modern Technology"
  ];

  const container = document.querySelector(".cards");
  if (!container) return;

  container.innerHTML = "";
  exhibits.forEach(exhibit => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = exhibit;
    container.appendChild(div);
  });
}

/* =========================
   FORM VALIDATION (GENERIC)
   ========================= */

function validateForm(fields) {
  for (let field of fields) {
    if (!field.value.trim()) {
      alert("Please fill in all required fields.");
      return false;
    }
  }
  return true;
}

/* =========================
   UTILITIES
   ========================= */

function isLoggedIn() {
  return !!localStorage.getItem("loggedInUser");
}
