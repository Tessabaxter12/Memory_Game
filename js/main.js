const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    countdownEL.innerHTML = '${minutes}:${seconds}'; time--;
}


// let countdownTime = new Time().setMinutes(new Time().getMinutes() + 5)

// let timeInterval
//     const minutesElem = document.querySelector('#minutes'),
//         secondsElem = document.querySelector('#seconds'),
//         timerRunningContent = document.querySelector('#playbutton'),
//         timerEndContent = document.querySelector('#timer-end')

// const startCountdown = () => {
//         const now = new Time().getTime()
//         const countdown = new Time(countdownTime).getTime()
//         const difference = (countdown - now) / 1000
//         let minutes = math.floor((difference % 60))
//         let seconds = Math.floor(difference %)
//     }