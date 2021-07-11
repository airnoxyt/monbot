const {MessageEmbed} = require('discord.js');
const {readdirSync} = require("fs");
const categoryList = readdirSync('./cmd');
const settings = require('../../config.json')
module.exports.run =  (client, message, args) => {
    const user = message.author;
if (!args.length) {
 const help = new MessageEmbed()
.setColor("#36393F")
.addField("Liste des commandes", `Voici toutes les commandes disponibles !\n Pour plus d'info sur une commande fait \`help <command_name>\``)

for (const category of categoryList) {
    help.addField(
        `__${category}__`,
         `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
    )
};
message.reply('Je vous est envoié(e) la liste des commandes en MP !').then(
    user.send(help)
)

} else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply("Oups ! Cette commande n'existe pas !")
    const help1 = new MessageEmbed()
    .setColor("#36393F")
    .setTitle(`\`${command.help.name}\``)
    .addField("Description", `${command.help.description}`)
    .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)

    if (command.help.aliases.length > 0) help1.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    message.reply('Je vous est envoié(e) la liste des commandes en MP !').then(
        user.send(help1))
    
}
};




module.exports.help = {
    name: "help",
    aliases : ['aide'],
    category: "membre",
    description: "Permet de voir la liste des commandes",
    usage : '<command_name>',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }