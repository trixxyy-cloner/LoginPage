   document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Här har vi variabler för användarnamn, lösenord och ett fel meddelande.   

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Här hämtar vi variablen content som då har id="content"
    
    const content = document.getElementById("content");

    // Här testar vi om användarnamn och lösenord är korrekt och även visar antingen ett välkomst meddelande eller ett fel meddelande.
    // Vi gömmer även bort diven content och visar en logut knapp när vi loggat in.

    if (username === "test" && password === "1234") {
        content.style.display = "none";

        // Här skapar vi en div med en h1 med text, vi hämtar även username "test"

        const welcomeDiv = document.createElement("div");
       
        function welcomeMsg () {
            const h1 = document.createElement("<h1>Welcome strager", + username + "!</h1>")
            document.appendChild(h1);

        }
        //  welcomeDiv.innerHTML = "<h1>Welcome Stranger, " + username + "!</h1>"; // fix innerhtml, big noNO

        // Här skapar vi en logga ut knapp och hämtar den med appendChild

        const logoutBtn = document.createElement("button");
        logoutBtn.innerHTML = "Logout"; // fix inner html
        logoutBtn.id = "logoutBtn";
        welcomeDiv.appendChild(logoutBtn);

        document.body.appendChild(welcomeDiv);

        // Här skapar jag en tom error sträng som jag sedan hämtar i else statement

        error.textContent = "";

        // Här skapar jag en eventListener som lyssnar efter ett click på min logga ut knapp och då tar vi bort diven vi skapade innan och går tillbaka till login formuläret

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



