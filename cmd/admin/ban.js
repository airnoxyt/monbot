const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args, settings) => {
  message.delete()
  let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
  const reason = args[1] || "Aucune raison spécifique";

  toBan.ban({
      reason: reason
  })
  message.channel.send(`${toBan} vient d'être ban pour la raison: ${reason}`).then(msg =>{
    msg.delete({timeout : 5000})
  })
  const embed = new MessageEmbed()
  .setTitle('Personne Ban du serveur')
  .setDescription(`utilisateur : ${toBan}\n Raison : ${reason}`)
  .setTimestamp()
  if(settings.logChannel === 'undefined'){
    return; 
  }else{
    client.channels.cache.get(settings.logChannel).send(embed);
  }
  }


    module.exports.help = {
      name: "ban",
      aliases : ['bannisement'],
      category: "admin",
      description: "Permet de ban une personnes",
      usage : '<@user> <raison-du-ban>',
      isUserAdmin: true,
     
      permissions : true,
      args: true
      }