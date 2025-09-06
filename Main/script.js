document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  
  if (username === "sonny" && password === "13371337") {
    alert("Login successful!");
    
    error.textContent = "";
  } else {
    error.textContent = "Invalid username or password.";
  }
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}