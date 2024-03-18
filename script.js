
const clockBody = document.getElementById('clockBody');
const suff = document.getElementById('suff');

function updateClock(){
    const date = new Date;
    var hour=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var suffix = hour >= 12 ? "PM" : "AM";

    hour=hour>12? hour-12: hour;
    hour=hour==0?0 : hour;

    
    hour = hour<10? "0"+hour :hour;
    minutes=minutes<10? "0"+minutes :minutes;
    seconds=seconds<10? "0"+seconds :seconds;

    clockBody.innerHTML=hour+":"+minutes+":"+seconds+" ";
    suff.innerHTML=suffix;
    
}

setInterval(updateClock,1000);