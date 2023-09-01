var celsiusTemperatures = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusTemperatures.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log("Celsius Temperatures:", celsiusTemperatures);
console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);
