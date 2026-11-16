function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value)
        + "; expires=" + date.toUTCString() + "; path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.indexOf(cookieName) === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length));
        }
    }
    return "";
}

const savedName = getCookie("visitorName");

if (savedName !== "") {
    document.getElementById("welcome").textContent = "Welcome back, " + savedName + "!";
    document.getElementById("message").textContent = "Glad to see you again.";
    document.getElementById("nameForm").style.display = "none";
} else {
    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();

        if (name !== "") {
            setCookie("visitorName", name, 30);
            document.getElementById("welcome").textContent = "Welcome, " + name + "!";
            document.getElementById("message").textContent = "Your name has been saved.";
            document.getElementById("nameForm").style.display = "none";
        }
    });
}
