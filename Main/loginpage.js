document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");


    if (username === "test" && password === "1234") {
        alert("Login successful");

        error.textContent = "";
    }
    else {
        error.textContent = "Invaild username or password";
    }
})