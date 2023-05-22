function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}


function initializeClock(endtime) {
    let clock = document.getElementById('countdown');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
    document.getElementById('restart').disabled = true;
   
    function updateClock() {
        let t = getTimeRemaining(endtime);
   
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
            clearInterval(timeinterval);
            alert ('Время вышло!');
            document.getElementById('restart').disabled = false;
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);

}

let deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000);
initializeClock(deadline);

function restart(){
    deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000);
    initializeClock(deadline);
}
