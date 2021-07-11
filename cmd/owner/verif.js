const Discord = require('discord.js')

module.exports.run = async (client , message, args)  => {
        const embed = new Discord.MessageEmbed()
        .setTitle('Vérification pour avoir le rôle')
        .setDescription('Merci de cocher la réaction pour avoir le role <@&859006447051735071>')
        .setImage('https://1.bp.blogspot.com/-sQpnypxkjFU/XO2z6rI_rlI/AAAAAAAAIGg/eSXcgWzEPRcWr3kebcMTe6OD4phxbKI1gCLcBGAs/s1600/608d9060403a0b32ec8668329105a006f809de3a_hq.gif')
        client.channels.cache.get('859005279538118657').send(embed).then(async (message) => {
            message.react('<a:715471155724681276:839467198333452349>')
        })
         
    }
    module.exports.help = {
        name: "verif",
        aliases : [''],
        category: "owner",
        description: "",
        usage : '',
        isUserAdmin: false,
       
        permissions : true,
        args: false
        
    }