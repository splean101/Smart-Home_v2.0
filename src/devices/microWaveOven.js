import { Device } from './Device.js';

export class MicrowaveOven extends Device {
  constructor(model) {
    super(model);
    this._power = '0';
    this._doorState = false;
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
    if (!this._state) {
      alert('Please, turn this Microwave Oven ON');
      return;
    }
    if (this._doorState) {
      alert('Please, close the door');
      return;
    }
    this._interval = setInterval(() => {
      if (this._timerDelay >= 0) {
        this._timerDelay -= 1000;
        this.timeLeft.innerText = `Time left ${
          (this._timerDelay + 1000) / 1000
        } s`;
        return;
      }
      clearInterval(this._interval);
      alert(this._alarm);
    }, 1000);
  }
  stopTimer() {
    // turning timer off
    clearInterval(this._interval);
  }
}
