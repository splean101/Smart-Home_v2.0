import { myHouse } from '../Home.js';
import { MicrowaveOven } from '../devices/MicroWaveOven.js';

let id = 0;

export function renderMicrowaveOven(model) {
  id++;

  const microWaveOwen = new MicrowaveOven(model);
  myHouse.addMicrowaveOwen(microWaveOwen);

  let microWaveOwenDiv = document.createElement('div');
  microWaveOwenDiv.classList.add('container');
  microWaveOwenDiv.innerHTML = `<h3 class="device">This is ${microWaveOwen.model} microwave owen</h3>
  <button id = "ONmicroWaveOwenButton${id}">ON</button>
  <button id = "OFFmicroWaveOwenButton${id}">OFF</button>
  <span id="closeMessage${id}" style="visibility:hidden; color:red"><u><b>Clouse the door, please!</b> </u></span>
  <button id="openDoor${id}">Open</button>
  <button id="closeDoor${id}">Close</button>
  <div>
      <div>Power: <span id="powerValue${id}">${microWaveOwen.power}</span></div>
      <span>0</span>
      <input type="range" id="microWaveOwenPower${id}" min="0" max="800" step="50" value="0" orient="vertical"/>
      <span>800</span>
  </div>
  <div>
      <div>Timer: <span id="timerValue${id}">${microWaveOwen.timerDelay} sec.</span></div>
      <span>0</span>
      <input type="range" id="timeDelay${id}" min="0" max="10" step="1" value="0" />
      <span>10 sec.</span>
      <button id="stopTimer${id}">Reject</button>
      <div><button id="delMicroWaveOwenButton${id}">DELETE</button></div>`;
  const root = document.getElementById('devicesDiv');
  root.appendChild(microWaveOwenDiv);

  const ONmicroWaveOwenButton = document.getElementById(
    `ONmicroWaveOwenButton${id}`
  );
  const OFFmicroWaveOwenButton = document.getElementById(
    `OFFmicroWaveOwenButton${id}`
  );
  const closeMessage = document.getElementById(`closeMessage${id}`);
  const openDoorButton = document.getElementById(`openDoor${id}`);
  const closeDoorButton = document.getElementById(`closeDoor${id}`);
  const powerValue = document.getElementById(`powerValue${id}`);
  const microWaveOwenPower = document.getElementById(`microWaveOwenPower${id}`);
  const timerValue = document.getElementById(`timerValue${id}`);
  const timeDelay = document.getElementById(`timeDelay${id}`);
  const stopTimerButton = document.getElementById(`stopTimer${id}`);
  const delButton = document.getElementById(`delMicroWaveOwenButton${id}`);

  ONmicroWaveOwenButton.addEventListener('click', () => {
    microWaveOwen.on();
    ONmicroWaveOwenButton.className = 'pushed';
    OFFmicroWaveOwenButton.className = '';
  });

  OFFmicroWaveOwenButton.addEventListener('click', () => {
    microWaveOwen.off();
    OFFmicroWaveOwenButton.className = 'pushed';
    ONmicroWaveOwenButton.className = '';
  });

  openDoorButton.addEventListener('click', () => {
    microWaveOwen.openDoor();
    openDoorButton.className = 'pushed';
    closeDoorButton.className = '';
  });

  closeDoorButton.addEventListener('click', () => {
    microWaveOwen.closeDoor();
    closeDoorButton.className = 'pushed';
    openDoorButton.className = '';
    closeMessage.style.visibility = 'hidden';
  });

  microWaveOwenPower.addEventListener('change', () => {
    const powerInputValue = microWaveOwenPower.value;
    microWaveOwen.power = Number(powerInputValue);
    powerValue.innerText = microWaveOwen.power;
  });

  timeDelay.addEventListener('change', () => {
    if (!microWaveOwen.state) {
      alert('please turn the device ON');
      timeDelay.value = 0;
      return;
    }

    if (microWaveOwen.doorState) {
      closeMessage.style.visibility = 'visible';
      timeDelay.value = 0;
      return;
    }

    microWaveOwen.timerDelay = Number(timeDelay.value * 1000);

    microWaveOwen.interval = setInterval(() => {
      if (microWaveOwen.timerDelay >= 1) {
        microWaveOwen.timerDelay -= 1000;
        timerValue.innerText = `${microWaveOwen.timerDelay / 1000} sec.`;
        timeDelay.value = microWaveOwen.timerDelay / 1000;
        return;
      }
      clearInterval(microWaveOwen.interval);
      timeDelay.value = 0;
      alert('DING!');
    }, 1000);
  });

  stopTimerButton.addEventListener('click', () => {
    microWaveOwen.stopTimer();
    timeDelay.value = 0;
    microWaveOwen.timerDelay = 0;
    timerValue.innerText = `${microWaveOwen.timerDelay / 1000} sec.`;
  });

  delButton.addEventListener('click', () => root.removeChild(microWaveOwenDiv));
}
