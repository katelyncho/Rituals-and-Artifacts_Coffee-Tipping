const time = document.getElementById("timer");
const startButton = document.getElementById("startButton");

const workerTotalCost = document.getElementById("workerTotal");
const companyTotalCost = document.getElementById("companyTotal");

let startTime = 0;
let totalTime = 0;
let timerInterval = null;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateTotals(ms) {
  const secs = Math.floor(ms / 1000);

  workerTotalCost.textContent = String(secs * 10);
  companyTotalCost.textContent = String(secs * 20);
}

startButton.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - totalTime;

    timerInterval = setInterval(() => {
      totalTime = Date.now() - startTime;
      time.textContent = formatTime(totalTime);

      updateTotals(totalTime);
    }, 10);

    startButton.textContent = "STOP";
    isRunning = true;
  } else {
    clearInterval(timerInterval);

    updateTotals(totalTime);

    startButton.textContent = "START";
    isRunning = false;
  }
});
