const db = require('../../db.json')
const fs = require('fs');
const Discord  = require('discord.js');
module.exports.run = (client , message, args) => {
    message.delete();
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if(!user){
        message.reply('Merci de mettre un utilisateur !')
    }else{
        if(!db["warn"][user.id] || db[user.id].nombre === 0){
            message.channel.send(`${message.author} , ${user} n'a jamais été warn donc on ne peut pas lui enlever un warn`)
            return;
      }if(db["warn"][user.id].nombre = -1){
        db["warn"][user.id].nombre = 0
      }
      let dbn = db["warn"][user.id].nombre;
       db["warn"][user.id].nombre = dbn - 1
       fs.writeFile("db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)})
    }
    const warn = new Discord.MessageEmbed()
    .setTitle('/!\ UnWarn /!\ ')
    .setDescription(`${user} à eu un warn en moins par ${message.author} !\n${user } à désromer ${db[user.id].nombre} de warn(s) ! `)
    message.channel.send(warn).then( async message   => {
         message.delete({timeout: 5000})
    })
    fs.writeFile("./db.json", JSON.stringify(db, null , 4), (err) => {
        if(err) console.log(err)
    })
    


}
module.exports.help = {
    name: "unwarn",
    aliases : ['uwrn'],
    category: "admin",
    description: "permet de retirer le warn d'une personne",
    usage : '<@user>',
    isUserAdmin: true,
   
    permissions : true,
    args: true
    
}