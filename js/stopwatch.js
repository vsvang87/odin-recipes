window.onload = function () {
  //assigning tens and seconds to zero
  let seconds = 00;
  let tens = 00;
  //grabbing selectors
  let appendTens = document.getElementsByClassName("tens");
  let appendSeconds = document.getElementsByClassName("seconds");
  let buttonStart = document.getElementsByClassName("start");
  let buttonStop = document.getElementsByClassName("stop");
  let buttonReset = document.getElementsByClassName("reset");
  let Interval;

  //selecting start button
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  //stop button
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  //reset button
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };
  //function to start timer
  function startTimer() {
    tens++;

    //if else statement
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
