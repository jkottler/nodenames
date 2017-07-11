const express = require('express');
const game = require('./game');

const app = express();
app.use('/static', express.static('bin'))
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
})

app.get('/new', (req, res) => {
  let result = new game.Game()
  res.send(result);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
