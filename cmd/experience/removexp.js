const Levels = require('discord-xp')
const Discord = require('discord.js')
module.exports.run = async (client , message, args)  => {
    message.delete()
  const member = message.mentions.members.first()
  const number = parseInt(args[1]);
 
  if(!member) return message.reply('merci de mettre un membre !') 
   const target = await Levels.fetch(member.user.id, message.guild.id)
  if(!number || isNaN(number)) {
      message.reply('Merci de mettre un nombre')
      return;
  }
  if(number){
      if(number > target.xp) message.reply('Le nombre est trop grand par rapport au nombre d\'xp que la personne possède')
  }
  if(number < target.xp){ 
    await Levels.appendXp(member.id, message.guild.id, number*-1)
      const add = new Discord.MessageEmbed()
      .setTitle('XP supprimé')
      .setDescription(`${member} à moins ${number}xp ! Il a ${target.xp + number*-1}xp`)
      .setTimestamp()
      message.channel.send(add)
  }
   
  
    
 }
 module.exports.help = {
   name: "removexp",
   aliases : [],
   category: "experience",
   description: "Permet de supprimé de l'xp",
   usage : '',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }