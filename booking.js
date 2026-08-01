// ===============================
// Railway Reservation System
// bookings.js
// ===============================

// Get bookings from localStorage
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const tbody = document.querySelector("#bookingTable tbody");

// Display all bookings
function displayBookings() {

    tbody.innerHTML = "";

    if (bookings.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="8">No Bookings Found</td>
            </tr>
        `;

        return;
    }

    bookings.forEach(function (booking, index) {

        tbody.innerHTML += `

        <tr>

            <td>${booking.pnr}</td>

            <td>${booking.trainNo}</td>

            <td>${booking.name}</td>

            <td>${booking.travelClass}</td>

            <td>${booking.coach}</td>

            <td>${booking.seat}</td>

            <td>${booking.paymentStatus}</td>

            <td>

                <button onclick="cancelBooking(${index})">

                    Cancel

                </button>

            </td>

        </tr>

        `;

    });

}

// Cancel booking
function cancelBooking(index) {

    if (confirm("Are you sure you want to cancel this ticket?")) {

        bookings.splice(index, 1);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        displayBookings();

        alert("Ticket Cancelled Successfully!");

    }

}

// Logout
function logout() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}

// Load bookings on page load
displayBookings();