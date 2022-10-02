import { Validators } from './validator/validators.js';

class Home {
  constructor(name = 'I`m', adress = 'The City of Lost Heaven') {
    this._owner = name; 
    this._adress = adress; 
    this._devices = {
      airConditioner: [],
      tv: [],
      microwaveOwen: [],
    };
  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    if (Validators.stringValidation(owner)) {
      this._owner = owner;
    }
  }

  get adress() {
    return this._adress;
  }

  set adress(adress) {
    !adress ? this._adress : (this._adress = adress);
  }

  addAirConditioner(airConditioner) {
    if (Validators.objectValidation(airConditioner)) {
      this._devices.airConditioner.push(airConditioner);
    }
  }

  addTV(tv) {
    if (Validators.objectValidation(tv)) {
      this._devices.tv.push(tv);
    }
  }

  addMicrowaveOwen(microwaveOwen) {
    if (Validators.objectValidation(microwaveOwen)) {
      this._devices.microwaveOwen.push(microwaveOwen);
    }
  }
}

export const myHouse = new Home();
