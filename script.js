function openPopup(id){
document.getElementById(id).style.display = "flex";
}

function closePopup(id){
document.getElementById(id).style.display = "none";
}

/* APPOINTMENT */

document.getElementById("appointmentForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("appointName").value;

let mobile =
document.getElementById("appointMobile").value;

let service =
document.getElementById("appointService").value;

let msg =
`Appointment Request%0A%0AName: ${name}%0AMobile: ${mobile}%0AService: ${service}`;

window.open(
`https://wa.me/918260586299?text=${msg}`,
"_blank"
);

});