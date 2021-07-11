const Discord = require('discord.js')
module.exports.run = async (client , message, args)  => {
    message.delete()
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    const reasons = args.slice(1).join(" ")
    if(!user){
      message.reply('merci de mettre un membre').then(m => {
        m.delete({timeout : 5000})
      })
    }
    if(!reasons){
      message.reply('merci de mettre une raison').then(m => {
        m.delete({timeout : 5000})
      })
    }
    if(user){
      if(reasons){
         const report = new Discord.MessageEmbed()
    .setTitle('Reporte reçus !')
    .setAuthor(message.author.username , message.author.displayAvatarURL())
    .setDescription(`Reporte reçus par ${message.author.username}\nContre ${user}\nRaison ${reasons}`)
    .setTimestamp()
    client.channels.cache.get('859174131564281896').send(report).then(m => {
      m.react('⚠️')
     
    })
      }
    }
      
        
    
    

 
    
 }
 module.exports.help = {
   name: "report",
   aliases : [''],
   category: "membre",
   description: "Permet de report un membre au staff",
   usage : '<@userr ou userr_id> <motif>',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }