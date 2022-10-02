import { myHouse } from '../Home.js';
import { AirConditioner } from '../devices/airConditioner.js';

export function renderAirConditioner(model) {
  let acDiv = document.createElement('div');
  acDiv.innerHTML = `<h3 class = "device">AirConditioner</h3>`;
  myHouse.addAirConditioner(microwaveOwen);

  const root = document.getElementById('devicesDiv');
  root.appendChild(acDiv);
}
