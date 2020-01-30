const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
app.set('port', process.env.PORT || 3000);

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.render('calc.html');
});


// // create a route for the app
// app.get('/', (req, res) => {
//   //res.send('Hello World');
//   res.render('index.html')
// });

// make the server listen to requests

app.listen(app.get('port'),() =>{
  console.log('server on port',app.get('port'));
});