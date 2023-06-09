//задание времени таймера
let timeInMinutes = 1;
let timeinterval;
let diff = timeInMinutes * 60 * 1000;

//разделение на: оставшееся время, секунды минуты
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

//включение таймера
function initializeClock(endtime) {
    //let clock = document.getElementsByClassName('timer-cnt_time');
    let minutesSpan = document.querySelector('.minutes');
    let secondsSpan = document.querySelector('.seconds');
   
    //обновление значения на табло
    function updateClock() {
        let t = getTimeRemaining(endtime);
        diff = diff - 1000;
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    timeinterval = setInterval(updateClock, 1000);
}

let started = false;
//кнопка рестарта

function restart() {
    clearInterval(timeinterval);
    diff = timeInMinutes * 60 * 1000;
    deadline = new Date(Date.parse(new Date()) + diff);
    initializeClock(deadline);
    started = true;
    document.getElementById('btn_txt').innerHTML = 'Stop';
    
}

//кнопка старт/стоп

function starts() {
    switch(started) {
        //первое нажатие должно запустить таймер
        case false: 
            document.getElementById('btn_txt').innerHTML = 'Stop';
            initializeClock(new Date(Date.parse(new Date()) + diff));
            started = true;
            break;
        //следующее нажатие после первого запоминает остаток времени и останавливает таймер
        case true: 
            clearInterval(timeinterval);
            document.getElementById('btn_txt').innerHTML = 'Start';
            started = false;
            break;
    }
}
