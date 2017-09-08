var tick = 0
var watch1
var watch2
var seconds = document.querySelector('#seconds')
var startButton = document.querySelector('#start')
var stopButton = document.querySelector('#stop')

var start = function() {
  watch1 = setInterval(function () {
    tick++
  }, 1000)
}

var update = function () {
  watch2 = setInterval(function () {
    seconds.textContent = tick
  }, 1000)
}

var stop = function() {
  clearInterval(watch1)
  clearInterval(watch2)
}

startButton.addEventListener('click', start)
startButton.addEventListener('click', update)

stopButton.addEventListener('click', stop)
