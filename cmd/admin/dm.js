const {MessageEmbed} = require('discord.js')
const settings = require('../../config.json')
module.exports.run = async (client , message, args)  => {
    message.delete()
    const member = message.mentions.members.first() || message.members.id()
    const msg = args.splice(1).join(' ')
    if(member === undefined){
        message.reply('Utilisateur non trouvé avez bien mensionnez le membre ?')
        return;
    }
    const embed = new MessageEmbed()
    .setTitle('Un Admin vous à envoier un message privé')
    .setDescription(`Contenue du message : ${msg}`)
    member.send(embed)
    
    const logs = new MessageEmbed()
    .setTitle('DM commande utilisé')
    .setDescription(`${message.author} à envoyer un message à ${member} avec comme contenue : ${msg}`)
    client.channels.cache.get(settings.logChannel).send(logs)
 }
 module.exports.help = {
   name: "dm",
   aliases : [''],
   category: "admin",
   description: "permet d'envoier un DM a un utilisateur",
   usage : '<@user> <msg>',
   isUserAdmin: false,
  
   permissions : true,
   args: true
   
 }