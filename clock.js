function clock() {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let meridiem = "";

    if (hrs <= 12) {
        meridiem= "AM";
    }
    else {
        meridiem="PM";
    }
    document.getElementById('time').innerHTML = `${hrs} : ${min} : ${sec} : ${meridiem}`;
}
setInterval(clock, 10)