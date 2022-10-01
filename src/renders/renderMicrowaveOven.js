import { myHouse } from '../Home.js';
import { MicrowaveOven } from '../devices/MicroWaveOven.js';

export function renderMicrowaveOven(model) {
  const microwaveOwen = new MicrowaveOven(model);
  let moDiv = document.createElement('div');
  moDiv.innerHTML = `<h3 class="device">This is ${microwaveOwen.model} microwave owen</h3>
  <button id = "ONmicroWaveOwenButton">ON</button>
  <button id = "OFFmicroWaveOwenButton">OFF</button>
  <span id="closeMessage" style="visibility:hidden; color:red"><u><b>Clouse the door, please!</b> </u></span>
  <button id="openDoor">Open</button>
  <button id="closeDoor">Close</button>
  <div>
      <div>Power: <span id="powerValue">${microwaveOwen.power}</span></div>
      <span>0</span>
      <input type="range" name="microwaveOwenPower" min="0" max="800" step="50" value="0" orient="vertical"/>
      <span>800</span>
  </div>
  <div>
      <div>Timer: <span id = "timerValue">${microwaveOwen.power}</span></div>
      <span>0</span>
      <input type="range" name="timeDelay" min="0" max="5" step="0.5" value="0" />
      <span>5 min.</span>
      <button id="stopTimer">Reject</button>
      <div><button id="delButton">DELETE</button></div>`;
  const root = document.getElementById('devicesDiv');
  root.appendChild(moDiv);

  const ONmicroWaveOwenButton = document.getElementById(
    'ONmicroWaveOwenButton'
  );
  const OFFmicroWaveOwenButton = document.getElementById(
    'OFFmicroWaveOwenButton'
  );
  const closeMessage = document.getElementById('closeMessage');
  const openDoorButton = document.getElementById('openDoor');
  const closeDoorButton = document.getElementById('closeDoor');
  

  ONmicroWaveOwenButton.addEventListener('click', () => {
    microwaveOwen.on();
    ONmicroWaveOwenButton.className = 'pushed';
    OFFmicroWaveOwenButton.className = '';
  });

  OFFmicroWaveOwenButton.addEventListener('click', () => {
    microwaveOwen.off();
    OFFmicroWaveOwenButton.className = 'pushed';
    ONmicroWaveOwenButton.className = '';
  });

  openDoorButton.addEventListener('click', () => {
    microwaveOwen.openDoor();
    openDoorButton.className = 'pushed';
    closeDoorButton.className = '';
  });

  closeDoorButton.addEventListener('click', () => {
    microwaveOwen.closeDoor();
    closeDoorButton.className = 'pushed';
    openDoorButton.className = '';
  });
  // document.querySelector('input[name="microwaveOwenPower"]').addEventListener('click', )
}
