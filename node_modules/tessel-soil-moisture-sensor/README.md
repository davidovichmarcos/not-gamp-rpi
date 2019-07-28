# Tessel Soil Moisture Sensor

Tessel + Soil Moisture Sensor (SEN-13322)

## Required Hardware

- Tessel
- Soil Moisture Sensor (SEN-13322)

## Install

`npm install tessel-soil-moisture-sensor --save`

## Usage

```
const getSoilMoistureReading = require('tessel-soil-moisture-sensor');

getSoilMoistureReading((value) => {
  // value contains calibrated value and normal value
  console.log(value);
});
```

Check `test.js` for working example and also feel free to contribute.
