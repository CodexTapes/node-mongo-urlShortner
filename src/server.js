const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const validUrl = require('valid-url');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    const htmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlPath);
});

app.post('/urllink', (req, res) => {
    console.log(req.body);
});

app.set('port', process.env.PORT || 4100);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running @ PORT ${server.address().port}`);
});