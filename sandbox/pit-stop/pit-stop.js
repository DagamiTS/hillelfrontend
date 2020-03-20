const WHEEL_INSTALLED = `wheelInstalled`;
const TANK_FULL = 'tankFull';

class Mechanic {
  constructor(node) {
    this.node = node;
    this.isWheelman = this.node.classList.contains('wheelman');
    this.eventName = TANK_FULL;
    if (this.isWheelman) {
      this.eventName = WHEEL_INSTALLED;
      this.wheel = document.querySelector('.wheel:not(.taken)')
      this.wheel.classList.add('taken');
    }
    const timeout = 1000 + Math.random() * 6000;
    setTimeout(() => this.ready(), timeout);
  }

  ready() {
    if (this.isWheelman) {
      this.wheel.classList.add('installed');
    }
    this.node.dispatchEvent(new CustomEvent(this.eventName, { bubbles: true }));
    this.node.classList.add('ready');
  }
}

function createMechanics() {
  document.querySelectorAll('.mechanic')
    .forEach(node => new Mechanic(node));
}

function main() {
  createMechanics();
  
  const car = document.getElementById("pit-stop");
  let tankCondition = 0;
  let wheelCounter = 0;

  function carGo() {
    if (tankCondition && wheelCounter === 4) {
      car.classList.add("go");
    }
  }
  
  document.addEventListener(TANK_FULL, () => {
    tankCondition++;
    carGo();
  });
  document.addEventListener(WHEEL_INSTALLED, () => {
    wheelCounter++;
    carGo();
  })
}

window.addEventListener('load', main);
