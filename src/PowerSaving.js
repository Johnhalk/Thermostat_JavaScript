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
  if (this.state = 'On') {
    this.maxTemp = 25
  }
  return this.maxTemp
};
