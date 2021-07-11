const {Client, Collection, MessageEmbed, MessageAttachment} = require('discord.js')
const client = new Client({partials: ['MESSAGE', 'REACTION', 'CHANNEL', 'GUILD_MEMBER', 'USER']});
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
const {loadCommands, loadEvents} = require('./util/functions/loadCommands')
const settings = require('./config.json')
const { DiscordTogether } = require('discord-together');
const Levels = require('discord-xp')
const colors = require("colors")
const fs = require('fs')
const db = require('./db.json')
const { fetchTranscript } = require("reconlx");
require('./db/functions')(client)
DisTube = require("distube"),
distube = new DisTube(client, {
    searchSongs: false,
    emitNewSongOnly: false,
    highWaterMark: 1024*1024*64,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    leaveOnStop: true,
    youtubeDL: true,
    updateYouTubeDL: true
});
const disbut = require('discord-buttons');
disbut(client);
client.discordTogether = new DiscordTogether(client);
module.exports.musique = distube;
Levels.setURL(settings.mongodbconnect)
const tiktok = require('tiktok-app-api')
let tiktokApp;
(async () => {
  tiktokApp = await tiktok();
})();
client.mongoose = require('./util/mongoose')
const logger= require('./util/functions/logs')
logger(client)
loadCommands(client)
loadEvents(client)
client.mongoose.init();
client.on('messageReactionAdd', async (reaction,user) => {
  
  const message = reaction.message
  const member = message.guild.members.cache.get(user.id)
  if(user.bot) return;
  if(
      ["✅" ,"🔒"].includes(reaction.emoji.name)
  ){
      switch(reaction.emoji.name){
          case "✅":
             if(reaction.message.channel.id !== '859004591554428948') return;
             reaction.users.remove(user);
             let username = user.username;
             let categoryID = "859493444375937045"
            console.log(username.includes("-"))
             if(db["ticket"][`『🎫』${username}`]) return;
             let channel = await message.guild.channels.create(`『🎫』${username}` , {type: 'text', parent: message.guild.channels.cache.get(categoryID)})
          /*  if(!db["ticket"][channel.id]){
              db["ticket"][channel.id]
            }
            if(!db["ticket"][username.id]){
              db["ticket"][username.id]
            }*/
             if(!db["ticket"][`『🎫』${username}}`]){
             
              db["ticket"][`『🎫』${username}`] = {
               
              }
             db['ticket_id'][channel.id] = { msg : 0,
            id : channel.id}
            }
            fs.writeFile("./db.json", JSON.stringify(db, null , 4), (err) => {
              if(err) console.log(err) })
             channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL' : false})
             channel.updateOverwrite(member , {
               'VIEW_CHANNEL' : true,
               'SEND_MESSAGES': true,
               'ADD_REACTIONS': true
             })
             channel.updateOverwrite(message.guild.roles.cache.get("829447411684343870"), {'VIEW_CHANNEL' : true})
             var embed = new MessageEmbed()
             .setTitle('Bonjour bienvenue dans votre ticket')
             .setDescription('Merci de dire votre problème , un staff vas intervenir pour vous aider !')
             .setTimestamp()    
             channel.send('<@&829447411684343870>')
             channel.send(embed).then(m => {
            m.react('🔒')})
        
             var logs = new MessageEmbed()
             .setTitle('Ticket ouvert')
             .setDescription(`${member} vient d'ouvire un ticket ! Voici le salons <#${channel.id}>`)
             .setFooter('Information by ApoNox')
            client.channels.cache.get(settings.logChannel).send(logs)
              break;
              case "🔒": 
              let usernamesssss = user.username;
              if(db['ticket_id'][reaction.message.channel.id].msg > 99){
                delete  (db["ticket"][`『🎫』${usernamesssss}`])
                delete db['ticket_id'][reaction.message.channel.id]
            delete db["ticket"][reaction.message.channel.id]
                delete db["ticket"][usernamesssss.id]
                 message.channel.delete()
              }
              if(db['ticket_id'][reaction.message.channel.id].msg > 0  ){
                 fetchTranscript(message,  db['ticket_id'][reaction.message.channel.id].msg).then((data) => {
                const file = new MessageAttachment(data, `${message.channel.name}.html`);
             // message.channel.send(file);
                client.channels.cache.get(settings.logChannel).send(file)
                let usernamesss = user.username
                delete  (db["ticket"][`『🎫』${usernamesss}`])
                delete db['ticket_id'][reaction.message.channel.id]
                message.channel.delete()

            });

              }else {
                              let usernamess = user.username;
            delete  (db["ticket"][`『🎫』${usernamess}`])
            delete db['ticket_id'][reaction.message.channel.id]
        /*    delete db["ticket"][reaction.message.channel.id]
            delete db["ticket"][username.id]*/
             message.channel.delete()
              }
             
              break;

      }
  }
})
/* YOUTUBE SYSTEM */
const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("DISCORD BOT YO");
});

const listener = server.listen(3000, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});

const { CHANNEL_ID, SERVER_CHANNEL_ID } = require("./yt.json");
const YouTubeNotifier = require('youtube-notification');


const notifier = new YouTubeNotifier({
  hubCallback: 'https://necessary-probable-slouch.glitch.me/yt',
  secret: 'JOIN_MY_SERVER_OR_DIE'
});


notifier.on('notified', data => {
  console.log('New Video');
  client.channels.cache.get(SERVER_CHANNEL_ID).send(
    `**${data.channel.name}** vient de publier une nouvelle vidéo - **${data.video.link}**`
  );
});
 
notifier.subscribe(CHANNEL_ID);

app.use("/yt", notifier.listener());
client.login(settings.token)