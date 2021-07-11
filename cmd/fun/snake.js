const SnakeGame = require('snakecord');
module.exports.run =  async (client, message, args, settings) => {
   message.delete()

    const snakeGame = new SnakeGame({

   title: 'Snake Game',

   color: "GREEN",

   timestamp: false,

   gameOverTitle: "Game Over"

});
return snakeGame.newGame(message)

};




module.exports.help = {
    name: "snake",
    aliases : [''],
    category: "fun",
    description: "",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }