const Discord = require('discord.js')
const db = require('quick.db')
const economy =  new db.table("Economy")
const ms = require('parse-ms')
const worktime = new db.table('work')
module.exports.run = async (client , message, args)  => {
    message.delete()
  const user = message.mentions.users.first() || message.author
  const timeout = 86400000/2;
  console.log(timeout)
  let daily = await worktime.fetch(`work_${message.guild.id}_${user.id}`)
 if(daily !== null && timeout - (Date.now() - daily) > 0) { 
  /*   let time = ms(timeout - (Date.now() - daily ))
    const notime = new Discord.MessageEmbed()
    .setTitle('`🕒`・ Un peu de patience')
    .setColor('RED')
    .setDescription(`Vous avez déja récupérer votre argent des 12 dernière heure...\nIl vous reste ${time.hours}h ${time.minutes}m ${time.seconds}s`)
     message.channel.send(notime)*/
  }else{ 
    let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
  const roleMetier = ['Aucun']
  const metier = Math.floor(Math.random() * roleMetier.length);

            
               
              
              var money =  Math.floor(Math.random() * 5500) +1;
            

    const work = new Discord.MessageEmbed()
   .setTitle('Vous avez bien travailer')
   .setColor('GREEN')
   .setDescription(`Votre métier du jours à été ${roleMetier[metier]} et vous avez reçus comme salaire ${money}`)
   economy.add(`money_${message.guild.id}_${user.id}`, money)
   message.channel.send(work)

  

}

  
  }


   
  
    

 module.exports.help = {
   name: "work",
   aliases : [],
   category: "economy",
   description: "Recuperer votre salaire semi quotidien",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }