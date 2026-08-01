let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const ticket = JSON.parse(localStorage.getItem("ticket"));

if(ticket){

bookings.push(ticket);

localStorage.setItem("bookings", JSON.stringify(bookings));

localStorage.removeItem("ticket");

}

const tbody = document.querySelector("tbody");

displayBookings();

function displayBookings(){

tbody.innerHTML="";

bookings.forEach((booking,index)=>{

tbody.innerHTML += `

<tr>

<td>${booking.pnr}</td>

<td>${booking.name}</td>

<td>${booking.trainNo}</td>

<td>${booking.coach}</td>

<td>${booking.seat}</td>

<td>

<button onclick="cancelBooking(${index})">

Cancel

</button>

</td>

</tr>

`;

});

}

function cancelBooking(index){

bookings.splice(index,1);

localStorage.setItem("bookings",JSON.stringify(bookings));

displayBookings();

alert("Booking Cancelled Successfully");

}