const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports.run = async(client , message, args) => {
    message.delete();


    if (!message.channel.nsfw) return message.channel.send('Vous devez utiliser cette commande dans un salon nsfw !') 

    const image = await nsfw.pussy();
    const embed = new Discord.MessageEmbed()
        .setTitle(`Prend du plaisir....`)
        .setColor("RED")
        .setImage(image);
    message.channel.send(embed);


}
module.exports.help = {
    name: "pussy",
    aliases : [''],
    category: "nsfw",
    description: "",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    
}