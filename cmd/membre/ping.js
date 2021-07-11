

module.exports.run = async (client, message, args, settings) => {
    message.delete();
   message.react("736181495881924658")
    message.react("746679342075084900")
    const msg = await message.channel.send("Chargement");
    msg.edit(
        `Pong!
Latence du bot : ${msg.createdTimestamp - message.createdTimestamp}ms
Latence API : ${Math.round(client.ws.ping)}ms`
    )
    
};

    module.exports.help = {
        name: "ping",
        aliases : ['latence'],
        category: "membre",
        description: "Permet de voir la latence du bot",
        usage : '',
        isUserAdmin: false,
       
        permissions : false,
        args: false
        }
