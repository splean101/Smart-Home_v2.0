export class Device {
  constructor(model) {
    this._model = model;
    this._state = false;
  }
  getModel(model) {
    // getting model
    //...
  }
  setModel() {
    // setting model
    //.....
  }
  getState() {
    // getting state
    return this._state ? 'ON' : 'OFF';
  }
  on() {
    this._state = true;
  }
  off() {
    this._state = false;
  }
}
