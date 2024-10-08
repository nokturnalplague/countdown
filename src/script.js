console.log("nokturnalplague");

// Set the date we're counting down to
var countDownDate = new Date("Nov 16, 2024 22:00:00").getTime();

function updateCounter() {
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysFormat = days <= 9 ? "0" + days : days;
    var hoursFormat = hours <= 9 ? "0" + hours : hours;
    var minutesFormat = minutes <= 9 ? "0" + minutes : minutes;
    var secondsFormat = seconds <= 9 ? "0" + seconds : seconds;

    // Output the result in an element with id="counter"
    document.getElementById("counter").innerHTML = daysFormat + ":" + hoursFormat + ":" + minutesFormat + ":" + secondsFormat;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "00:00:00:00";
    }
}

updateCounter();

var x = setInterval(updateCounter, 1000);
