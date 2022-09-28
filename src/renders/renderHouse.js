import { renderMicrowaveOven } from './renderMicrowaveOven.js';
import { renderAirConditioner } from './renderAirConditioner.js';
import { renderTV } from './renderTV.js';

export function renderHouse(h) {
    renderTV();
    renderAirConditioner();
    renderMicrowaveOven();
}
