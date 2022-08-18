let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

let enteredName = prompt("Lütfen Adınızı Giriniz")
let myName = document.querySelector("#myName")

if(enteredName) {
    myName.innerHTML = `${enteredName}`
} else {
    alert("Lütfen Bir İsim Giriniz.")
    location.reload();
}

let clockFunction = () => {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hours}: ${minutes}: ${seconds} - ${day}`
}

setInterval(clockFunction, 1000);

