setInterval (()=>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds'); // Corrected from "second"
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds(); // Corrected
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12){
        h = h - 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s; // Updated to display seconds
    ampm.innerHTML = am;
}, 1000);
