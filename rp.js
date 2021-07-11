const Discord = require('discord.js')
const db = require('./../../db.json') 
const rp = require('../../db/JSON/rp.json')
const fs = require('fs')
const {MessageButton, MessageActionRow} = require('discord-buttons');
module.exports.run = async (client , message, args)  => {
    message.delete()
  
    if(rp[message.author.id]){
        const rptrue = new Discord.MessageEmbed()
        .setTitle('Vous avez déja un profil un menu serait bientot dispo !')
        message.channel.send(rptrue)
    }
    if(!rp[message.author.id]){
      const roleMetier = ['Boulanger' , 'Cuisinier' , 'Prostitué', 'Coiffeuse' , 'Eboueur' , 'Chauffeur', 'Profs' , 'Architecte', 'Scientifique', 'Vendeur' , 'Trafiquent', 'Acteur']
      const Marier = ['Oui' ,'Non']
      const Ages = ["8","12","15","17","20","21","22","23","14","25","27","28","29","30","40","47","49","50","52","55","59","60","65","85","90"]
      const age = Math.floor(Math.random() * Ages.length);
      const metier = Math.floor(Math.random() * roleMetier.length);
      const marrier = Math.floor(Math.random() * Marier.length)

      if(age < 18){
        rp[message.author.id] = {
          Nom : message.author.username,
          Age : Ages[age],
          Metier : "Aucun",
          Marrier : "Non"
        }
        if( age > 80) {
          rp[message.author.id] = {
            Nom : message.author.username,
            Age : Ages[age],
            Metier : "Retraite",
            Marrier : Marier[marrier]
          }
        }
      }
      if(age > 18){
         rp[message.author.id] = {
          Nom : message.author.username,
          Age : Ages[age],
          Metier : roleMetier[metier],
          Marrier : Marier[marrier]
        }
      }

      const rpfinish = new Discord.MessageEmbed()
      .setTitle('Profil RP crée')
      .setDescription(`Nom : ${rp[message.author.id].Nom}\nÂge : ${rp[message.author.id].Age}\nMétier : ${rp[message.author.id].Metier}\n Marrié : ${rp[message.author.id].Marrier}`)
      message.channel.send(rpfinish)
        fs.writeFile("./db/JSON/rp.json", JSON.stringify(rp, null , 4), (err) => {
          if(err) console.log(err)})

    }
    
 }
 module.exports.help = {
   name: "rp",
   aliases : ['roleplay'],
   category: "membre",
   description: "",
   usage : '',
   isUserAdmin: false,
   permissions : false,
   args: false
   
 }