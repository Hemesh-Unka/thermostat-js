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

  describe('descreaseTemperature', function() {
    it('decreases the current temperature by 1 degree', function() {
      thermostat.descreaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
    });

    it('does not decrease the current temperature if below 10 degrees', function() {

      for (i = 0; i < 50; i++) {
        thermostat.descreaseTemperature();
      };

      expect(thermostat.currentTemperature()).toEqual(10);
    });
  });

  describe('isAtMininumTemperature', function() {
    it('returns true if mininum temperature has been reached', function() {

      for (i = 0; i < 15; i++) {
        thermostat.descreaseTemperature();
      };

    expect(thermostat.isAtMininumTemperature()).toEqual(true);
    });
  });
});
