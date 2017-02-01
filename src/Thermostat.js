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
  this.setTemp(this.temp+number)
  return this.getTemp()
};

Thermostat.prototype.down = function (number) {
  if((this.getTemp() - number)<=10) throw "Minimum temperature is 10c"
  this.setTemp(this.temp-number)
  return this.getTemp()
};
