// ==========================
// Railway Reservation System
// auth.js
// ==========================

// ---------- REGISTER ----------

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (localStorage.getItem(email)) {
            alert("User already exists!");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(user));

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}


// ---------- LOGIN ----------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem(email));

        if (!user) {

            alert("User not found!");

            return;

        }

        if (user.password !== password) {

            alert("Incorrect Password!");

            return;

        }

        localStorage.setItem("loggedInUser", email);

        alert("Login Successful!");

        window.location.href = "search.html";

    });

}