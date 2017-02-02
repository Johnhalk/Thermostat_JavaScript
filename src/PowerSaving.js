'use strict';

function PowerSaving(){
  this.setMode('On');
}

PowerSaving.prototype.getMode = function () {
  return this.state
};

PowerSaving.prototype.setMode = function (state) {
  this.state = state
  this.getMax();
};

PowerSaving.prototype.getMax = function () {
  if (this.state === 'On') {
    this.maxTemp = 25
  } else if (this.state === 'Off') {
    this.maxTemp = 32
  } else {
    throw "Unexpected setting."
  }
  return this.maxTemp
};
