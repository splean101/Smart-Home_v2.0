import { Validators } from './validator/validators.js';

class Home {
  constructor(name = 'I`m', adress = 'The City of Lost Heaven') {
    this._owner = name; //prompt('Enter the name', '');
    this._adress = adress; //prompt('Enter the city', '');
    this._airConditioners = [];
    this._tv = [];
    this._microwaveOwens = [];
  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    if (Validators.stringValidation(data)) {
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
      this._airConditioners.push(airConditioner);
    }
  }

  addTV(tv) {
    if (Validators.objectValidation(airConditioner)) {
      this._tv.push(tv);
    }
  }

  addMO(microwaveOwen) {
    if (Validators.objectValidation(airConditioner)) {
      this._microwaveOwens.push(microwaveOwen);
    }
  }
}

export const myHouse = new Home();
