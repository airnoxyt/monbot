const Discord = require('discord.js');

module.exports.run =  (client, message, args) => {



    let EmbedDescription = args.join(" ");
    let say = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(EmbedDescription)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp()
    .setColor('409fff')
    if(EmbedDescription.length < 1) return message.channel.send(noTexteToSend)
    message.delete().catch(O_o => { });
    message.channel.send(say)
}
module.exports.help = {
    name: "say",
    aliases : ['embed'],
    category: "membre",
    description: "Permet faire un message sous form d'embed",
    usage : '<votre_mesage>',
    isUserAdmin: false,
   
    permissions : false,
    args: true
    }