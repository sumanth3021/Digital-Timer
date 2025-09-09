let time = 600; 
let interval = null;

function updateDisplay() {
  let minutes = parseInt(time / 60); 
  let seconds = time % 60;

  if (seconds < 10) {
    document.getElementById("timer").innerText = minutes + ":0" + seconds;
  } else {
    document.getElementById("timer").innerText = minutes + ":" + seconds;
  }
}

function startTimer() {
  if (interval) return;
  interval = setInterval(function() {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 600; 
  updateDisplay();
}

updateDisplay();
