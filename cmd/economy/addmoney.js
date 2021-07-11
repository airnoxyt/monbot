const Discord = require('discord.js')
const db = require('quick.db')
const economy =  new db.table("Economy")

module.exports.run = async (client , message, args)  => {
    message.delete()
  const user = message.mentions.users.first() || message.author
  if(user === message.mentions.users.first()){
    
    var nbr = args[1]
  }
  if(user === message.author){
 
    var nbr = args[0]
  }
  const nonumber = new Discord.MessageEmbed()
  .setTitle('Vous n\'avez pas mis de nombre')
  .setColor('RED')
  .setDescription('Merci de mettre un nombre !')
  if(isNaN([nbr])) return message.channel.send(nonumber)
 economy.add(`money_${message.guild.id}_${user.id}`, nbr)
 let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
 const vousmeme = new Discord.MessageEmbed()
.setTitle('Vous vous êtes donner de l\'argent')
.setColor('GREEN')
.setDescription(`Vous vous êtes ajoutez ${nbr}ApoCoins vous avez maintenant ${argent}ApoCoins`)
.setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')
const unepersonne = new Discord.MessageEmbed()
.setTitle('Vous avez donner de l\'argent à une personne')
.setColor('GREEN')
.setDescription(`Vous avez ajoutez ${nbr}ApoCoins à ${user} maintenant il a ${argent}ApoCoins`)
.setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')


 if(user.id === message.author.id){
    var util = vousmeme
}else{
    var util = unepersonne
}
 return message.channel.send(util)

   
  
    
 }
 module.exports.help = {
   name: "addmoney",
   aliases : [],
   category: "economy",
   description: "Regardez votre budget",
   usage : '<@user> <nombre>',
   isUserAdmin: false,
   permissions : true,
   args: true
   
 }