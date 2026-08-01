// ===============================
// Railway Reservation System
// payment.js
// ===============================

// Get ticket data
const ticket = JSON.parse(localStorage.getItem("ticket"));

if (!ticket) {
    alert("No booking found!");
    window.location.href = "search.html";
}

// Calculate fare based on class
let fare = 0;

switch (ticket.travelClass) {

    case "SL":
        fare = 500;
        break;

    case "3A":
        fare = 1200;
        break;

    case "2A":
        fare = 1800;
        break;

    case "1A":
        fare = 2800;
        break;

    default:
        fare = 500;
}

// Display fare
document.getElementById("fare").innerText = fare;

// Payment Form
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const paymentMethod = document.getElementById("paymentMethod").value;
    const paymentDetails = document.getElementById("paymentDetails").value.trim();

    if (paymentMethod === "" || paymentDetails === "") {

        alert("Please enter payment details.");

        return;

    }

    const payment = {

        transactionId: "TXN" + Date.now(),

        amount: fare,

        method: paymentMethod,

        status: "Success"

    };

    localStorage.setItem("payment", JSON.stringify(payment));

    alert("Payment Successful!");

    window.location.href = "ticket.html";

});