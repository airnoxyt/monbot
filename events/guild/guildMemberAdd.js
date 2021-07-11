const {MessageEmbed, GuildMemberRoleManager, MessageAttachment} = require('discord.js');
const  settings = require('../../config.json');
const fs = require('fs')
const moment = require('moment')
const db = require('./../../db.json');
module.exports = async (client, member, guild) => {
    db["users"][member.id] = {
        name: member.username,
        msg: 0,
        rp: false,
        pub : 0
    }
    fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)})
    if(member.bot) return;
  
const newUser = {
    guildID : member.guild.id,
    guildName: member.guild.name,
    userID : member.id,
    username : member.user.username
}
const Welcome = new MessageEmbed()
.setTitle('Bienvenue à toi !')
.setDescription('Bienvenue dans ApoNox ! Fait comme chez toi mais pense à lire le <#827236013935689748> !' + `<@${member.id}>`)
.setColor('GREEN')
.setFooter("Nous sommes maintenant" + member.guild.memberCount)
.setImage(settings.gif_serveur)
client.channels.cache.get(settings.welcomeChannel).send(Welcome).then(message => {
    message.member.roles.add("859006447051735071")
})



/*let user = member;
const canvas = Canvas.createCanvas(700, 250);
const ctx = canvas.getContext(`2d`);
const background = await Canvas.loadImage(`./img.jpg`);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.font = `40px Calvert MT Std`;
ctx.fillStyle = `#ffffff`;

ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

ctx.beginPath();
ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.clip();
const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
ctx.drawImage(avatar, 25, 25, 200, 200);

const attachment = new MessageAttachment(canvas.toBuffer(), './img.jpg');
client.channels.cache.get('859004582785318922').send(attachment).then(message => {
    message.channel.send(member)
    message.member.roles.add(settings.badge_seasons)
})*/

/*member.guild.fetchInvites().then(guildInvites => {
    const invites = {};
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // A real basic message with the information we need. 
    client.channel.cache.get(settings.logChannel).send(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
  });*/
 
  await client.channels.cache.get('860804420283400192').setName(`『📊』membre total ${member.guild.memberCount.toLocaleString()}`)
}
 
 