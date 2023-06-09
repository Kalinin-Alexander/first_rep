//задание времени таймера
let setDuration = 0.5 * 60 * 1000;

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
let deadline = new Date(Date.parse(new Date()) + setDuration);

//кнопка рестарта
function restart(){
    deadline = new Date(Date.parse(new Date()) + setDuration);
    initializeClock(deadline);
}

//остаток времени на таймере при нажатии кнопки стоп
let remains;

// блок с кнопкой старт/стоп ещё не готов

//счётчик для нажатий кнопки старт/стоп
let a = 0;

//кнопка старт/стоп
function starts(){
    switch(a) {
        //первое нажатие должно запустить таймер
        case 0: 
            a = 1;
            document.getElementById('starts').innerText = 'Stop';
            break;
        //следующее нажатие после первого запоминает остаток времени и останавливает таймер
        case 1: 
            a = 2;
            //запоминание остатка времени
            remains = getTimeRemaining(endtime).total;
            document.getElementById('starts').innerText = 'Start';
            //остановка времени на таймере (пока нет)
            break;
        //следущее(каждое чётное) запускает таймер с оставшимся временем
        case 2: 
            a = 1;
            document.getElementById('starts').innerText = 'Stop';
            //запуск по оставшемуся времени
            initializeClock(remains);
            break;
    }
}
