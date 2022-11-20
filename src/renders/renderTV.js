import { myHouse } from '../Home.js';
import { TV } from '../devices/TV.js';

let id = 0;

export function renderTV(model) {
  id++;

  const tv = new TV(model);
  myHouse.addTV(tv);
  let tvDiv = document.createElement('div');
  tvDiv.innerHTML = `<h3 class="device">This is ${tv.model} TV</h3>
  <div>
      <button id="ONtv${id}">ON</button>
      <button id="OFFtv${id}" class="pushed">OFF</button>
  </div>
  <div id="innerTV${id}" style="visibility: hidden">
      <div>
          <img id="chanelImg${id}" src="./src/renders/tvChanelsImages/0.jpg" alt="screen" width="480px" height="320px">
      </div>
      <div>Chanel:
          <span id="currentChanel${id}">0</span>
      </div>
      <div>Volume:
          <button id="decreaseVolumeButton${id}">-</button>
          <span id="volumeValue${id}">${tv.volume}</span>
          <button id="increaseVolumeButton${id}">+</button>
          <button id="muteVolumeButton${id}">MUTE</button>
      </div>
      <div id="chanelList${id}">Chanel list:
          <div id="MTV${id}">
              <input type="radio" id="chanel1${id}" name="chanel" checked>
              <label for="chanel1${id}">MTV</label>
              <button>Delete</button>
          </div>
          <div id="Discovery${id}">
              <input type="radio" id="chanel2${id}" name="chanel">
              <label for="chanel2${id}">Discovery</label>
              <button>Delete</button>
          </div>
          <div id="BreakingNews${id}">
              <input type="radio" id="chanel3${id}" name="chanel">
              <label for="chanel3${id}">Breaking News</label>
              <button>Delete</button>
          </div>
          <div id="NationalGeographic${id}">
              <input type="radio" id="chanel4${id}" name="chanel">
              <label for="chanel4${id}">National geographic</label>
              <button>Delete</button>
          </div>
          <div id="Cartoons${id}">
              <input type="radio" id="chanel5${id}" name="chanel">
              <label for="chanel5${id}">Cartoons</label>
              <button>Delete</button>
          </div>
          <div id="XXX${id}">
              <input type="radio" id="chanel6${id}" name="chanel">
              <label for="chanel6${id}">XXX</label>
              <button>Delete</button>
          </div>
          <div id="Fashion${id}">
              <input type="radio" id="chanel7${id}" name="chanel">
              <label for="chanel7${id}">Fashion</label>
              <button>Delete</button>
          </div>
          <input type="button" name="addChanelButton" value="Add the Chanel" class="input">
      </div>
      <div>

      </div>
  </div>
  <div><button id="delTV${id}">DELETE</button></div>`;

  const root = document.getElementById('devicesDiv');
  root.appendChild(tvDiv);

  //start here
  const ONTVButton = document.getElementById(`ONtv${id}`);
  const OFFTVButton = document.getElementById(`OFFtv${id}`);
  const innerTV = document.getElementById(`innerTV${id}`);
  const chanelImg = document.getElementById(`chanelImg${id}`);
  const currentChanel = document.getElementById(`currentChanel${id}`);
  const volumeValue = document.getElementById(`volumeValue${id}`);
  const decreaseVolumeButton = document.getElementById(
    `decreaseVolumeButton${id}`
  );
  const increaseVolumeButton = document.getElementById(
    `increaseVolumeButton${id}`
  );
  const muteVolumeButton = document.getElementById(`muteVolumeButton${id}`);
  const chanelList = document.getElementById(`chanelList${id}`);

  ONTVButton.addEventListener('click', () => {
    tv.on();
    ONTVButton.className = 'pushed';
    OFFTVButton.className = '';
    innerTV.style = 'visibility: visible';
    currentChanel.innerText = tv.currentChanel;
    chanelImg.src = './src/renders/tvChanelsImages/MTV.jpg';
  });

  OFFTVButton.addEventListener('click', () => {
    tv.off();
    OFFTVButton.className = 'pushed';
    ONTVButton.className = '';
    innerTV.style = 'visibility: hidden';
  });
  decreaseVolumeButton.addEventListener('click', () => {
    tv.decreaseVolume();
    volumeValue.innerText = tv.volume;
  });
  increaseVolumeButton.addEventListener('click', () => {
    tv.increaseVolume();
    volumeValue.innerText = tv.volume;
  });
  muteVolumeButton.addEventListener('click', ()=>{
    tv.mute();
    volumeValue.innerText = tv.volume;
  })
}
