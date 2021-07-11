const weather = require('weather-js');

const Discord = require('discord.js');
module.exports.run = async (client, message, args, settings) => {


    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results

        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Merci de mettre une bonne localisation')

        if(result === undefined || result.length === 0) return message.channel.send('**Non-Valide** localisation');

        var current = result[0].current;
        var location = result[0].location;
        message.delete()
        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Prévisions météo pour ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuseau horaire', `UTC${location.timezone}`, true)
        .addField('Type de degrée', 'Celsius', true)
        .addField('Température', `${current.temperature}°`, true)
        .addField('Vent', current.winddisplay, true)
        .addField('Se sent comme', `${current.feelslike}°`, true)
        .addField('Humidité', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
    module.exports.help = {
        name: "weather",
        aliases : ['météo'],
        category: "fun",
        description: "Permet de voir la météo",
        usage : '<city>>',
        isUserAdmin: false,
       
        permissions : false,
        args: false
        }