//задание времени таймера
let timeInMinutes = 0.5 ;

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
    let clock = document.getElementById('timer');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
   
    //обновление значения на табло
    function updateClock() {
        let t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();

    let timeinterval = setInterval(updateClock, 1000);

}
//задание конечного времени таймера
let deadline = new Date(Date.parse(new Date()) + (timeInMinutes * 60 * 1000));

//кнопка рестарта
function restart(){
   // deadline = new Date(Date.parse(new Date()) + (timeInMinutes * 60 * 1000));
   // initializeClock(deadline);
}

//кнопка старт/стоп
let started = false;
function starts(){
    switch(started) {
        //первое нажатие должно запустить таймер
        case false: 
            document.getElementById('starts').innerText = 'Stop';
            deadline = new Date(Date.parse(new Date()) + (timeInMinutes * 60 * 1000));
            initializeClock(deadline);
            started = true;
            break;
        //следующее нажатие после первого запоминает остаток времени и останавливает таймер
        case true: 
            document.getElementById('starts').innerText = 'Start';
            deadline = new Date(Date.parse(new Date()) + (0 * 60 * 1000));
            initializeClock(deadline);
            started = false;
            break;
    }
}
