import { myHouse } from '../Home.js';
import { MicrowaveOven } from '../devices/MicroWaveOven.js';

export function renderMicrowaveOven(model) {
  let moDiv = document.createElement('div');
  moDiv.innerHTML = `<h3 class = "device">Microwave Oven</h3>`;

  const root = document.getElementById('devicesDiv');
  root.appendChild(moDiv);
}
