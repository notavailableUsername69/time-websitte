// Variables to store minutes, seconds, and milliseconds
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Variables to store timer ID and stopwatch status
let timer;
let isRunning = false;

// Function to update the stopwatch display
function updateStopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  // Display leading zeros if necessary
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  // Update the display
  document.getElementById("minutes").textContent = formattedMinutes;
  document.getElementById("seconds").textContent = formattedSeconds;
  document.getElementById("milliseconds").textContent = formattedMilliseconds;
}

// Event listener for the Start button
document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    timer = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    isRunning = true;
  }
});

// Event listener for the Stop button
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
});

// Event listener for the Reset button
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
});