function clock() {
    let time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridiem = document.getElementById('mer');

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

    if (hrs <= 12) {
        meridiem.innerHTML = "AM";
    }
    else {
        meridiem.innerHTML = "PM";
    }
}
setInterval(clock, 10)