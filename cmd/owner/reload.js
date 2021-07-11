const { token , OwnerId} = require("../../config.json");

module.exports.run = async (client , message, args)  => {
    if(message.author.id !== OwnerId) return message.reply("Vous n'êtes pas autorisé à utiliser cette commande");
    message.channel.send("🕙 | Reboot en cours ...").then(async msg => {
        msg.edit("🕙 | Reboot en cours ...")
        client.destroy();
        await client.login(token);
        await msg.edit("🕙 | Reboot en cours ...")
        msg.edit("☑️ | Reboot bien effectué")
    });
         
    }
    module.exports.help = {
        name: "reload",
        aliases : [''],
        category: "owner",
        description: "",
        usage : '',
        isUserAdmin: false,
       
        permissions : true,
        args: false
        
    }