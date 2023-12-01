class CountdownTimer {
    constructor({
        selector,
        targetTime
    })  {
        this.selector = selector
        this.targeTime = targetTime
        }

    getTimeRemaining(endtime) {
        console.log(endtime)
    }

    updateTimer({ minutes, seconds }) {

    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetTime)
    }
}

const timer = new CountdownTimer({
    selector: 'clock',
    targetTime: ('5:00')   
})
timer.startTimer()
