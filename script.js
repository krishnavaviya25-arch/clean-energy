// Highlight input field
function highlight(field) {
    field.style.border = "2px solid green";
}

// Remove highlight
function removeHighlight(field) {
    field.style.border = "1px solid black";
}

// Email validation (dynamic)
function validateEmail() {
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("error").innerText = "Invalid Email Format!";
    } else {
        document.getElementById("error").innerText = "";
    }
}

// Form Submit Handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (!name || !email || !message) {
        error.textContent = "All fields are required!";
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Enter a valid email!";
        event.preventDefault();
        return;
    }

    alert("Message Sent Successfully!");
});
