'use strict';

function PowerSaving(){
  this.state = null;
  this.getMode();
}

PowerSaving.prototype.getMode = function () {
  return this.state
};

PowerSaving.prototype.setMode = function (state) {
  this.state = state
};
