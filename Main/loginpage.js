   document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Här har vi variabler för användarnamn, lösenord och ett fel meddelande. 
    // Skapar även variablen content och hämtar den med id  

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const content = document.getElementById("content"); 

    // Här testar vi om användarnamn och lösenord är korrekt och även visar antingen ett välkomst meddelande eller ett fel meddelande.
    // Vi gömmer även bort diven content och visar en logut knapp när vi loggat in.

    if (username === "test" && password === "1234") {
        content.style.display = "none";
        

        // Här skapar vi en div med en h1 med text, vi hämtar även username "test"

            const welcomeDiv = document.createElement("div");
       
            const h1 = document.createElement("h1");
            h1.textContent = "Welcome stranger " + username + "!";
            document.body.appendChild(h1);

        
        // Här skapar vi en logga ut knapp och hämtar den med appendChild

        const logoutBtn = document.createElement("button");
        logoutBtn.textContent = "Logout"; 
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

            h1.remove();
        });

    }
    else {
        error.textContent = "Invalid username or password";
    }
});       



