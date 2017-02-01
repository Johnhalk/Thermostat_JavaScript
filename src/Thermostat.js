"use strict";

function Thermostat(){
  this.startTemp = 20
  this.setTemp(this.startTemp);
};

Thermostat.prototype.setTemp = function (number) {
  this.temp = number
};

Thermostat.prototype.getTemp = function () {
  return this.temp
};

Thermostat.prototype.up = function (number) {
  this.setTemp(this.temp+1)
  return this.getTemp()
};
