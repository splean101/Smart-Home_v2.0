export class Device {
  constructor(model) {
    this._model = model;
    this._state = false;
  }
  getModel() {
    // getting model
    //...
  }
  setModel(model) {
    // setting model
    //.....
  }
  getState() {
    // getting state
    return this._state;
  }
  on() {
    this._state = true;
  }
  off() {
    this._state = false;
  }
}
