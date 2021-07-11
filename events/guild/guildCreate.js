const {MessageEmbed, GuildMemberRoleManager, MessageAttachment} = require('discord.js');
const  db = require('../../db.json');
const Canvas = require('canvas')
const moment = require('moment')

module.exports = async (client, member, guild) => {
    const settings = db[member.guild.id]
    console.log('serveur ajouté')
}
 
 