timer();
function timer() {
    let currentTime = new Date();
    let date = currentTime.toDateString();
    let time = currentTime.toLocaleTimeString();
    document.getElementById('timeID').innerHTML = time;
    document.getElementById('dateID').innerHTML = date;
    setTimeout(timer, 1000);
}

// let hours = currentTime.getHours() % 12;

// let minuts = currentTime.getMinutes();
// let sec = currentTime.getSeconds();
// if (minuts < 10) {
//     minuts = "0" + minuts;
// }
// if (sec < 10) {
//     sec = "0" + sec;
// }
// let showTime = hours + " : " + minuts + " : " + sec + " ";
// if (hours < 11) {
//     showTime += "PM";
// }
// else {
//     showTime += "AM";
// }