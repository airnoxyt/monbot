const {MessageEmbed, MessageReaction} = require('discord.js')

module.exports.run =  async (client, message, args, settings) => {
          message.delete()
        
   if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Oups ! Tu n\' pas spécifié de nombres entre **1** et **100**' );

  const messages = await message.channel.messages.fetch({
      limit: Math.min(args[0], 100),
      before: message.id,
  });
  message.delete()
  await message.channel.bulkDelete(messages);
  message.channel.send(`Vous avez supprimé ${args[0]} message !`).then(msg =>{
    msg.delete({ timeout : 5000})
  })
  const embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor("#ff6600")
  .setDescription(`**Action**:  __purge__\n**Nombre(s) de messages** : ${args[0]}\n **Salon** ${message.channel} `)
  .setTimestamp()
    };

    module.exports.help = {
      name: "purge",
      aliases : ['clear'],
      category: "admin",
      description: "Permet de supprimé des message plus rapidement",
      usage : '<nombres_de_message>',
      isUserAdmin: false,
     
      permissions : true,
      args: true
      }