const { settings } = require("../../config.json");

module.exports.run = async (client , message, args)  => {
         client.emit('guildMemberAdd' , message.member)
         
    }
    module.exports.help = {
        name: "welcome",
        aliases : [''],
        category: "owner",
        description: "",
        usage : '',
        isUserAdmin: false,
       
        permissions : true,
        args: false
        
    }