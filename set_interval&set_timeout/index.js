const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")


let count = 0
let intervalId
timer.textContent = count

function incrementTimer(){
    count++
    timer.textContent = count
}

startBtn.addEventListener("click", function(){
    intervalId = setTimeout(incrementTimer, 100)
})

stopBtn.addEventListener('click', function(){
    // intervalId = setTimeout(incrementTimer,100)
    intervalId = setInterval(incrementTimer, 100)

})

stopBtn.addEventListener('click', function(){
    clearTimeout(intervalId)
})