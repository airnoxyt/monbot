const { settings } = require("../../config.json");

module.exports.run = async (client , message, args)  => {
         client.emit('guildMemberRemove', message.member)
         
         
    }
    module.exports.help = {
        name: "left",
        aliases : [''],
        category: "owner",
        description: "",
        usage : '',
        isUserAdmin: false,
       
        permissions : true,
        args: false
        
    }