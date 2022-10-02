import { Device } from './Device.js';
import { Validators } from '../validator/validators.js';

export class MicrowaveOven extends Device {
  constructor(model) {
    super(model);
    this._power = 0;
    this._doorState = false;
    this._timerDelay = 0;
    this._interval = null;
  }
  get power() {
    // getting power
    return this._power;
  }
  set power(power) {
    // setting power
    if (Validators.numberValidation(power)) {
      this._power = power;
    }
  }

  get doorState() {
    // getting state of the door
    return this._doorState;
  }

  get timerDelay() {
    return this._timerDelay;
  }

  set timerDelay(delay) {
    if (Validators.numberValidation(delay)) {
      this._timerDelay = delay;
    }
  }

  get interval() {
    return this._interval;
  }

  set interval(interval) {
    this._interval = interval;
  }

  openDoor() {
    //opening door
    return (this._doorState = true);
  }
  closeDoor() {
    // closing door
    return (this._doorState = false);
  }
  // turnOnTimer() {
  //   // turning timer on
  //   this._interval = setInterval(() => {
  //     if (this._timerDelay >= 0) {
  //       this._timerDelay -= 500;
  //       return;
  //     }
  //     clearInterval(this._interval);
  //     alert(this._alarm);
  //     return;
  //   }, 500);
  // }
  stopTimer() {
    // turning timer off
    clearInterval(this._interval);
  }
}
