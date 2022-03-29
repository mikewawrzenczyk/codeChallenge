/* Create a stop watch object with methods for start, stop and reset based on a property of duration
*/
// let stopWatch = {}

// stopWatch.duration = 0

// stopWatch.start = function(){
//     stopWatch.duration = Date.now()
// }

// stopWatch.stop = function(){
//     const currentTime = Date.now()
//     stopWatch.duration = (currentTime - stopWatch.duration) / 1000
// }
// stopWatch.reset = function(){
//     stopWatch.duration = 0
// }
function StopWatch(){
    let duration = 0
    let running = false

    this.start = function(){
        if(running) throw new Error('Stopwatch already running stop it first')
        running = true
        duration += this.duration = Date.now()
    }

    this.stop = function(){
        if(!running) throw new Error('Stopwatch is stopped, start it first')
        running = false

        const currentTime = Date.now()
        this.duration = (currentTime - this.duration) / 1000
        //we should add this to the  duration
    }

    this.reset = function(){
        this.duration = 0
    }
}