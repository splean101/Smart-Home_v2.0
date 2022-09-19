import { Device } from './Device.js';

export class TV extends Device {
  constructor(model) {
    super(model);
    this._chanels = [
      'MTV',
      'Discovery',
      'Breaking News',
      'National geographic',
      'Cartoons',
      'XXX',
      'Fashion',
    ];
    this._currentChanel = this._chanels[0];
    this._volume = 0;
    this._smartTV = false;
    this._interval = null;
    this._timerDelay = 15000;
  }
  getCurrentChanel() {
    // getting currentChanel
    return this._currentChannel;
  }
  addChannel(newChannel) {
    //pushing new chanel to array
    if (typeof newChannel == 'string') {
      this._chanels.push(newChannel);
    }
  }
  removeChanel(deletedChanel) {
    //deleting chanel from array
    if (this._chanels.includes(deletedChanel) === false) {
      alert(`There is no chanel like ${deletedChanel}`);
      return;
    }
    const index = this._chanels.indexOf(deletedChanel);
    this._chanels.splice(index, 1);
    alert(`${deletedChanel} is successfully deleted`);
  }
  nextChanel(currentChannel) {
    //changing current chanel to next
    return (this._currentChanel =
      this._chanels[this._chanels.indexOf(currentChannel) + 1]);
  }
  previousChanel(currentChannel) {
    //changing current chanel to previous
    return (this._currentChanel =
      this._chanels[this._chanels.indexOf(currentChannel) - 1]);
  }
  increaseVolume() {
    //increasіng volume
    this._volume += 1;
  }
  decreaseVolume() {
    //decreasing volume
    this._volume -= 1;
  }
  smartTVmodeOn() {
    //turning on smartTV mode
    if (!this._smartTV) {
      this._smartTV = true;
    }
  }
  smartTVmodeOff() {
    //turning off smartTV mode
    if (this._smartTV) {
      this._smartTV = false;
    }
  }
  setTimer(delay) {
    //seting timer delay
    if (
      isFinite(delay) &&
      delay > 0 &&
      delay < 30 &&
      typeof delay === 'number' &&
      !isNaN(delay)
    ) {
      this._timerDelay = delay * 1000 * 60;
      return;
    }
    alert(`Timer delay must be a number between 1 and 30`);
  }
  turnOnTimer() {
    // turning timer on
    if (!this._state) {
      alert('Please, turn this TV ON');
      return;
    }
    this._interval = setInterval(() => {
      if (this._timerDelay >= 0) {
        this._timerDelay -= 1000;
        return;
      }
      clearInterval(this._interval);
      this._state = false;
    }, 1000);
  }
  stopTimer() {
    // turning timer off
    clearInterval(this._interval);
  }
}
