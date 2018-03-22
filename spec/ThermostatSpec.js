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

    it('does not increase the temperature past 25 degrees if PSM is on', function() {
      for (i = 0; i < 50; i++) {
        thermostat.increaseTemperature();
      };

      expect(thermostat.currentTemperature()).toEqual(25);
    });

    it('does not increase the temperature past 32 degrees if PSM is off', function() {
      thermostat.togglePowerSavingMode();

      for (i = 0; i < 50; i++) {
        thermostat.increaseTemperature();
      };

      expect(thermostat.currentTemperature()).toEqual(32);
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

  describe('isPowerSavingModeEnabled', function() {
    it('returns true on initialization', function() {
      expect(thermostat.isPowerSavingModeEnabled()).toEqual(true);
    });

    it('maximum thermostat temperature is 25 degrees if power saving mode is enabled', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('maximum thermostat temperature is 32 degress uf power saving mode is disabled', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat.maximumTemperature()).toEqual(32);
    });
  });

  describe('togglePowerSavingMode', function() {
    it('toggles PSM mode from true to false', function() {
      thermostat.togglePowerSavingMode();
      expect(thermostat._powerSavingModeEnabled).toEqual(false)
    });

    it('toggles PSM mode from false to true', function() {
      //false
      thermostat.togglePowerSavingMode();
      // true
      thermostat.togglePowerSavingMode();
      expect(thermostat._powerSavingModeEnabled).toEqual(true)
    });
  });

  describe('resetTemperature', function() {
    it('resets the thermostat temperature to 20', function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe('currentEnergyUsage', function() {
    it('returns low-usage if temeperature is below 18 degrees', function() {
      for (i = 0; i < 15; i++) {
        thermostat.descreaseTemperature();
      };

      expect(thermostat.currentEnergyUsage()).toEqual("Low Usage");
    });

    it('returns high usage if temperature is over 25 degrees', function() {
      for (i = 0; i < 15; i++) {
        thermostat.increaseTemperature();
      };

      expect(thermostat.currentEnergyUsage()).toEqual("High Usage");
    });

    it('returns medium usage if temeperature is within 18 to 25 degrees', function() {
      thermostat.descreaseTemperature();
      expect(thermostat.currentEnergyUsage()).toEqual('Medium Usage');
    });
  });
});
