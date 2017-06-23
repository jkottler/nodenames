const _ = require('lodash');
const fs = require('fs');

const card = require('./card');

const words = fs.readFileSync('codenames-word-list.txt').toString().split('\n');

var newGame = () => {
  var wordList = _.sampleSize(words, 25);
  var result = {};
  var first = _.sample(['red', 'blue']);
  result.firstPlayer = first;
  var teams = [
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'assassin',
    'bystander',
    'bystander',
    'bystander',
    'bystander',
    'bystander',
    'bystander',
    'bystander',
  ];
  teams.push(first);

  result.cards = [];
  wordList.forEach(function(word) {
    // deal random team
    var index = _.random(0, teams.length - 1);
    var team = teams[index];
    teams.splice(index, 1);

    // make new card
    var newCard = new card.card(word, false, team);

    result.cards.push(newCard);
  });

  return result;
};

module.exports = {
  newGame,
};
