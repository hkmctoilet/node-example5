var express = require('express');
var firebase = require('firebase');
firebase.initializeApp({
	serviceAccount: "/json/htoilet-1c9d9-export.json",
    databaseURL: "https://htoilet-1c9d9.firebaseio.com",
});

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


