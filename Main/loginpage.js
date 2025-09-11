   document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Här har vi variabler för användarnamn, lösenord och ett fel meddelande.   
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // variable for content
    const content = document.getElementById("content");

    // Här testar vi om användarnamn och lösenord är korrekt och även visar antingen ett välkomst meddelande eller ett fel meddelande.
    // Vi gömmer även bort diven content och visar en logut knapp när vi loggat in.

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



