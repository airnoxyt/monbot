const { DiscordTogether } = require('discord-together');
module.exports.run = async (client , message, args)  => {
    message.delete()
    const VoiceChannel = message.member.voice.channel;

        if(!VoiceChannel) return message.channel.send("Il n'y a personne dans la vocal !");
        if(VoiceChannel){
             client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
        })};

 }
 module.exports.help = {
   name: "youtube",
   aliases : [''],
   category: "fun",
   description: "",
   usage : '',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }