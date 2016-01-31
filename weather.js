$(function() {
var handleWeatherResponse = function(data) {
  console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather forecast for Chicago today is: " + data.currently.summary +
    ". The weather forecast for tomorrow is: " + data.daily.data[0].summary + " " +
          "The weather forecast 2 days from today is: " + data.daily.data[1].summary + " " +
          "The weather forecast 3 days from today is: " + data.daily.data[2].summary + " "

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
