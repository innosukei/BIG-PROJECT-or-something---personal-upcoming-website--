const email = document.getElementById("email-field");
const password = document.getElementById("password-field");

const correctpassword = "password123";
const correctemail = "user@example.com";

function checkCredential() {
    if ((email.value === correctemail) && (password.value === correctpassword)) {
        alert("Login successful")
        window.location.href = "./home_screen.html";
    }
    else {
        alert("Login failed")
        email.classList.add("input_failed")
        password.classList.add("input_failed")
    }
}