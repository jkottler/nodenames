const express = require('express');
const game = require('./game');

const app = express();

const port = process.env.PORT || 3000;

app.use('/static', express.static('bin'))
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
})

app.get('/new', (req, res) => {
  let result = new game.Game()
  res.send(result);
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
