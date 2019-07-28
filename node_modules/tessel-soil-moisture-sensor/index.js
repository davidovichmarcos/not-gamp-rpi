const tessel = require('tessel');

const getSoilMoistureReading = (callback, boardPin, calibrationValue) => {
  // default pin is 2
  const pin = tessel.port.B.pin[boardPin || 2];

  pin.analogRead((error, value) => {
    // default calibrated value for 3.3v is 78
    const calibratedValue = value/(calibrationValue || 78) * 100;
    callback({
      value: value,
      calibratedValue: calibratedValue,
    });
  });

}

 module.exports = getSoilMoistureReading;
