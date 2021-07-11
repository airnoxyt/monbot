const figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = async (client, message, args, settings) => {
if(!args[0]) return message.channel.send('Please provide some text');

msg = args.join(" ");

figlet.text(msg, function (err, data){

    if(data.length > 2000) return message.channel.send('Merci de mettre un text qui a moins de 2 000 caractères')

    message.channel.send('```' + data + '```')
})
}
module.exports.help = {
    name: "ascii",
    aliases : [''],
    category: "fun",
    description: "",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }