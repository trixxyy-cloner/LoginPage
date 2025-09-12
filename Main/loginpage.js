    const content = document.getElementById("content");
    const error = document.getElementById("error");

    // Kolla om användaren är inloggad i localStorage
    if (localStorage.getItem("username")) {
        Welcome(localStorage.getItem("username"));
        content.style.display = "none";
    }

    // Hämtar vårat loginForm och lägger till en eventListener.
    // Skapar även variabler för username och password.

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Här kollar vi om username och password är rätt och loggar in användaren
        // Sparar även inloggningsstatusen i localStorage

        if (username === "test" && password === "1234") {
            localStorage.setItem("username", username);

            content.style.display = "none";
            Welcome(username);
            error.textContent = "";
        } else {
            error.textContent = "Invalid username or password";
        }
    });

    // Här har vi en funktion som är en vällkomst div som skapas när användaren loggar in
    // Innehåller även en logout knapp som tar bort vällkomst div:en och visar loginForm igen

    function Welcome(username) {
        const welcomeDiv = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.textContent = "Welcome stranger " + username + "!";
        document.body.appendChild(h1);

        const logoutBtn = document.createElement("button");
        logoutBtn.textContent = "Logout";
        logoutBtn.id = "logoutBtn";
        welcomeDiv.appendChild(logoutBtn);

        document.body.appendChild(welcomeDiv);

        logoutBtn.addEventListener("click", function () {
            welcomeDiv.remove();
            h1.remove();
            content.style.display = "block";
            document.getElementById("loginForm").reset();
            localStorage.removeItem("username");
        });
    }