'use strict';

const MININUM_INCREMENT = 1;

const MININUM_TEMPERATURE = 10;
const DEFAULT_TEMPERATURE = 20;

const PSM_ON_MAX_TEMPERATURE = 25;
const PSM_OFF_MAX_TEMPERATURE = 32;

const LOW_ENERGY_USAGE_TEMPERATURE = 18;
const HIGH_ENERGY_USAGE_TEMPERATURE = 25;


function Thermostat() {
  this._temperature = DEFAULT_TEMPERATURE;
  this._powerSavingModeEnabled = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this._temperature
};

Thermostat.prototype.increaseTemperature = function() {
  if (this._temperature === this.maximumTemperature()) {
    this._temperature === this.maximumTemperature()
  } else {
    this._temperature  += MININUM_INCREMENT;
  }
};

Thermostat.prototype.descreaseTemperature = function() {
  if (this.isAtMininumTemperature()) {
    this._temperature = MININUM_TEMPERATURE;
  } else {
    this._temperature -= MININUM_INCREMENT;
  };
};

Thermostat.prototype.isAtMininumTemperature = function() {
  if (this._temperature <= MININUM_TEMPERATURE) {
    return true;
  } else {
    return false;
  };
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this._powerSavingModeEnabled = !this._powerSavingModeEnabled;
};

Thermostat.prototype.isPowerSavingModeEnabled = function() {
  return this._powerSavingModeEnabled;
};

Thermostat.prototype.maximumTemperature = function () {
  if (this.isPowerSavingModeEnabled()) {
    return PSM_ON_MAX_TEMPERATURE;
  } else {
    return PSM_OFF_MAX_TEMPERATURE;
  };
};

Thermostat.prototype.resetTemperature = function() {
  this._temperature = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temperature <= LOW_ENERGY_USAGE_TEMPERATURE) {
    return "Low Usage";
  } else if (this._temperature >= HIGH_ENERGY_USAGE_TEMPERATURE)  {
    return "High Usage";
  } else {
    return "Medium Usage";
  }
}
