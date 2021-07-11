const { tictactoe } = require("reconlx");
module.exports.run = async (client , message, args)  => {
    message.delete()
const member = message.mentions.members.first()
if(!member) message.reply('Merci de mettre un ami avec qui jouer')
    new tictactoe({
        message: message,
        player_two: message.mentions.members.first(),
    });

 }
 module.exports.help = {
   name: "morpions",
   aliases : ['morpion'],
   category: "fun",
   description: "",
   usage : '',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }