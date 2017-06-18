const card = function (word) {
    var result = {
        word: word,
        revealed: false,
        team: undefined
    }
    return result;
};

module.exports = {
    card
};