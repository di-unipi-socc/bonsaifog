var SerialPort = require('serialport');
var request = require('request');

const CLOUD_URL = 'https://api.thingspeak.com/update?api_key=';
const UPDATE_TIME = 1; // seconds
const MOISTURE = 'field1';


const MICROBIT_PORT = 'COM4';

// Connect with the micro:bit
var port = new SerialPort(MICROBIT_PORT, {
  baudRate: 115200,
  parser: SerialPort.parsers.readline('\n')
}, function (err) {
  if (err)
    return console.log('Error: ', err.message);
  console.log('connected');
});

// Run when new data is receveid from micro:bit 
port.on('data', function(data){
  var data = data.split(':');
  if (data.length == 2){
    var name = data[0];
    var value = parseInt(data[1]);
    console.log(name + ': ' + value);
    // TODO: send value to cloud MOISTURE=value

  }
});





// LIBRARY CODE
function startFog(f){
  setTimeout(() => {f(); startFog(f)}, UPDATE_TIME * 1000);
}

function pushData (params, cb=()=>{}) {
  var url = `${CLOUD_URL}&${params}`;
  request.get(url, (error, response, body) => {
    if (error) return cb(error);
    console.log(`request on "${url}" status ${response.statusCode} body ${body}`);
    cb (null, body);
  });
}


// WINDOWS:
// List ports with ".\node_modules\.bin\serialport-list.cmd"
// Example port on Windows COM4
// LINUX/MAC:
// List ports with "node_modules/.bin/serialport-list"
// Example port on Linux/Mac '/dev/ttyACM0'