let express = require('express');

let app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: true}));

let router = require ('./routes');
app.use('/', router);

app.listen(8000, function () {
    console.log ('Running on port 8000');
});
