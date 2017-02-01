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
    })
  });
});
