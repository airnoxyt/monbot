const {MessageEmbed} = require('discord.js')

module.exports.run = (client, message, args, settings) => {
    
     
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spéciale !');
    user ? message.guild.member(user).kick(reason) : message.channel.send('Utilisateur **inexistant !**')
  
const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id}),`)
    .setColor("#ffa500")
    .setDescription(`**Action**:  __kick__\n **Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

      if(settings.logChannel === 'undefined'){
        return; 
      }else{
        client.channels.cache.get(settings.logChannel).send(embed);
      }
    };

    module.exports.help = {
      name: "kick",
      aliases : ['expulse'],
      category: "admin",
      description: "Permet de kick une personnes",
      usage : '<@user>',
      isUserAdmin: true,
     
      permissions : true,
      args: true
      }