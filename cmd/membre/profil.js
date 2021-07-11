const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const db = require('../../db.json')
const rp = require('../../db/JSON/rp.json')
const voiceClient = require('../../util/functions/VoiceClient')
const Levels = require('discord-xp')
const ms = require('moment')
const ddb = require('quick.db')
const economy =  new ddb.table("Economy")
module.exports.run = async (client, message, args, settings) => {

            
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const target = await Levels.fetch(member.id, message.guild.id)
    let argent = economy.fetch(`money_${message.guild.id}_${member.id}`)
    if(argent === null){argent = 0}
    const us = new MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
    .setColor('#cd57ff')
    .setTitle('Profil de ' + member.user.username)
    .setDescription(`<a:793882152785805373:846140506164690946> **__Général__ :
    > Surnom sur le serveur : ${member.nickname !== null ? `${member.nickname}` : "Aucun"}
    > A rejoint le serveur : ${ms(member.joinedAt).format('DD/MM/YYYY HH:mm:ss')}
    > Joue à : ${member.presence.game ? member.presence.game.name : "Rien"}
    > Rôles:** \n ${member.roles.cache.map(roles => `${roles}`).join(" ")}
    <a:793882152785805373:846140506164690946>  **__Stats__ :
    > Niveaux : ${target.level}
    > Experience : ${target.xp}
    > Message Envoyé : ${db["users"][member.id].msg}
    > ApoCoin : ${argent}
    **
    
    `)
    .setImage("https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif")
   

    message.channel.send(us)

    }
        


module.exports.help = {
    name: "profil",
    aliases : ['userinfo' ,'us'],
    category: "membre",
    description: "Permet de voir les info d'une personne",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }