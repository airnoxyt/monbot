const Discord = require("discord.js");

module.exports.run = async (client, message, args, settings) => {

    let noAdminPerm = new Discord.MessageEmbed()
    .setDescription(` __Merci d'avoir la permission **Administrateur**__ !`)
    .setColor('ff0000')


    let pollText = args.join(" ");
    let poll = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(pollText)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setTimestamp()
    .setColor('409fff')
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noAdminPerm)
    message.delete().catch(O_o => { });
    message.channel.send(poll).then(async message => {
    message.react("✅")
    message.react("❌")})
    
}

module.exports.help = {
    name: "poll",
    aliases : ['sondage'],
    category: "admin",
    description: "Permet de faire un sondage",
    usage : '<@user>',
    isUserAdmin: false,
   
    permissions : true,
    args: true
    }