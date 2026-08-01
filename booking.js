// ===============================
// Railway Reservation System
// booking.js
// ===============================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const passengerName = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const travelClass = document.getElementById("travelClass").value;

    const trainNo = localStorage.getItem("selectedTrain");
    const seat = localStorage.getItem("selectedSeat");

    if (!trainNo || !seat) {
        alert("Please select a train and seat first.");
        window.location.href = "search.html";
        return;
    }

    const coach = "S" + (Math.floor(Math.random() * 10) + 1);

    const pnr = Math.floor(
        1000000000 + Math.random() * 9000000000
    ).toString();

    const ticket = {

        pnr: pnr,
        trainNo: trainNo,
        name: passengerName,
        age: age,
        gender: gender,
        travelClass: travelClass,
        coach: coach,
        seat: seat

    };

    localStorage.setItem("ticket", JSON.stringify(ticket));

    window.location.href = "payment.html";

});