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
      <button id="OFFtv${id}">OFF</button>
  </div>
  <div id="innerTV${id}">
      <!--style="visibility: hidden;"-->
      <div>
          <img src="./src/renders/tvChanelsImages/0.jpg" alt="screen" width="480px" height="320px">
      </div>
      <div>Chanel:
          <span id="CurrentChanel">${tv.currentChanel}</span>
      </div>
      <div>Volume:
          <button>-</button>
          <span>${tv.volume}</span>
          <button>+</button>
      </div>
      <div>
          <button>MUTE</button>
      </div>
      <div>Chanel list:
          <div>
              <input type="radio" id="chanel1" name="chanel" checked>
              <label for="chanel1">MTV</label>
              <button>Delete</button>
          </div>
          <div>
              <input type="radio" id="chanel2" name="chanel">
              <label for="chanel2">Discovery</label>
              <button>Delete</button>
          </div>
          <div>
              <input type="radio" id="chanel3" name="chanel">
              <label for="chanel3">Breaking News</label>
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
}
