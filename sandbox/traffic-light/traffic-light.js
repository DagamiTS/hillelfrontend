function main() {
  let leftTrafLights = document.querySelectorAll(".left");
  let rightTrafLights = document.querySelectorAll(".light:not(.left)");

  leftTrafLights.forEach( el => {
    el.classList.remove("red", "green", "yellow");
  });
  rightTrafLights.forEach( el => {
    el.classList.remove("red", "green", "yellow");
  });

  function leftGreen() {
    leftTrafLights.forEach( el => {
      el.classList.remove("red", "yellow");
      el.classList.add("green");
    });
    rightTrafLights.forEach( el => {
      el.classList.remove("green", "yellow");
      el.classList.add("red");
    });
  }

  function rightGreen() {
    rightTrafLights.forEach( el => {
      el.classList.remove("red", "yellow");
      el.classList.add("green");
    });
    leftTrafLights.forEach( el => {
      el.classList.remove("green", "yellow");
      el.classList.add("red");
    });
  }
  
  function yellow() {
    rightTrafLights.forEach( el => {
      el.classList.add("yellow");
    });
    leftTrafLights.forEach( el => {
      el.classList.add("yellow");
    });
  }

  const colorfulDuration = 7000;
  const yellowDuration = 3000;
  
  function step() {
    let timerLeftGreen = setTimeout(leftGreen, 0);
    let timerYellow = setTimeout(yellow, colorfulDuration);
    let timerRightGreen = setTimeout( rightGreen, colorfulDuration + yellowDuration);
    timerYellow = setTimeout(yellow, colorfulDuration * 2 + yellowDuration);
  }

  step();
  let intervalId = setInterval(step, 20000);

  let cdTimeout = 0;
  let sec = colorfulDuration / 1000;
  function countdown() {
    let cd = document.querySelectorAll("#countdown");
    if (sec > 0) {
      cd.forEach( el => el.textContent = sec);
      sec--;
    } else {
      cd.forEach( el => el.textContent = "");
      clearTimeout(cdTimeout);
    }
    cdTimeout = setTimeout(countdown, 1000);
  }
  countdown();
  setInterval( () => sec = 7, 10000);

  // let cd = setInterval(countdown, 8000);
  // setInterval( () => clearInterval(cd, 0), 8000);
}

window.addEventListener("load", main);