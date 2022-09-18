import { Device } from './Device.js';

export class MicrowaveOven extends Device {
  constructor(model) {
    super(model);
    this._power = '0';
    this._doorState = false;
    //this._timer = false;
    this._timerDelay = 10000;
    this._interval = null;
    this._alarm = 'DING!';
  }
  getPower() {
    // getting power
    return this._power;
  }
  setPower(power) {
    // setting power
    this._power = power;
  }
  openDoor() {
    //opening door
    return (this._doorState = true);
  }
  closeDoor() {
    // closing door
    return (this._doorState = false);
  }
  turnOnTimer() {
    // turning timer on
    if (_doorState) {
      alert('Please, close the door');
    } else {
      _interval = setInterval(() => {
        if (_timerDelay >= 0) {
          _timerDelay -= 1000;
          timeLeft.innerText = `Time left ${(_timerDelay + 1000) / 1000} s`;
        } else {
          clearInterval(_interval);
          alert(_alarm);
        }
      }, 1000);
    }
  }
  stopTimer() {
    // turning timer off
    clearInterval(_interval);
  }
}
