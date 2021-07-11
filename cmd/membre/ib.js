
const Discord = require('discord.js');
const UseEmbed = new Discord.MessageEmbed()

module.exports.run = (client, message,args) => {
    
    
    const UseEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.tag)
.setColor("#B4E0E0")
.setAuthor(`${client.user.username} Info`, client.user.avatarURL())
.addFields(
    { name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true},
    { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minute`, inline: true},
    { name : 'Serveur', value: `${client.guilds.cache.size.toString()}`, inline: true},
    { name : 'Salons', value: `${client.channels.cache.size.toString()}`, inline: true},
    { name : 'Utilisateur', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a,b) => a + b)}`, inline: true},
    { name : 'Version', value: `discord.js@12.2.0`, inline: true},
    { name: 'Prefix', value: `${settings.PREFIX}`, inline: true},
    {name: 'Logs Channel' , value: `<#${settings.logChannel}>`, inline: true},
    {name: 'Mesasge de bienvenue', value: `${settings.welcomeMessage}`, inline: true},
    {name: 'Channel de Bienvenue', value: `<#${settings.welcomeChannel}>`, inline: true},
    { name: 'Message d\'aurevoir', value: `${settings.leftMessage}`, inline: true},
    {name: 'Channel d\'aurevoire', value: `<#${settings.leftChannel}>`, inline: true},
    {name: 'Règlement du `serveur`', value: `${settings.reglement}`},
    {name : 'Anti-pub', value: `${settings.antipub}` , inline: true},
    {name: 'Channel Ticket', value: `<#${settings.ticketChannel}>`, inline: true}
)

    
        message.delete();
       message.channel.send(UseEmbed) 
     
        
}

module.exports.help = {
    name: "ib",
    aliases : ['ibot'],
    category: "membre",
    description: "Permet de voir les info du bot",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }