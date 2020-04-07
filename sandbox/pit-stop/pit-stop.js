const WHEEL_INSTALLED = 'wheelInstalled';
const TANK_FULL = 'tankFull';

class Mechanic {
  /**
   * @param {HTMLElement} node
   */
  constructor(node) {
    this.node = node;
    this.isWheelman = this.node.classList.contains('wheelman');
    this.eventName = TANK_FULL;
    if (this.isWheelman) {
      this.eventName = WHEEL_INSTALLED;
      this.wheel = document.querySelector('.wheel:not(.taken)');
      this.wheel.classList.add('taken');
    }
    const timeout = 1000 + Math.random() * 6000;
    this.promise = new Promise( (resolve) => {
      setTimeout(() => resolve(), timeout);
    }).then( () => this.ready());
  }

  ready() {
    if (this.isWheelman) {
      this.wheel.classList.add('installed');
    }
    this.node.dispatchEvent(new CustomEvent(this.eventName, { bubbles: true }));
    if (!this.node.closest('.go')) {
      this.node.classList.add('ready');
    }
  }
}

function createMechanics() {
  const result = [];
  document.querySelectorAll('.mechanic')
    .forEach( element => result.push(new Mechanic(element)));
  return result;
}

function main() {
  const mech = createMechanics().map( element => element.promise);

  Promise.all(mech)
    .then( () => {
      document.querySelector('#pit-stop').classList.add('go');
    });

}

window.addEventListener('load', main);
