function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }

    return "";
}

let savedName = getCookie("visitorName");

if (savedName !== "") {
    document.getElementById("welcome").textContent = "Welcome back, " + savedName + "!";
    document.getElementById("message").textContent = "Glad to see you again.";
    document.getElementById("nameForm").style.display = "none";
} else {
    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;

        setCookie("visitorName", name);

        document.getElementById("welcome").textContent = "Welcome, " + name + "!";
        document.getElementById("message").textContent = "Your name has been saved.";
        document.getElementById("nameForm").style.display = "none";
    });
}
