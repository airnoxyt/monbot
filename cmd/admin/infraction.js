const db = require('../../db.json')
const { MessageEmbed } = require('discord.js')
const fs = require('fs')
module.exports.run = (client , message, args) => {
    
    message.delete();
    const user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    var server = message.guild.id
    if(!db["warn"][user.id]){
        db["warn"][user.id] = {
        nombre: 0
        };
    }if(db["warn"][user.id].nombre < 0){
        db["warn"][user.id].nombre = 0
    }
    fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err) })
        var warn =  db["warn"][user.id].nombre
  
       const warnembed = new MessageEmbed()
       .setTitle(`Voici la liste d'infraction demander !`)
       .setDescription(`${user} à reçus ${warn} warn(s) !`)
       .setColor("#FF0000")
       message.reply(warnembed)
   
    

}
module.exports.help = {
    name: "infraction",
    aliases : [''],
    category: "admin",
    description: "Permet de voir la list d'infraction cas fait un utilisateur",
    usage : '<@user>',
    isUserAdmin: false,
   
    permissions : true,
    args: true
    
}