import { Device } from './Device.js';

export class AirConditioner extends Device {
  constructor(model) {
    super(model);
    this._mode = 'cooling';
    this._currentTemperature = 20;
    this._turboMode = false;
  }
  setMode(mode) {
    // set mode 'cooling' or 'heating'
    this._mode = mode;
  }
  getCurrentTemperature() {
    //getting current temperature
    return this._currentTemperature;
  }
  setTemperature(temperature) {
    //setting temperature
    this._currentTemperature = temperature;
  }
  turboModeOn() {
    // turning mode turbo on
    this._turboMode = true;
  }
  turboModeOff() {
    // turning mode turbo off
    this._turboMode = false;
  }
}
