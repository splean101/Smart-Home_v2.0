import { renderMicrowaveOven } from './renderMicrowaveOven.js';
import { renderAirConditioner } from './renderAirConditioner.js';
import { renderTV } from './renderTV.js';

export function renderHouse(home) {
  const fieldset = document.createElement('fieldset');
  fieldset.innerHTML = `<legend>
  <h2>Smart Home</h2>
</legend>
  <div id = "city">City: <b>${home.adress}</b></div>
  <div id = "owner">Owner: <b>${home.owner}</b></div>
<form name="owner">
  <input type="text" name = "ownerInput" class = "input">
  <input type="button" name = "ownerButton" value="Change Owner" class = "input">
</form>
<form name="city">
  <input type="text" name = "cityInput" class = "input">
  <input type="button" name = "cityButton" value="Change City" class = "input">
</form>
<form name="addDevice">
  <div>Choose device type</div>
  <div>
      <input type="radio" id="microwaveOwen" name="device" checked>
      <label for="microwaveOwen">Microwave Owen</label>
  </div>
  <div>
      <input type="radio" id="airConditioner" name="device">
      <label for="airConditioner">Air Conditioner</label>
  </div>
  <div>
      <input type="radio" id="TV" name="device">
      <label for="TV">TV</label>
  </div>

  <input type="button" value="+Add Device" name="addDeviceSubmit">
</form>`;

  const devisesContainer = document.createElement('div');
  devisesContainer.id = 'devicesDiv';
  devisesContainer.classList.add('container');

  document.getElementById('root').appendChild(fieldset);
  document.getElementById('root').appendChild(devisesContainer);

  const changeOwnerValue = document.querySelector('input[name="ownerInput"]');
  const changeOwnerButton = document.querySelector('input[name="ownerButton"]');
  const ownerValue = document.querySelector('div#owner b');

  changeOwnerButton.addEventListener('click', (e) => {
    e.preventDefault();
    home.owner = changeOwnerValue.value;
    ownerValue.innerHTML = home.owner;
    changeOwnerValue.value = '';
  });

  const changeCityValue = document.querySelector('input[name="cityInput"]');
  const changeCityButton = document.querySelector('input[name="cityButton"]');
  const cityValue = document.querySelector('div#city b');

  changeCityButton.addEventListener('click', (e) => {
    e.preventDefault();
    home.adress = changeCityValue.value;
    cityValue.innerHTML = home.adress;
    changeCityValue.value = '';
  });

  const deviceSubmitButton = document.querySelector(
    'input[name="addDeviceSubmit"]'
  );

  let addDeviceInput = [...document.getElementsByName('device')];

  let choosedDeviceType = 'microwaveOwen';

  const addDeviceInputListrner = (event) => {
    choosedDeviceType = event.target.id;
  };

  addDeviceInput.forEach((input) => {
    input.addEventListener('click', addDeviceInputListrner);
  });

  deviceSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let model = prompt('Enter the device`s model', '');
    if (model === null) {
      return;
    } else if (model === '') {
      model = 'unknown model';
    }

    switch (choosedDeviceType) {
      case 'airConditioner':
        renderAirConditioner(model);
        break;
      case 'TV':
        renderTV(model);
        break;
      case 'microwaveOwen':
        renderMicrowaveOven(model);
    }
  });
}
