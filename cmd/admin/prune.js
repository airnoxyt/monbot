const {MessageEmbed} = require('discord.js')

module.exports.run =  async (client, message, args, settings) => {
    let user = message.guild.member(message.mentions.users.first());
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('Oups ! Tu n\' pas spécifié de nombres entre **1** et **100**' );

    const messages = (await message.channel.messages.fetch({
        limit:  100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    messages.length =  Math.min(args[1], messages.length);

    if (messages.length === 0 || !user ) return message.reply('Oups ! Aucun mesage a supprmié de cette utilisateur');

    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);
    message.delete()
    
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#ff6600")
    .setDescription(`**Action**:  __prune__\n**Nombre(s) de messages** : ${args[1]}\n **Utilisateur**  ${args[0]} `)
    .setTimestamp()
    
    if(settings.logChannel === 'undefined'){
      return;
    }else{
      client.channels.cache.get(settings.logChannel).send(embed);
    }
    };

    module.exports.help = {
      name: "prune",
      aliases : ['aide'],
      category: "admin",
      description: "Permet de supprimé les messages d'une personnes",
      usage : '<@user> <nombre_de_message>',
      isUserAdmin: false,
     
      permissions : true,
      args: true
      }
