const { MessageEmbed } = require("discord.js")
const ytsr = require("ytsr")
module.exports.run = async (client, message, args, settings) => {
    const query = args.join("")
    if (!query) return message.channel.send('Oups ! merci de mettre le nom de la `vidéo` que vous chercher !')
    const res = await ytsr(query).catch(e => {
        return message.channel.send('Oups ! `Aucun aucune vidéo trouvé`')
    })
    const video = res.items.filter(i => i.type === "video")[0];
    if (!video) return message.channel.send("Aucune video vidéo trouvé")
    const embed = new MessageEmbed()
    .setTitle(video.title)
    .setImage(video.thumbnail)
    .setColor('RED')
    .setDescription(`**[${video.link}](${video.link})**`)
    .setAuthor(video.author.name)
    .addField("Vue", video.views.toLocaleString(), true)
    .addField("Durée", video.duration, true)
    message.channel.send(embed)
    }
    
    
    
    
    
    module.exports.help = {
        name: "youtube",
        aliases : ['yt-search'],
        category: "membre",
        description: "Recherche une vidéo youtube",
        usage : '<name>',
        isUserAdmin: false,
       
        permissions : false,
        args: false
        }