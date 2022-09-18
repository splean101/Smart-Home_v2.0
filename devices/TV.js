class TV {
  constructor(model) {
    super(model);
    this._chanels = [
      'MTV',
      'Discovery',
      'Breaking News',
      'National geographic',
      'Cartoons',
      'XXX',
    ];
    this._currentChanel = this._chanels[0];
    this._volume = 0;
    this._smartTV = false;
    this._timer = false;
    this._timerDelay = 15000;
  }
  getCurrentChanel() {
    // getting currentChanel
    return this._currentChannel;
  }
  addChannel(newChannel) {
    //pushing new chanel to array
    //..................
  }
  removeChanel(deletedChanel) {
    //deleting chanel from array
    //.......................
  }
  nextChanel(currentChannel) {
    //changing current chanel to next
    //....................
  }
  previousChanel(currentChannel) {
    //changing current chanel to previous
    //.....................
  }
  increaseVolume() {
    //increassng volume
    //................
  }
  decreaseVolume() {
    //decrease volume
    //..............
  }
  smartTVmodeOn() {
    //turn on smartTV mode
    //..........
  }
  smartTVmodeOff() {
    //turn off smartTV mode
    //..........
  }
  setTimer(delay) {
    //seting timer delay
    //............
  }
  turnOnTimer() {
    // turning timer on
    //.............
  }
  stopTimer() {
    // turn timer off
    //...........
  }
}
