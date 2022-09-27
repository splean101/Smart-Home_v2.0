import { myHouse } from '../Home.js';
import { TV } from '../TV.js';

export function renderTV(model) {
    const tv = new TV(model);
    myHouse.addTV(tv);
  let tvDiv = `<div>TV</div>`;
    
        document.querySelector('body').insertAdjacentElement('beforebegin', tvDiv);
  }