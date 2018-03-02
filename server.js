const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
})),
    
app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

//app.use'/people', require('')

app.listen(PORT, ()=> {
    console.log(`${PORT} is alive and ready for action!`)
})