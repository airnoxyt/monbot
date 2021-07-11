module.exports.run =  async (client, message, args, settings) => {
let test = args.join("+");

message.channel.send('https://minecraftskinstealer.com/achievement/2/New+achievement%21/' + test)

}
module.exports.help = {
    name: "minecraft",
    aliases : ['mc'],
    category: "fun",
    description: "affiche une image de succès",
    usage : '<description>',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }