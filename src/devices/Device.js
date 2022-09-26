export class Device {
  constructor(model) {
    this._model = model;
    this._state = false;
  }
  get model() {
    // getting model
    return this._model;
  }
  set model(model) {
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
