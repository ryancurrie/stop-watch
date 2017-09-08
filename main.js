var tick = 0

var seconds = document.querySelector('#seconds')
var startButton = document.querySelector('#start')

function start() {
  setInterval(function () {
    tick++
  }, 1000)
}

function update() {
  setInterval(function () {
    seconds.textContent = tick
  })
}

startButton.addEventListener('click', start)
startButton.addEventListener('click', update)
