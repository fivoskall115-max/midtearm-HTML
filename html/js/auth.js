function register() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  localStorage.setItem(user, JSON.stringify({ password: pass }));
  alert("Registration successful");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const stored = JSON.parse(localStorage.getItem(user));

  if (stored && stored.password === pass) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "booking.html";
  } else {
    alert("Invalid credentials");
  }
}
