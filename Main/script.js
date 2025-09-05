document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Example validation (you can replace this with actual backend check)
  if (username === "sonny" && password === "13371337") {
    alert("Login successful!");
    // Redirect or proceed further
    error.textContent = "";
  } else {
    error.textContent = "Invalid username or password.";
  }
});
