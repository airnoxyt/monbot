const Discord = require('discord.js')
const config = require('../../config.json')
module.exports.run = async (client , message, args)  => {
    message.delete()
    const idee = args.splice(0).join(' ')
    const user = message.author.username
    if(!idee){
      const embed = new Discord.MessageEmbed()
      .setTitle('ERREUR 404')
      .setColor('RED')
      .setDescription(`Merci de mettre votre idée en faisant : ${config.prefix}suggest`)
     message.reply(embed)
    } else {
      const embed = new Discord.MessageEmbed()
      .setTitle('💡 - SUGGESTION DEMANDER')
      .setColor('GREEN')
      .setAuthor(`De : ${user.username}`)
      .setDescription(`Idée demander : ${idee}\nMerci de réagire pour qu'on sache votre avie`)
      .setFooter('Pour faire une suggestion merci de faire -suggest <voter_idee>')
     client.channels.cache.get('859004599558209547').send(embed).then((m) => {
       m.react('✅')
       m.react('❎')
     })}
      }
 module.exports.help = {
   name: "suggestion",
   aliases : ['suggest'],
   category: "membre",
   description: "renvoie votre suggestion dans un salons précis",
   usage : '<idée>',
   isUserAdmin: false,
   permissions : false,
   args: true
   
 }