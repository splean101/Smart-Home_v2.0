import { myHouse } from '../Home.js';
import { TV } from '../devices/TV.js';

export function renderTV(model) {
  //const tv = new TV(model);
  //myHouse.addTV(tv);
  let tvDiv = document.createElement('div');
  tvDiv.innerHTML = `<h3 class = "device">TV</h3>`;

  const root = document.getElementById('devicesDiv');
  root.appendChild(tvDiv);
}
