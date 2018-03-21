describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('currentTemperature', function() {
    it('returns a start temperature of 20 degrees', function() {
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });
});
