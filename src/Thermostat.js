"use strict";

function Thermostat(powerSaving){
  this.startTemp = 20
  this.setTemp(this.startTemp);
  this.setPowerSaver(powerSaving)
};

Thermostat.prototype.setPowerSaver = function (powerSaving) {
  var powerSaver;
  if(typeof(powerSaving)==='undefined') {
    this.powerSaver = new PowerSaving();
  }
  else {
    this.powerSaver = powerSaving
  }
};

Thermostat.prototype.setTemp = function (number) {
  this.temp = number
};

Thermostat.prototype.getTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function () {
  this._tempCap()
  this.setTemp(this.temp+=1)
  return this.getTemp()
};

Thermostat.prototype.down = function () {
  this._tempFloor()
  this.setTemp(this.temp-=1)
  return this.getTemp()
};

Thermostat.prototype._tempFloor = function () {
  if((this.getTemp() - 1)<10) throw "Minimum temperature is 10C"
};

Thermostat.prototype._tempCap = function () {
  if((this.getTemp() + 1) > this.maxTemp()) throw ("Maximum temperature is " + this.maxTemp() + "C")
};

Thermostat.prototype.maxTemp = function () {
  return this.powerSaver.getMax()
};

Thermostat.prototype.resetTemp = function () {
  this.setTemp(20);
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSaver.setMode('On');
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSaver.setMode('Off');
};

Thermostat.prototype.energyUsage = function () {
  if (this.getTemp() < 18) {
    return 'low-usage'
  } else if (this.getTemp() < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};
