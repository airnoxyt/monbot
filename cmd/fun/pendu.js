const { hangman } = require("reconlx");
module.exports.run = async (client , message, args)  => {
    message.delete()
    const world = args.slice(0).join(" ")
  const hang =  new hangman({
        message: message,
        word: world,
        client: client,
        channelID: message.channel.id,
    });
    hang.start()

}
 module.exports.help = {
   name: "pendu",
   aliases : [''],
   category: "fun",
   description: "",
   usage : '<mot>',
   isUserAdmin: false,
   permissions : true,
   args: true
   
 }