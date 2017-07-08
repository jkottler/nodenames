const _ = require('lodash');
const fs = require('fs');

const card = require('./card');

const words = fs.readFileSync('codenames-word-list.txt').toString().split('\n');

var newGame = () => {
  var result = {};
  var wordList = _.sampleSize(words, 25); // get words for game

  var teams = []; // an array to hold all the teams to be assigned for this game
  var first = _.sample(['red', 'blue']); // set first player
  result.firstPlayer = first;
  teams.push(first);

  // build layout of teams
  const teamSize = {
    red: 8,
    blue: 8,
    bystander: 7,
    assassin: 1,
  };

  for (var team in teamSize) {
    // if (teamSize.hasOwnProperty(team)) {
    for (let i = 0; i < teamSize[team]; i++) {
      teams.push(team);
      // }
    }
  }

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
