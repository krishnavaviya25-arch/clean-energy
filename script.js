function highlight(field) {
    field.style.border = "2px solid green";
}

function removeHighlight(field) {
    field.style.border = ""; // reset to default
}

// Better email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form submit handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    // Check for valid email
    if (!isValidEmail(email)) {
        alert("Enter a valid email!");
        return;
    }

    // If everything is valid
    alert("Message Sent Successfully!");
    // Optionally, submit the form here
    // this.submit(); 
});
