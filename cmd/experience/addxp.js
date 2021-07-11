const Levels = require('discord-xp')
const Discord = require('discord.js')
module.exports.run = async (client , message, args)  => {
    message.delete()
  const member = message.mentions.members.first()
  const number = parseInt(args[1]);
  if(!member) return message.reply('merci de mettre un membre !') 
  if(!number || isNaN(number)) {
      message.reply('Merci de mettre un nombre')
      return;
  }
  if(number){
    console.log(number)
      if(number > 100000000000) message.reply('Le nombre est trop grand...')
  }
  if(number < 100000000000){ 
    
    await Levels.appendXp(member.id, message.guild.id, number)
    const target = await Levels.fetch(member.user.id, message.guild.id)
      const add = new Discord.MessageEmbed()
      .setTitle('XP ajouté')
      .setDescription(`${member} à obtenue ${number}xp en plus ! Il a ${target.xp}xp`)
      .setTimestamp()
      message.channel.send(add)
  }
   
  
    
 }
 module.exports.help = {
   name: "addxp",
   aliases : [],
   category: "experience",
   description: "Permet d'ajoutez de l'xp",
   usage : '',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }