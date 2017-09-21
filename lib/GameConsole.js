
function GameConsole(systemName) {
  this.systemName = systemName;

  this.play = function(game) {
    return systemName + ' plays ' + game.title;
  };
}

module.exports = GameConsole;