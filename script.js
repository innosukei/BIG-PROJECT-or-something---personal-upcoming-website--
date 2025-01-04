const notification_dropdown = document.getElementById("drop_down_content")
const notification_button = document.getElementById("notification_button")

const email = document.getElementById("email-field");
const password = document.getElementById("password-field");
const birthdate = document.getElementById("birthdate");

const correctpassword = "password123";
const correctemail = "user@example.com";

const profile_button = document.getElementById("profile_button");
const sign_incard = document.getElementById("sign_incard");
const darken_body = document.getElementById("darken_body");
const x_button = document.getElementById("x_button");

function profile_please(){
    console.log("aaaaaaaaeeeeeeeeeeeeee")
}


// Categories
function showCategory(categoryId) {
    const allCategories = document.querySelectorAll('.categorial_content');
    allCategories.forEach(category => category.classList.remove('active'));
    const category = document.getElementById(categoryId)
    category.classList.add('active');

}

// Notification
notification_button.onclick = show_dropdown;
var status1 = "hidden"

function show_dropdown() {
    if (status1 === "hidden") {
        notification_dropdown.classList.remove("notification_dropdown");
        notification_dropdown.classList.add("notification_dropdown_expanded")
        status1 = "show"
    }

    else if (status1 === "show") {
        notification_dropdown.classList.remove("notification_dropdown_expanded")
        notification_dropdown.classList.add("notification_dropdown");
        status1 = "hidden"
    }
}

// Sign-In
function checkCredential() {
    if ((email.value === correctemail) && (password.value === correctpassword)) {
        alert("Login successful")
        window.location.href = "./home page.html";
    }
    else {
        alert("Login failed")
        email.classList.add("input_failed")
        password.classList.add("input_failed")
    }
}

// Profile-Signin
function show_form(){
    sign_incard.classList.toggle("hidden");
    darken_body.classList.toggle("hidden");
}

profile_button.onclick = show_form;

function hide_form(){
    sign_incard.classList.toggle("hidden");
    darken_body.classList.toggle("hidden");
}

x_button.onclick = hide_form;

// profile_button.onclick = profile_please
// notification_button.onclick = profile_please



