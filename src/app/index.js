const m = require('mithril');

var Btns = {
  view: function () {
    return [m("button", { onclick: clearGame }, "Clear"),
    m("button", { onclick: newGame }, "New Game")]
  }
}

var menu = document.getElementById("menu");



var game = { "firstPlayer": "blue", "cards": [{ "word": "CONTRACT", "revealed": false, "team": "blue" }, { "word": "CASINO", "revealed": false, "team": "red" }, { "word": "DATE", "revealed": false, "team": "assassin" }, { "word": "LAB", "revealed": false, "team": "blue" }, { "word": "UNICORN", "revealed": false, "team": "blue" }, { "word": "TABLE", "revealed": false, "team": "bystander" }, { "word": "NEW YORK", "revealed": false, "team": "red" }, { "word": "STRIKE", "revealed": false, "team": "blue" }, { "word": "FIGHTER", "revealed": false, "team": "blue" }, { "word": "STAFF", "revealed": false, "team": "blue" }, { "word": "LINE", "revealed": false, "team": "red" }, { "word": "KETCHUP", "revealed": false, "team": "blue" }, { "word": "MASS", "revealed": false, "team": "bystander" }, { "word": "HOOD", "revealed": false, "team": "bystander" }, { "word": "PISTOL", "revealed": false, "team": "blue" }, { "word": "PYRAMID", "revealed": false, "team": "blue" }, { "word": "CRICKET", "revealed": false, "team": "bystander" }, { "word": "ORANGE", "revealed": false, "team": "bystander" }, { "word": "BUG", "revealed": false, "team": "red" }, { "word": "CIRCLE", "revealed": false, "team": "bystander" }, { "word": "STAR", "revealed": false, "team": "red" }, { "word": "MAMMOTH", "revealed": false, "team": "red" }, { "word": "CHINA", "revealed": false, "team": "bystander" }, { "word": "FAN", "revealed": false, "team": "red" }, { "word": "PIT", "revealed": false, "team": "red" }] };

var Card = {
  view: function () {
    if (game.cards.length > 0) {
      return m(".card-list", game.cards.map(function (card) {
        let clr = card.revealed ? card.team : '';
        return m(`.card-item ${clr}`, { onclick: function () { card.revealed = !card.revealed; } }, m(".word", `${card.word}`))
      }))
    } else {
      return "";
    }
  }
}

function clearGame() {
  game.cards = [];
  // m.redraw();
}



function newGame() {
  m.request({
    method: "GET",
    url: "/new",
  })
    .then(function (data) {
      game = data;
    })
}

var layout = document.getElementById("layout");
console.log(layout)

m.mount(menu, Btns)
m.mount(layout, Card)
