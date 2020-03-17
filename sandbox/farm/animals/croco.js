import {Animal} from './animal.js';

export class Croco extends Animal {
  pixels = [
    { x: 0 , y: 0 },
    { x: 1 , y: 0 },
    { x: 2 , y: 0 },
    { x: 3 , y: 0 },
    { x: 4 , y: 0 },
    { x: -1 , y: 0 },
    { x: -2 , y: 0 },
    { x: -3 , y: 0 },
    { x: -4 , y: 0 },
    { x: 0 , y: 1 },
    { x: 1 , y: 1 },
    { x: 2 , y: 1 },
    { x: 3 , y: 1 },
    { x: 4 , y: 1 },
    { x: 5 , y: 1 },
    { x: 6 , y: 1 },
    { x: 7 , y: 1 },
    { x: 8 , y: 1 },
    { x: 9 , y: 1 },
    { x: -1 , y: 1 },
    { x: -2 , y: 1 },
    { x: -3 , y: 1 },
    { x: -4 , y: 1 },
    { x: -5 , y: 1 },
    { x: -6 , y: 1 },
    { x: -7 , y: 1 },
    { x: 0 , y: 2 },
    { x: 1 , y: 2 },
    { x: 2 , y: 2 },
    { x: 3 , y: 2 },
    { x: 4 , y: 2 },
    { x: 5 , y: 2 },
    { x: -1 , y: 2 },
    { x: -2 , y: 2 },
    { x: -5 , y: 2 },
    { x: -6 , y: 2 },
    { x: -7 , y: 2 },
    { x: -8 , y: 2 },
    { x: 2 , y: 3 },
    { x: 5 , y: 3 },
    { x: 6 , y: 3 },
    { x: 7 , y: 3 },
    { x: 8 , y: 3 },
    { x: 9 , y: 3 },
    { x: -2 , y: 3 },
    { x: -7 , y: 3 },
    { x: -8 , y: 3 },
    { x: -9 , y: 3 },
    { x: -1 , y: 4 },
    { x: -2 , y: 4 },
    { x: 2 , y: 4 },
    { x: 3 , y: 4 },
    { x: -8 , y: 4 },
    { x: -9 , y: 4 },
    { x: -9 , y: 5 },
  ];
  move() {
    this._x = this._x + Math.random() - 0.5;
  }
  draw() {
    this._canvas.setColor('black');
    super.draw();
  }
}