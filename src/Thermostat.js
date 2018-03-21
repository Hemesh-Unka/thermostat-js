'use strict';

const MININUM_INCREMENT = 1;
const MININUM_TEMPERATURE = 10;
const DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this._temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentTemperature = function() {
  return this._temperature
};

Thermostat.prototype.increaseTemperature = function() {
  this._temperature  = this._temperature + MININUM_INCREMENT;
};

Thermostat.prototype.descreaseTemperature = function() {
  if (this.isAtMininumTemperature()) {
    this._temperature = MININUM_TEMPERATURE;
  } else {
    this._temperature = this._temperature - MININUM_INCREMENT;
  }
};

Thermostat.prototype.isAtMininumTemperature = function() {
  if (this._temperature <= MININUM_TEMPERATURE) {
    return true;
  } else {
    return false;
  };
};
