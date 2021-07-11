
module.exports.run =  async (client, message, args, settings) => {
    const pos = message.channel.position;
    
    if (!message.channel.parentID) {
        message.channel.clone({ position: message.channel.rawPosition }).then((ch) => {
          ch.send("Salons reset \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 5000 }));
        });
      } else {
        message.channel.clone({ parent: message.channel.parentID, position: message.channel.rawPosition }).then((ch) => {
          ch.send("Salons reset \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 5000 }));
        });
      }
      message.channel.delete();
    };




module.exports.help = {
    name: "nuke",
    aliases : ['reset'],
    category: "admin",
    description: "Permet de reset un channel",
    usage : '',
    isUserAdmin: false,
   
    permissions : true,
    args: false
    }