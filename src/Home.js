class Home {
  constructor(name = 'I`m', adress = 'The City of Lost Heaven') {
    this._owner = name; //prompt('Enter the name', '');
    this._adress = adress; //prompt('Enter the city', '');
    this._airConditioners = [];
    this._tv = [];
    this._microwaveOwens = [];
  }

  static stringValidation(data) {
    if (data !== undefined && typeof data == 'string' && data !== null) {
      return true;
    }
    return false;
  }

  static objectValidation(data) {
    if (
      data !== undefined &&
      typeof data == 'object' &&
      !Array.isArray(data) &&
      data !== null
    ) {
      return true;
    }
    return false;
  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    if (Home.stringValidation(data)) {
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
    if (objectValidation(airConditioner)) {
      this._airConditioners.push(airConditioner);
    }
  }

  addTV(tv) {
    if (objectValidation(airConditioner)) {
      this._tv.push(tv);
    }
  }

  addMO(microwaveOwen) {
    if (objectValidation(airConditioner)) {
      this._microwaveOwens.push(microwaveOwen);
    }
  }
}

export const myHouse = new Home();
