if (!localStorage.getItem("loggedInUser")) {
  alert("Please login first");
  window.location.href = "login.html";
}

function book() {
  const date = document.getElementById("date").value;
  alert("Visit booked for " + date);
}
