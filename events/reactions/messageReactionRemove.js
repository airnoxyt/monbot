const {MessageEmbed, TeamMember} = require('discord.js')
const settings = require('../../config.json')
module.exports = async (client, reaction , user) => {

if(user.bot) return;
console.log('reaction intéragie')
const reactionadd = new MessageEmbed()
.setTitle('Une personne vient de retirer sa réaction')
.setDescription(`${user}  à retirer sa réaction (${reaction.emoji}) dans ${reaction.message.channel}`)
.setFooter(`ID du message ${reaction.message.id}`)
client.channels.cache.get(settings.logChannel).send(reactionadd)
}