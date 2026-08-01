// ==========================
// Railway Reservation System
// seat.js
// ==========================

const seatContainer = document.getElementById("seatContainer");
const confirmSeat = document.getElementById("confirmSeat");

let selectedSeat = null;

// Sample booked seats
const bookedSeats = [3, 7, 10, 15, 18, 24, 31, 35, 42, 50, 57, 66];

// Generate 72 seats
for (let i = 1; i <= 72; i++) {

    const seat = document.createElement("div");

    seat.className = "seat";

    seat.innerText = i;

    if (bookedSeats.includes(i)) {

        seat.classList.add("booked");

    } else {

        seat.addEventListener("click", function () {

            document.querySelectorAll(".seat.selected").forEach(function (s) {
                s.classList.remove("selected");
            });

            seat.classList.add("selected");

            selectedSeat = i;

        });

    }

    seatContainer.appendChild(seat);

}

// Continue button
confirmSeat.addEventListener("click", function () {

    if (selectedSeat === null) {

        alert("Please select a seat.");

        return;

    }

    localStorage.setItem("selectedSeat", selectedSeat);

    window.location.href = "booking.html";

});