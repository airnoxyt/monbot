const {MessageEmbed} = require('discord.js')
const settings = require('../../config.json')
module.exports = async (client, invite) => {
    const fetchGuildAuditLogs = await invite.guild.fetchAuditLogs({
        limit: 1,
        type: 'INVITE_CREATE'
    });

    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
       const { executor } = latestChannelDeleted;
    const embed = new MessageEmbed()
    .setAuthor("Invite crée de : " + executor.username)
    .setColor("#ff6600")
    .setDescription(`**Lien** : ${invite.url}\n **Nombre d'utilisation :** ${invite.maxUses}`)
    .setTimestamp()
    .setFooter(executor.username, executor.avatarURL())
    client.channels.cache.get(settings.logChannel).send(embed)
}