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

  function step() {
    let timerLeftGreen = setTimeout(leftGreen, 0);
    let timerYellow = setTimeout(yellow, 7000);
    let timerRightGreen = setTimeout( rightGreen, 10000);
    timerYellow = setTimeout(yellow, 17000);
  }

  step();

  let intervalId = setInterval(step, 20000);
}

window.addEventListener("load", main);