import { myHouse } from '../Home.js';
import { AirConditioner } from '../devices/airConditioner.js';

export function renderAirConditioner(model) {
  let acDiv = document.createElement('div');
  acDiv.innerHTML = `<h3>AirConditioner</h3>`;

  root.insertAdjacentElement('beforeend', acDiv);
}
