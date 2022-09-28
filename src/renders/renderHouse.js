import { renderMicrowaveOven } from './renderMicrowaveOven.js';
import { renderAirConditioner } from './renderAirConditioner.js';
import { renderTV } from './renderTV.js';
import { myHouse } from '../Home.js';

export function renderHouse(home) {
  const fieldset = document.createElement('fieldset');
  fieldset.innerHTML = `<legend>
  <h2>Smart Home</h2>
</legend>
<Address>
  <div id = "city">City: <b>${home.adress}</b></div>
  <div id = "owner">Owner: <b>${home.owner}</b></div>
</Address>
<form name="owner">
  <input type="text" name = "ownerInput">
  <input type="button" value="Change Owner">
</form>
<form name="city">
  <input type="text" name = "cityInput">
  <input type="button" value="Change City">
</form>
<form name="addDevice">
  <div>Choose device</div>
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
let changeOwnerValue = document.querySelectorAll('input');
console.log(changeOwnerValue);//NodeList [] length:0


  const devisesDiv = document.createElement('div');
  devisesDiv.id = 'devicesDiv';
  devisesDiv.classList.add('container')

  document.getElementById('root').appendChild(fieldset);
  document.getElementById('root').appendChild(devisesDiv);

  renderTV();
  renderAirConditioner();
  renderMicrowaveOven();
}
