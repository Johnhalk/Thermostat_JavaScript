"use strict";

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("initializes with a starting temp of 20C", function(){
    expect(thermostat.startTemp).toEqual(20);
  });

  describe('up', function(){

    it('increases the temperature', function(){
      expect(thermostat.up(1)).toEqual(21);
    });
  });

  describe('down', function(){
    it('decreases the temperature', function(){
      expect(thermostat.down(3)).toEqual(17);
    });
    it('stops temperature decreasing below 10', function(){
      expect(function(){thermostat.down(11)}).toThrow("Minimum temperature is 10c")
    })
  });

  describe('Powersaving', function(){
    var powerSaving;

    beforeEach(function(){
      powerSaving = jasmine.createSpyObj('powerSaving', ['getMode', 'setMode']);
      powerSaving.setMode('On')
    });

    it('when on, caps temperature at 25c', function(){
      expect(thermostat.maxTemp).toEqual(25);
    })
  });

});
