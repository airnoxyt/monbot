const Discord = require('discord.js')
module.exports.run = async (client , message, args)  => {
    message.delete()
    if(!message.author.id === "523811999856066570") return;
    const ticket = new Discord.MessageEmbed()
    .setTitle('Bienvenue au support de ApoNox !')
    .setDescription('Vous avez besoin d\'aide ?\nVous vous trouvé au bonne endroit !\nMerci de réagire à la réaction `✅` pour ouvrire un ticket')
    .setTimestamp()
    client.channels.cache.get('859004591554428948').send(ticket).then( m => {
        m.react('✅')
    })
    
 }
 module.exports.help = {
   name: "ticket",
   aliases : [''],
   category: "",
   description: "",
   usage : '',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }