//var request = require('request');
var http = require('http');


var loginregister = document.getElementById("loginregister");
loginregister.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('login').classList.add('is-not-shown');
    document.getElementById('register').classList.remove('is-not-shown');
})

var loginforgot = document.getElementById("loginforgot");
loginforgot.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('login').classList.add('is-not-shown');
    document.getElementById('forgot').classList.remove('is-not-shown');
})

var registerlogin = document.getElementById("registerlogin");
registerlogin.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('login').classList.remove('is-not-shown');
    document.getElementById('register').classList.add('is-not-shown');
})

var registerforgot = document.getElementById("registerforgot");
registerforgot.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('register').classList.add('is-not-shown');
    document.getElementById('forgot').classList.remove('is-not-shown');
})

var forgotregister = document.getElementById("forgotregister");
forgotregister.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('register').classList.remove('is-not-shown');
    document.getElementById('forgot').classList.add('is-not-shown');
})

var forgotlogin = document.getElementById("forgotlogin");
forgotlogin.addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('login').classList.remove('is-not-shown');
    document.getElementById('forgot').classList.add('is-not-shown');
})

var loginform = document.getElementById("loginform");
loginform.addEventListener('submit',function(event){
  event.preventDefault()
  var options = {
      path: 'http://localhost/json.php',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    };

    var req = http.request(options, function(res) {
      console.log('Status: ' + res.statusCode);
      console.log('Headers: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (body) {
        console.log('Body: ' + body);
      
      });
    });
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write('{"string": "Hello, World"}');
    req.end();
})
