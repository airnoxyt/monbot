const Discord = require('discord.js')
const db = require('quick.db')
const economy =  new db.table("Economy")
const ms = require('parse-ms')
const dailyTimer = new db.table('DailyTimer')
module.exports.run = async (client , message, args)  => {
    message.delete()
  const user =  message.author
  const timeout = 86400000;
  const nombre = ["200", "210","240","300","400","410","470","700","680","70","230","1000"]
  const reponse = Math.floor(Math.random() * nombre.length);
  let daily = await dailyTimer.fetch(`daily_${message.guild.id}_${user.id}`)
  if(daily !== null && timeout - (Date.now() - daily) > 0) { 
    let time = ms(timeout - (Date.now() - daily ))
    const notime = new Discord.MessageEmbed()
    .setTitle('`🕒`・ Un peu de patience')
    .setColor('RED')
    .setDescription(`Vous avez déja récupérer votre argent des 24 dernière heure...\nIl vous reste ${time.hours}h ${time.minutes}m ${time.seconds}s`)
      return message.channel.send(notime)
  }else {
    let argent = economy.fetch(`money_${message.guild.id}_${user.id}`)
    economy.add(`money_${message.guild.id}_${user.id}`, nombre[reponse])
    const util = new Discord.MessageEmbed()
   .setTitle('Vous avez reçus votre argent quotidient !')
   .setColor('GREEN')
   .setDescription(`Vous avez reçus la somme de ${nombre[reponse]}ApoCoins\n __Avant__ ${argent - nombre[reponse] } __Après__ : ${argent}`)
   .setImage('https://cdn.discordapp.com/attachments/837280407535353877/863715319650058240/standard_2.gif')
   dailyTimer.set(`daily_${message.guild.id}_${user.id}`, Date.now())
    return message.channel.send(util)
  }
 

   
  
    
 }
 module.exports.help = {
   name: "daily",
   aliases : [],
   category: "economy",
   description: "Obtenez votre budget quotidien",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }