var tick = 0
var watch
var seconds = document.querySelector('#seconds')
var startButton = document.querySelector('#start')
var stopButton = document.querySelector('#stop')

var start = function() {
  watch = setInterval(function () {
    tick++
  }, 1000)
}

var update = function () {
  watch = setInterval(function () {
    seconds.textContent = tick
  }, 1000)
}

var stop = function() {
  clearInterval(watch)
}

startButton.addEventListener('click', start)
startButton.addEventListener('click', update)

stopButton.addEventListener('click', stop)
