class AirConditioner {
  constructor(model) {
    super(model);
    this._mode = 'cooling';
    this._currentTemperature = 20;
    this._turboMode = false;
  }
  setMode() {
    // set mode 'cooling' or 'heating'
    //......
  }
  getCurrentTemperature() {
    //getting current temperature
    //.................
  }
  setTemperature() {
    //setting temperature
    //.............
  }
  turboModeOn() {
    // turning mode turbo on
    //...........
  }
  turboModeOff() {
    // turning mode turbo off
    //...........
  }
}
