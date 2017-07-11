const m = require('mithril');

var Btns = {
  view: function () {
    return [m("button", { onclick: clearGame }, "Clear"),
    m("button", { onclick: newGame }, "New Game")]
  }
}

var game;
newGame();

var Card = {
  view: function () {
    if (typeof (game) != 'undefined' && game.cards.length > 0) {
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
  game = undefined;
  // m.redraw();
}



function newGame() {
  m.request({
    method: "GET",
    url: "/new",
  })
    .then(function (data) {
      game = data;
      console.log(data);
    })
}

var layout = document.getElementById("layout");
var menu = document.getElementById("menu");

m.mount(menu, Btns)
m.mount(layout, Card)
