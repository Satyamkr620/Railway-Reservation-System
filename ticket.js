// ===============================
// Railway Reservation System
// ticket.js
// ===============================

// Get Ticket
const ticket = JSON.parse(localStorage.getItem("ticket"));

// Get Payment
const payment = JSON.parse(localStorage.getItem("payment"));

// Check Ticket
if (!ticket) {

    alert("No Ticket Found!");

    window.location.href = "search.html";

}

// Display Ticket Details
document.getElementById("pnr").innerText = ticket.pnr;
document.getElementById("trainNo").innerText = ticket.trainNo;
document.getElementById("name").innerText = ticket.name;
document.getElementById("age").innerText = ticket.age;
document.getElementById("gender").innerText = ticket.gender;
document.getElementById("travelClass").innerText = ticket.travelClass;
document.getElementById("coach").innerText = ticket.coach;
document.getElementById("seat").innerText = ticket.seat;

// Display Payment Details
if (payment) {

    document.getElementById("status").innerText = payment.status;
    document.getElementById("txn").innerText = payment.transactionId;

}

// Save Booking History
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Prevent duplicate booking
const alreadyBooked = bookings.some(function (b) {

    return b.pnr === ticket.pnr;

});

if (!alreadyBooked) {

    bookings.push({

        pnr: ticket.pnr,
        trainNo: ticket.trainNo,
        name: ticket.name,
        age: ticket.age,
        gender: ticket.gender,
        travelClass: ticket.travelClass,
        coach: ticket.coach,
        seat: ticket.seat,
        transactionId: payment ? payment.transactionId : "",
        paymentStatus: payment ? payment.status : "Pending"

    });

    localStorage.setItem("bookings", JSON.stringify(bookings));

}