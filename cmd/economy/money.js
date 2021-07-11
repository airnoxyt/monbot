const Discord = require('discord.js')
const db = require('quick.db')
const economy =  new db.table("Economy")

module.exports.run = async (client , message, args)  => {
    message.delete()
  const user = message.mentions.users.first() || message.author
  let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
  if(argent === null){argent = 0}
  const vousmeme = new Discord.MessageEmbed()
  .setTitle('Votre budget')
  .setColor('GREEN')
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
  .setDescription(`Vous avez ${argent}ApoCoins`)
  .setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')
  const unepersonne = new Discord.MessageEmbed()
  .setThumbnail(user.displayAvatarURL({dynamic : true}))
  .setTitle('Budget de : ' + user.username)
  .setColor('GREEN')
  .setDescription(`${user} à  ${argent}ApoCoins`)
  .setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')
  
  
   if(user.id === message.author.id){
      var util = vousmeme
  }else{
      var util = unepersonne
  }
 return message.channel.send(util)

   
  
    
 }
 module.exports.help = {
   name: "money",
   aliases : [],
   category: "economy",
   description: "Regardez votre budget",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }