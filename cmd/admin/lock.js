const {MessageEmbed} = require('discord.js')
const db = require('../../db.json')
module.exports.run = (client, message, args, settings) => {
    const channel = message.channel
    const ddb = db["guild"][channel.id].name
    if(channel.name === ddb){
        //si il n'est pas lock
        channel.setName(`🔒・ ${channel.name}`)
    }
    if(channel.name !== ddb){
        //si il est lock
        channel.setName(`${ddb}`)
    }

    
    };

    module.exports.help = {
      name: "lock",
      aliases : ['expulse'],
      category: "admin",
      description: "Permet de vérouiller un salons",
      usage : '',
      isUserAdmin: false,
     
      permissions : true,
      args: false
      }