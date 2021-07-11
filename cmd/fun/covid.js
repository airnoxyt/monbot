const fetch = require('node-fetch');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
let countries = args.join(" ");

//Credit to Sarastro#7725 for the command :)

const noArgs = new Discord.MessageEmbed()
.setTitle('Missing arguments')
.setColor(0xFF0000)
.setDescription('Oups ! Tu ma rien préciser ! ')
.setTimestamp()

if(!args[0]) return message.channel.send(noArgs);

if(args[0] === "all"){
    fetch(`https://covid19.mathdro.id/api`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`🌎Dans toute la terre🌎`)
        .addField('Cas confirmés', confirmed)
        .addField('Rétablis', recovered)
        .addField('Morts', deaths)

        message.channel.send(embed)
    })
} else {
    fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
    .then(response => response.json())
    .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new Discord.MessageEmbed()
        .setTitle(`Stats du covid-19 **${countries}**`)
        .addField('Cas confirmés', confirmed)
        .addField('Rétablis', recovered)
        .addField('Morts', deaths)

        message.channel.send(embed)
    }).catch(e => {
        return message.channel.send('Oups ! Pays invalide')
    })

}}
module.exports.help = {
    name: "covid",
    aliases : ['coronavirus'],
    category: "fun",
    description: "en cours....",
    usage : '',
    isUserAdmin: false,
   
    permissions : false,
    args: false
    }