const {MessageEmbed, TeamMember, UserManager} = require('discord.js')
const settings = require('../../config.json')
module.exports = async (client, reaction , user) => {
    const chn = reaction.message.channel.id
    if(reaction.message.channel.id === "859005279538118657"){

            reaction.users.remove(user.id)
            reaction.message.guild.member(user).roles.add('859006447051735071')
            const verifyes  = new MessageEmbed()
.setTitle('Vérification')
.setDescription(`${user}  à réagis à passez la vérification`)
.setFooter(`ID du message ${reaction.message.id}`)
client.channels.cache.get(settings.logChannel).send(verifyes)
reaction.message.channel.id.updateOverwrite(reaction.users.id, {'VIEW_CHANNEL' : false})

}
if(user.bot) return;
console.log('reaction intéragie')
const reactionadd = new MessageEmbed()
.setTitle('Une personne vient de réagire')
.setDescription(`${user}  à réagis à ${reaction.emoji} dans ${reaction.message.channel}`)
.setFooter(`ID du message ${reaction.message.id}`)
client.channels.cache.get(settings.logChannel).send(reactionadd)

/* Starboard */
if(reaction.message.partial) await reaction.message.fetch(true)
if(reaction.partial) await reaction.fetch();
if(reaction.message.author.bot || user.bot) return;
let starboardChannel = reaction.message.guild.channels.cache.get('859028966891454474')
let starboardfetch = await starboardChannel.fetch({limit: 100})
let exist = starboardfetch.messages.cache.find(m => m.embeds.length >= 1 && m.embeds[0].title === "⭐・ Starboard" && m.embeds[0].fields[0].value.match(reaction.message.id))
if(exist) return;
if(reaction.emoji.name === "⭐"){
    let count = reaction.users.cache.filter(x => reaction.message.author.id !== x.id && !x.bot).array().length
    if(count >= 1){
        const embed = new MessageEmbed()
        .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL({dynamic : true}))
        .setTitle('⭐・ Starboard')
        .setDescription(reaction.message.content.length <= 0 ? "" : reaction.message.content)
        .addField("Message :", `[Lien](https://discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id})`)
        if(reaction.mesage.attachments.array().length >= 1) embed.setImage(reaction.message.attachments.array()[0].proxyURL)
        starboardChannel.send(embed)
    }
}



}