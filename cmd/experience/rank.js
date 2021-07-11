const Levels = require('discord-xp')
const Discord = require('discord.js')
const canvacord = require('canvacord')
module.exports.run = async (client , message, args)  => {
    message.delete()
  const target = message.mentions.members.first() || message.author
  const member = await Levels.fetch(target.id, message.guild.id)
  if(!target) return message.channel.send(`Cette personne n'a pas de levels sur ce serveur :( `)
  const embed = new Discord.MessageEmbed()
  .setTitle('Rank de :' + `${member.user.tag}`)
  .setDescription(`${member.user.tag} est au niveaux ${target.level} et à ${target.xp}xp/${Levels.xpFor(target.level +1)}xp`)
  .setTimestamp()
  message.channel.send(embed)
 /*const neddXp = Levels.xpFor(parseInt(user.level) +1)    
 const img = '../../rank.jpg'
 const rank = new canvacord.Rank()
 .setAvatar(target.displayAvatarURL())
 .setBackground('COLOR'," #092bd6" )
 .setRank(1 , 'RANK' , false)
 .setLevel(user.level)
 .setCurrentXP(user.xp)
 .setRequiredXP(neddXp)
 .setStatus(target.presence.status)
 .setProgressBar("#f459ff", "COLOR")
 .setUsername(target.username)
 .setDiscriminator(target.discriminator)
 rank.build()
 .then(data => {
   const attachment = new Discord.MessageAttachment(data , "RankCard.png")
   message.channel.send(attachment)
 })*/
 }
 module.exports.help = {
   name: "rank",
   aliases : ['level' ,'ranks'],
   category: "experience",
   description: "Permet de voir son levels",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }