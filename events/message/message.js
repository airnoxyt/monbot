const db = require('../../db.json')
const fs = require('fs')
const data = require('quick.db')
const {Collection, MessageEmbed} = require('discord.js')
const settings = require('../../config.json')
const xp = require('quick.db')
const Levels = require("discord-xp");
Levels.setURL(settings.mongodbconnect)
//["commands", "cooldowns"].forEach(x => client[x] = new Collection());
module.exports = async (client, message) => {
    if(!message.channel.type === "dm"){
        if(!message.author.bot){
      if(!message.member.roles.cache.has("829063795397754940")){
      message.member.roles.add("829063795397754940")
  }
  if(!message.member.roles.cache.has("828736327314702397")){
      message.member.roles.add('828736327314702397')
  }
  if(!message.member.roles.cache.has(settings.badge_seasons)){
    message.member.roles.add(settings.badge_seasons)
}
}
    }


    /* définit la base de donnée */
    

    if(!db["users"][message.author.id]){
        db["users"][message.author.id] = {
            name: message.author.username,
            msg: 0,
            rp: false,
            pub : 0
        }
    }
    fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)})
        /*                                                             */
        if(message.author.bot) return;
        /*                 Définition des dbchannel                    */
        if(message.channel.type === "dm"){
            const embeds = new MessageEmbed()
            .setTitle('Message envoyer en MP')
            .setAuthor(message.author.username)
            .setDescription(message.content)
            .setTimestamp()
            client.channels.cache.get(settings.logChannel).send(embeds)
        }
 
        if(db["ticket_id"][message.channel.id]){  
            let chnls = db["ticket_id"][message.channel.id].id
     if(message.channel.id === chnls){
        db["ticket_id"][message.channel.id].msg = db["ticket_id"][message.channel.id].msg + 1 
     }}
      
        /*                      Message System                            */
        
         db["users"][message.author.id].msg = db["users"][message.author.id].msg + 1
     /*    if(db["users"][message.author.id].msg === 1000){
             message.member.roles.add('851114468904796160')
             const msgauthor = message.author
             const badgemsg = new MessageEmbed()
             .setTitle('Badge de Serveur débloquer')
             .setDescription('Vous avez envoyer plus de 1000 message ! Vous avez gagner le badge **Parleur PRO** !')
             .setTimestamp()
             msgauthor.send(badgemsg)
         }*/
    /*         Level Système                                                */
         if(!message.channel.type === "DM"){
                      const randomXP = Math.floor(Math.random()* 25) + 10;
         const hasLevelUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP)
         if(hasLevelUp){
             const users = await Levels.fetch(message.author.id, message.guild.id)
             const levelUp = new MessageEmbed()
             .setTitle(`Bravo ${message.author.username}`)
             .setDescription(`${message.member}, tu est passé au niveau ${users.level} ! Bonne chance pour avoir le niveaux ${users.level +1}`)
             message.channel.send(levelUp)
         }
         }

   
  
         
    /*                                                                                       */
    fs.writeFile("./db.json", JSON.stringify(db, null , 4), (err) => {
      if(err) console.log(err)
    /*                             Reaction Automatique                                      */
  });
 if(message.channel.id === "859004585480683531"){
        message.react('<:vu:859361601291681792>')
 }
      

                                                     
    /*                                  Money System                                          */
  
    /*                                                                                        */
    const usersEveryoneMap = new Map();
    const usersLinkMap = new Map();
    const usersSpamMap = new Map();
    
        if(usersSpamMap.has(message.author.id))
        {
            const userData = usersSpamMap.get(message.author.id);
            let {msgCount} = userData;
            msgCount += 1 
            userData.msgCount = msgCount;
            usersSpamMap.set(message.author.id, userData)
            if (msgCount >= 6) message.delete();
            if (msgCount === 9) message.guild.member(message.author.id).ban({reason: 'Spam'})
        }
         else{
             usersSpamMap.set(message.author.id, {
                 msgCount: 1 
        
            })
            setTimeout(() => {
                usersEveryoneMap.delete(message.author.id);
            }, 10000); 
    }
    
/*                                 Handler Commande  Message                                                                    */

    if (!message.content.startsWith(settings.prefix))return;
    if(!message.channel.id === "859703453119283200"){
        message.delete()
        message.reply('Merci de faire les commands dans <#859703453119283200> !').then(async (message) => {
            message.delete({timeout : 2000})
        })
    }

   
  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const user = message.mentions.users.first();

 console.log(args);
 const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if(!command) return;
  if (command.help.args &&  !args.length) {
      const arg = new MessageEmbed()
      .setTitle('`❓`・Nous avons pas assez d\'information')
      .setColor('RED')
      .setDescription(`Il nous faut plus de précision !`)
  let NoArgsReply = arg
  const noPerm = new MessageEmbed()
  .setTitle('`🚫`・Vous avez pas les perms')
  .setColor('RED')
  .setDescription("Tu n'a pas les permissions !")
  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(noPerm)
  const argS = new MessageEmbed()
  .setTitle('`❓`・Nous avons pas assez d\'information')
  .setColor('RED')
  .setDescription(`Il nous faut plus de précision !\nVoici comment utilisé la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``)
  if(command.help.usage){
      var Usage = argS
  }else{
      var Usage = arg
  }
  if (command.help.usage)Usage;
  return message.channel.send(Usage);

  }
  if(command.help.name === "daily"){
     
  }else{
       if(!client.cooldowns.has(command.help.name)) {
  client.cooldowns.set(command.help.name, new Collection);

  }
  const timeNow = Date.now()
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || settings.cooldown)* 1000;

  if(tStamps.has(message.author.id)){
  const cdExpiration = tStamps.get(message.author.id) + cdAmount;

  if(timeNow < cdExpiration){
      timeLeft = (cdExpiration - timeNow) / 1000;
      const notime = new MessageEmbed()
      .setTitle('`🕒`・ Un peu de patience')
      .setColor('RED')
      .setDescription(`Merci d'attendre \`${timeLeft.toFixed(0)}\`seconde(s) !`)
      return message.reply(notime)
  }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);
  }
 

  const noUser = new MessageEmbed()
  .setTitle('`🚫`・ Pas d\'utilisateur')
  .setColor('RED')
  .setDescription("Tu n'a pas mensionnez d'utilisateur ! Merci de le faire")
  const UserAdmin = new MessageEmbed()
  .setTitle('`👮‍♂️`・Cette personne est du Staff')
  .setColor('RED')
  .setDescription("Tu ne peut pas utilisé cette comande contre cette personne !")
  if (command.help.isUserAdmin && !user) return message.channel.send(noUser)
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) return message.channel.send(UserAdmin)
  if (command.help.isUserAdmin && message.guild.member(message.mentions.users.first()).hasPermission('ADMINISTRATOR')) return message.channel.send(UserAdmin)






  command.run(client,message,args, settings)
    }
