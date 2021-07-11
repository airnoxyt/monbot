const db = require('../../db.json')
const settings = require('../../config.json')
const {MessageEmbed} = require('discord.js')
module.exports = async (client, member,guild) => {
  delete  db["users"][member.id]
    const Left = new MessageEmbed()
    .setTitle('Aurevoir !')
    .setDescription(`${member.user.username} vient de partire de ` + 'ApoNox !')
    .setColor('RED')
    client.channels.cache.get(settings.welcomeChannel).send(Left)

   await client.channels.cache.get('860804420283400192').setName(`『📊』membre total ${member.guild.memberCount.toLocaleString()}`)
}
