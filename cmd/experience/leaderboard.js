const Levels = require('discord-xp')
const Discord = require('discord.js')
module.exports.run = async (client , message, args)  => {
    message.delete()
    const rawLearboard = await Levels.fetchLeaderboard(message.guild.id , 5)
    if(rawLearboard.length < 1) message.reply('Personne est dans le classement')
    const leaderboard  = await Levels.computeLeaderboard(client, rawLearboard, true)
    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXp : ${e.xp}`)
    const embed = new Discord.MessageEmbed()
    .setTitle('Top 5 des utilisateur')
    .setDescription(lb.join("\n\n"))
    .setTimestamp()
    message.channel.send(embed)
 }
 module.exports.help = {
   name: "leaderboard",
   aliases : ['toplevel' ,'toprank'],
   category: "experience",
   description: "Permet de voirle classement des levels",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }