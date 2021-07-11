const Discord = require('discord.js')
const { id } = require('monk')
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
 economy.subtract(`money_${message.guild.id}_${user.id}`, nbr)
 let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
 const vousmeme = new Discord.MessageEmbed()
.setTitle('Vous vous êtes débité(s) de l\'argent')
.setColor('GREEN')
.setDescription(`Vous vous êtes retirer ${nbr}ApoCoins vous avez maintenant ${argent}ApoCoins`)
.setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')
const unepersonne = new Discord.MessageEmbed()
.setTitle('Vous avez débité(s) de l\'argent à une personne')
.setColor('GREEN')
.setDescription(`Vous avez retirer ${nbr}ApoCoins à ${user} maintenant il a ${argent}ApoCoins`)
.setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')


 if(user.id === message.author.id){
    var util = vousmeme
}else{
    var util = unepersonne
}
 return message.channel.send(util)

   
  
    
 }
 module.exports.help = {
   name: "removemoney",
   aliases : [],
   category: "economy",
   description: "Regardez votre budget",
   usage : '<@user> <nombre>',
   isUserAdmin: false,
   permissions : true,
   args: true
   
 }