import { Device } from './Device.js';

export class MicrowaveOven extends Device {
  constructor(model) {
    super(model);
    this._power = '0';
    this._timer = false;
    this._timerDelay = 10000;
    this._doorState = false;
    this._alarm = 'DING!';
  }
  increasePower() {
    // increasing power
    if (!this._state) {
      alert('Turn on the Microwave Oven');
    } else if (this._power < 700) {
      this._power = Number(this._power) + 100;
    }
  }
  decreasePower() {
    // decreasing power
    if (this._power >= 100 && this._power <= 700 && this._state === false) {
      alert('Turn on the Microwave Oven');
    } else if (this._power > 0) {
      this._power = Number(this._power) - 100;
    }
  }
  openDoor() {
    //opening door
    //........
  }
  closeDoor() {
    // closing door
    //........
  }
  urnOnTimer() {
    // turning timer on
    //.............
  }
  stopTimer() {
    // turn timer off
    //...........
  }
}
