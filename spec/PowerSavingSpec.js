'use strict';

describe('PowerSaving', function(){
  var powerSaving;

  beforeEach(function(){
    powerSaving = new PowerSaving()
  });

  it('has a mode', function(){
    expect(powerSaving.getMode()).toBeDefined()
  });

  describe('setMode', function(){
    it('changes mode to on', function(){
      powerSaving.setMode('On')
      expect(powerSaving.getMode()).toEqual('On')
    });

    it('saving mode is on by default', function(){
      expect(powerSaving.getMode()).toEqual('On')
    });
  });


  describe('maxTemp', function(){
    it('sets max temp to 25C when state is on', function(){
      powerSaving.setMode('On')
      expect(powerSaving.getMax()).toEqual(25)
    });
    it('sets max temp to 32C when state is off', function(){
      powerSaving.setMode('Off')
      expect(powerSaving.getMax()).toEqual(32)
    });
    it('throws error when setting is undefined', function (){
      expect(function(){powerSaving.setMode('banana')}).toThrow("Unexpected setting.")
    });
  });
});
