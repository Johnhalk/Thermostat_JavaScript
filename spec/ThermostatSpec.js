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


});
