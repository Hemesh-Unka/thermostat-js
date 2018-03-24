$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.descreaseTemperature();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#toggle').on('click', function() {
    thermostat.togglePowerSavingMode();
    if (thermostat._powerSavingModeEnabled) {
      $('#toggle').text('PSM On');
    } else {
      $('#toggle').text('PSM Off');
    }
    updateTemperature();
  });

  function getWeather(city = "London,uk") {
    var url = 'http://openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=b6907d289e10d714a6e88b30761fae22';
    var units = '&units=metric';

    $.get(url + token + units, function(data) {
      $('#outside-weather').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon +'.png');
      $('#city').text(data.name);
      $('#city-temperature').text(`${Math.floor(data.main.temp)}°C`);
    });
  };

  function updateProgressBar() {
    var range = thermostat.maximumTemperature() - thermostat.mininumTemperature();
    $('#progress').attr('style', `width:${(thermostat.currentTemperature()-thermostat.mininumTemperature())/(range/100)}%`);
  };

  function updateTemperature() {
    $('#temperature').text(`${thermostat.currentTemperature()}°C`);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
    $('#temperature').attr('class', thermostat.currentEnergyUsage());

    updateProgressBar();
    getWeather();
  };
});
