var tick = 0
var watch1
var watch2
var limit
var seconds = document.querySelector('#seconds')
var startButton = document.querySelector('#start')
var stopButton = document.querySelector('#stop')
var resetButton = document.querySelector('#reset')
var setButton = document.querySelector('#set')
var userLimit = document.querySelector('#limit')

var start = function() {
  watch1 = setInterval(function () {
    if (tick <= limit) {
      tick++
    }
    else {
      stop()
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

var reset = function() {
  tick = 0
  seconds.textContent = tick
}

var setLimit = function() {
  limit = userLimit.value
}

startButton.addEventListener('click', start)
startButton.addEventListener('click', update)

stopButton.addEventListener('click', stop)

resetButton.addEventListener('click', reset)

setButton.addEventListener('click', setLimit)
