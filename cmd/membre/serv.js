const Discord = require('discord.js');


module.exports.run = (client, message,args) => {
    
    let UseEmbed = new Discord.MessageEmbed()
    
    .setAuthor(message.author.tag)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
    .addField('Nom du Serveur', `${message.guild.name}`)
    .addField('Propriétaire', message.guild.owner)
    .addField('`👤` Nombre de membre', message.guild.memberCount)
    .addField('Nombre de rôle(s)', message.guild.roles.cache.size)
    .setFooter('Les information du serveur sont présente !')
    message.delete()   
    message.react("736181495881924658")
    message.react("746679342075084900")
    message.channel.send(UseEmbed)
}
module.exports.help = {
    name: "serv",
    aliases : ['is'],
    category: "membre",
    description: "Permet de voir les info du serv",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }