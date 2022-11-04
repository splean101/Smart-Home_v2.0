import { myHouse } from '../Home.js';
import { AirConditioner } from '../devices/airConditioner.js';

let id = 0;

export function renderAirConditioner(model) {
  id++;

  const airConditioner = new AirConditioner(model);
  myHouse.addAirConditioner(airConditioner);

  let airConditionerDiv = document.createElement('div');
  airConditionerDiv.classList.add('container');
  airConditionerDiv.innerHTML = `<h3 class="device">This is ${airConditioner.model} air conditioner</h3>
  <div>
      <button id="ONairConditionerButton${id}">ON</button>
      <button id="OFFairConditionerButton${id}" class="pushed">OFF</button>
  </div>
  <div id="innerConditioner${id}" style="visibility: hidden;">
      <div>Mode:
          <button id="coolingAirConditionerButton${id}">Cooling</button>
          <button id="heatingAirConditionerButton${id}">Heating</button>
          <button id="TURBOairConditionerButton${id}">TURBO</button>
      </div>
      <div><span>min</span>
          <input type="range" id="changeTemp${id}" min="16" max="28" step="1"
              value=${airConditioner.currentTemperature} />
          <span>max</span>
          <div>
              <span>Mode </span>
              <span id="mode${id}">${airConditioner.mode}</span>
          </div>
          <div>
              <span>Temp. <span id="temperature${id}">${airConditioner.currentTemperature}</span>&#176C</span>
              <span id="turbo${id}" style="visibility:hidden; color:red">TURBO</span>
          </div>
          
      </div>
  </div>
  <div><button id="delAirConditionerButton${id}">DELETE</button></div>`;

  const root = document.getElementById('devicesDiv');
  root.appendChild(airConditionerDiv);

  const ONairConditionerButton = document.getElementById(
    `ONairConditionerButton${id}`
  );
  const OFFairConditionerButton = document.getElementById(
    `OFFairConditionerButton${id}`
  );
  const innerConditioner = document.getElementById(`innerConditioner${id}`);
  const coolingAirConditionerButton = document.getElementById(
    `coolingAirConditionerButton${id}`
  );
  const heatingAirConditionerButton = document.getElementById(
    `heatingAirConditionerButton${id}`
  );
  const TURBOairConditionerButton = document.getElementById(
    `TURBOairConditionerButton${id}`
  );
  const temperatureChanger = document.getElementById(`changeTemp${id}`);
  const mode = document.getElementById(`mode${id}`);
  const temperatureValue = document.getElementById(`temperature${id}`);
  const turbo = document.getElementById(`turbo${id}`);
  const deleteButton = document.getElementById(`delAirConditionerButton${id}`);

  ONairConditionerButton.addEventListener('click', () => {
    airConditioner.on();
    ONairConditionerButton.className = 'pushed';
    OFFairConditionerButton.className = '';
    innerConditioner.style.visibility = 'visible';
    coolingAirConditionerButton.className = 'pushed';
  });

  OFFairConditionerButton.addEventListener('click', () => {
    airConditioner.off();
    ONairConditionerButton.className = '';
    OFFairConditionerButton.className = 'pushed';
    coolingAirConditionerButton.className = '';
    heatingAirConditionerButton.className = '';
    turbo.style.visibility = 'hidden';
    innerConditioner.style.visibility = 'hidden';
  });

  coolingAirConditionerButton.addEventListener('click', () => {
    if (!airConditioner.state) {
      alert('please turn the device ON');
      return;
    }
    coolingAirConditionerButton.className = 'pushed';
    heatingAirConditionerButton.className = '';
    airConditioner.mode = 'cooling';
    mode.innerText = 'cooling';
  });

  heatingAirConditionerButton.addEventListener('click', () => {
    if (!airConditioner.state) {
      alert('please turn the device ON');
      return;
    }
    heatingAirConditionerButton.className = 'pushed';
    coolingAirConditionerButton.className = '';
    airConditioner.mode = 'heating';
    mode.innerText = 'heating';
  });

  let pushed = false;
  TURBOairConditionerButton.addEventListener('click', () => {
    pushed = !pushed;
    if (pushed) {
      turbo.style.visibility = 'visible';
    } else {
      turbo.style.visibility = 'hidden';
    }
  });

  temperatureChanger.addEventListener('click', () => {
    airConditioner.currentTemperature = temperatureChanger.value;
    temperatureValue.innerText = airConditioner.currentTemperature;
  });

  deleteButton.addEventListener('click', () =>
    root.removeChild(airConditionerDiv)
  );
}
