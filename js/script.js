window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //timer

    let deadline = '2021-01-01'; // конечная дата - "крайний срок"

    // название функции - "получить оставшееся время"
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // разница между точкой отсчета и сейчас 
            seconds = Math.floor((t / 1000) % 60), // остаток секунд
            minutes = Math.floor((t / 1000 / 60) % 60), // остаток минут
            // hours = Math.floor((t / (1000 * 60 * 60))), остаток часов всего
            hours = Math.floor((t / 1000 / 60 / 60) % 24), // остаток часов
            days = Math.floor((t / (1000 * 60 * 60 * 24))); // остаток дней
        // возвращаем все в виде массива
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // название функции - "установить часы"
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        // название функции - "обновить часы"
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);

});