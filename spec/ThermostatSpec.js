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

    describe('powerSaving on', function(){
      it('stops temperature increasing past 25C', function(){
        expect(function(){thermostat.up(6)}).toThrow("Maximum temperature is 25C")
      });
    });


  });

  describe('down', function(){
    it('decreases the temperature', function(){
      expect(thermostat.down(3)).toEqual(17);
    });
    it('stops temperature decreasing below 10', function(){
      expect(function(){thermostat.down(11)}).toThrow("Minimum temperature is 10C")
    });
  });

  describe('Powersaving', function(){
    var powerSaving;
    var thermostat2;

    beforeEach(function(){
      powerSaving = jasmine.createSpyObj('powerSaving', ['getMax']);
      powerSaving.getMax.and.returnValue(25);
      thermostat2 = new Thermostat(powerSaving);

    });

    it('when on, max temperature is 25c', function(){
      expect(thermostat2.maxTemp()).toEqual(25);
    });
  });

});
