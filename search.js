// ==========================
// Railway Reservation System
// search.js
// ==========================

// Sample Train Data

const trains = [

{
    number: "12951",
    name: "Mumbai Rajdhani",
    from: "Mumbai",
    to: "Delhi",
    departure: "16:35",
    arrival: "08:15"
},

{
    number: "12309",
    name: "Patna Rajdhani",
    from: "Patna",
    to: "Delhi",
    departure: "19:10",
    arrival: "07:40"
},

{
    number: "19483",
    name: "Ahmedabad Express",
    from: "Ahmedabad",
    to: "Patna",
    departure: "21:50",
    arrival: "07:15"
},

{
    number: "22961",
    name: "Tejas Express",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "06:40",
    arrival: "13:00"
},

{
    number: "12391",
    name: "Shramjeevi Express",
    from: "Rajgir",
    to: "New Delhi",
    departure: "08:10",
    arrival: "04:30"
},

{
    number: "12002",
    name: "Shatabdi Express",
    from: "New Delhi",
    to: "Bhopal",
    departure: "06:00",
    arrival: "14:30"
},

{
    number: "12627",
    name: "Karnataka Express",
    from: "Bengaluru",
    to: "New Delhi",
    departure: "19:20",
    arrival: "11:30"
},

{
    number: "12615",
    name: "Grand Trunk Express",
    from: "Chennai",
    to: "New Delhi",
    departure: "18:40",
    arrival: "06:55"
},

{
    number: "12839",
    name: "Howrah Mail",
    from: "Howrah",
    to: "Chennai",
    departure: "23:55",
    arrival: "03:30"
},

{
    number: "12424",
    name: "Dibrugarh Rajdhani",
    from: "Dibrugarh",
    to: "New Delhi",
    departure: "19:25",
    arrival: "13:20"
}

];

// Search Function

function searchTrain() {

    const from = document.getElementById("from").value.trim().toLowerCase();
    const to = document.getElementById("to").value.trim().toLowerCase();

    const tbody = document.querySelector("#trainTable tbody");

    tbody.innerHTML = "";

    if (from === "" || to === "") {
        alert("Please enter both From and To stations.");
        return;
    }

    const filtered = trains.filter(train =>
        train.from.toLowerCase() === from &&
        train.to.toLowerCase() === to
    );

    if (filtered.length === 0) {

        tbody.innerHTML = `
        <tr>
            <td colspan="7">No Train Found</td>
        </tr>
        `;

        return;
    }

    filtered.forEach(train => {

        tbody.innerHTML += `
        <tr>
            <td>${train.number}</td>
            <td>${train.name}</td>
            <td>${train.from}</td>
            <td>${train.to}</td>
            <td>${train.departure}</td>
            <td>${train.arrival}</td>
            <td>
                <button onclick="bookTrain('${train.number}')">
                    Book Now
                </button>
            </td>
        </tr>
        `;

    });

}

// Book Train

function bookTrain(trainNo){

    localStorage.setItem("selectedTrain", trainNo);

    window.location.href = "seat.html";

}