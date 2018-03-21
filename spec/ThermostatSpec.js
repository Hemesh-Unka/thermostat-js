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

  describe('increaseTemperature', function() {
    it('increases the current temperature by 1 degree', function() {
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(21);
    });
  });
});
