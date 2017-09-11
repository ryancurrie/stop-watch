var tick = 0
var watch1
var watch2
var limit = null
var seconds = document.querySelector('#seconds')
var startButton = document.querySelector('#start')
var stopButton = document.querySelector('#stop')
var resetButton = document.querySelector('#reset')
var setButton = document.querySelector('#set')
var userLimit = document.querySelector('#limit')
var background = ['#00E6F0', '#00FF00', '#FFFF00', '#FF6800', '#FF14AB']

var start = function() {
  watch1 = setInterval(function () {
      if (limit === null || tick < limit) {
        tick++
        document.querySelector('#start').disabled = true;}
      else {
        stop()
      }
  }, 1000)
}

var update = function () {
  watch2 = setInterval(function () {
    seconds.textContent = tick
    document.querySelector('.container').style.background = background[Math.floor(Math.random() * background.length) + 1  ]
  }, 1000)
}

var reset = function() {
  tick = 0
  limit = null
  seconds.textContent = tick
  document.querySelector('#limit').value = 0;
  document.querySelector('.container').style.background = '#fff'
}

var stop = function() {
  clearInterval(watch1)
  clearInterval(watch2)
  document.querySelector('#start').disabled = false;
}

var setLimit = function() {
  limit = userLimit.value
}

startButton.addEventListener('click', start)
startButton.addEventListener('click', update)

stopButton.addEventListener('click', stop)

resetButton.addEventListener('click', reset)

setButton.addEventListener('click', setLimit)
