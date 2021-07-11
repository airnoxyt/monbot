
module.exports.run = async (client , message, args)  => {
    message.delete()
    if(!message.author.id === "523811999856066570") return message.reply('Seul les Owners peuvent faire cela')
    const voiceChannel = message.member.voice.channel;
    // s'il n'est pas dans un salon, on return
    if (!voiceChannel) return console.log("Pas de salon auquel se connecter.");
    // on se connecte au salon
    try {
    const voiceConnection = await voiceChannel.join();
    } catch {
    return console.log("Impossible de se connecter au salon.");
    }
    // on joue ce que l'on veut
    await voiceConnection.play('../../sond.mp3');
    
 }
 module.exports.help = {
   name: "supportchannel",
   aliases : [''],
   category: "owner",
   description: "",
   usage : '',
   isUserAdmin: false,
  
   permissions : true,
   args: false
   
 }