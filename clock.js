function clock() {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let dateNum = date.getDate();
    let year = date.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //choosing day from the above list
    let weekDay = days[day];
    

    //12hr clock format
    let noonHrs= hrs-12;


    //AM / PM
    let meridiem = "";
    if (hrs <= 12) {
        meridiem= "AM";     
    }
    else {
        meridiem="PM";
        hrs=noonHrs;
    }

    //2-digit format
    hrs<10? hrs='0'+hrs: hrs;
    min<10? min='0'+min: min;
    sec<10? sec='0'+sec: sec;

    document.getElementById('time').innerHTML = `${hrs}: ${min}: ${sec} ${meridiem}`;
    document.getElementById('date').innerHTML= `${dateNum} ${weekDay}, ${year}`;

}
setInterval(clock, 10)