   document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // variables for username, password and error message    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // variable for content
    const content = document.getElementById("content");

    // Check if username and password are correct and display welcome message or error message 
    // Also hide content and show logout button on successful login

    if (username === "test" && password === "1234") {
        content.style.display = "none";

        const welcomeDiv = document.createElement("div");
        welcomeDiv.innerHTML = "<h1>Welcome Stranger, " + username + "!</h1>";

        const logoutBtn = document.createElement("button");
        logoutBtn.innerHTML = "Logout";
        logoutBtn.id = "logoutBtn";
        welcomeDiv.appendChild(logoutBtn);

        document.body.appendChild(welcomeDiv);

        error.textContent = "";

        logoutBtn.addEventListener("click", function () {
            welcomeDiv.remove();
            content.style.display = "block";
            document.getElementById("loginForm").reset();
        });

    }
    else {
        error.textContent = "Invalid username or password";
    }
});       



