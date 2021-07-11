const config = require('../../config.json')
const {MessageEmbed} = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')
module.exports.run = async (client , message, args)  => {
    message.delete()
    const support = new MessageEmbed()
    .setTitle('Support ApoNox')
    .setDescription('Merci de cliquer sur le bouton pour ouvrire un ticket')
    let button = new MessageButton()
    .setLabel("J'ai besoin d'aide")
    .setStyle("blurple")
    .setEmoji("📩")
    .setURL("https://discord-buttons.js.org")
await message.channel.send(support).then(m => {
  m.channel.send(button)
});
    
 }
 module.exports.help = {
   name: "bouton",
   aliases : [''],
   category: "owner",
   description: "",
   usage : '',
   isUserAdmin: false,
  
   permissions : true,
   args: false
   
 }