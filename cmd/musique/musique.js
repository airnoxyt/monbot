const Discord = require('discord.js')
i = require('../../aponox');
const {MessageButton, MessageActionRow} = require('discord-buttons');
const { getTracks, getPreview } = require("spotify-url-info");
module.exports.run = async (client , message, args)  => {
    message.delete()
    var list = []

        const argsradio = args.slice(0).join("").toLowerCase();
        const VoiceChannel = message.member.voice.channel;

        if(!VoiceChannel) return message.channel.send("Il n'y a personne dans la vocal !");
        if(!argsradio) return message.channel.send('Précise une musique !');

        //Bouton
        let play = new MessageButton().setStyle('gray').setID('pause').setLabel('⏸');
        let rplay = new MessageButton().setStyle('gray').setID('replay').setLabel('▶');
        let stop = new MessageButton().setStyle('gray').setID('leave').setLabel('⏹');
        let suivant = new MessageButton().setStyle('gray').setID('skip').setLabel('⏭');
        let repeat = new MessageButton().setStyle('gray').setID('loop').setLabel('🔁');
        let repeat1 = new MessageButton().setStyle('gray').setID('loop1').setLabel('🔂');
        let aleatoire = new MessageButton().setStyle('gray').setID('shuffle').setLabel('🔀');
        let queu = new MessageButton().setStyle('gray').setID('list').setLabel('💿');
        let lister = new MessageActionRow().addComponent(queu);
        let pause = new MessageActionRow().addComponent(play).addComponent(suivant).addComponent(repeat).addComponent(aleatoire).addComponent(stop);
        let pauserepeat = new MessageActionRow().addComponent(play).addComponent(suivant).addComponent(repeat1).addComponent(aleatoire).addComponent(stop);
        let reprendre = new MessageActionRow().addComponent(rplay).addComponent(suivant).addComponent(repeat).addComponent(aleatoire).addComponent(stop);

        if(argsradio === "skyrock" || argsradio === "Skyrock") return radio("http://icecast.skyrock.net/s/natio_aac_64k");
        if(argsradio === "nrj" || argsradio === "NRJ") return radio("http://185.52.127.163/fr/40101/aac_576.mp3");
        if(argsradio === "fun radio" || argsradio === "funradio") return radio('http://streamer-03.rtl.fr/fun-1-44-64?listen=webCwsBCggNCQgLDQUGBAcGBg');
        if(list.length > 0){
                list.push(args[1]);
                if(spotifymusic()) return;
                let songName = args.slice(0).join(" ");
                i.musique.play(message, songName);
                message.channel.send('Musique ajouté à la file d\'attente.').then((file) =>{
                    setTimeout(()=> {
                        file.delete();
                    }, 5000);
                })
        }
        if (list.length < 1) {
                list.push(args[1]);
                if(spotifymusic()) return;
                let songName = args.slice(0).join(" ");
                i.musique.play(message, songName);
                let embed = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle('**MUSIQUES**')
                    .setDescription(`Je joue de la musique !`)
                   
                const send_play = await message.channel.send({embed: embed, components: [pause, lister]});
                const filter = (button) => button.clicker.user.id == message.author.id || button.clicker.user.id == "482551411884818472";
                const collector = send_play.createButtonCollector(filter);
                collector.on('collect', b =>{
                    b.defer();

                    function paus(){
                        if(i.musique.isPaused(message)) return message.channel.send("ERREUR: La musique est déjà en pause.").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        let embedpause = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('**MUSIQUES**')
                        .setDescription(`La musique est en pause !`)
                       
                        send_play.edit({embed: embedpause, components: [reprendre, lister]});
                        i.musique.pause(message);
                    }
                    function reprendr(){
                        if (!i.musique.isPaused) return message.channel.send("ERREUR: La musique n'est pas en pause.").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        let embedreprendre = new Discord.MessageEmbed()
                            .setColor("RED")
                            .setTitle('**MUSIQUES**')
                            .setDescription(`Je reprend la musique en pause !`)
                           
                        send_play.edit({embed: embedreprendre, components: [pause, lister]});
                        i.musique.resume(message);
                    }
                    function leave(){
                        const meVoiceChannel = message.guild.me.voice.channel;
                        if(!meVoiceChannel) return message.channel.send("Je ne suis pas dans la vocal !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        });
                        let embedleave = new Discord.MessageEmbed()
                            .setColor("RED")
                            .setTitle('**MUSIQUES**')
                            .setDescription(`J'arrête de jouer de la musique !`)
                           
                        send_play.edit({embed: embedleave});
                        i.musique.stop(message);
                        list = [];
                    }
                    function skipped(){
                        let queue = i.musique.getQueue(message);
                        if (!queue.songs[1]) return message.channel.send("ERREUR: Aucune prochaine musique.").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        });
                        let embedskip = new Discord.MessageEmbed()
                            .setColor("RED")
                            .setTitle('**MUSIQUES**')
                            .setDescription(`Je passe à la prochaine musique chef !`)
                           
                            send_play.edit({embed: embedskip, components: [pause, lister]});
                        i.musique.skip(message);
                    }
                    function loop(){
                        let queue = i.musique.getQueue(message);
                        if (!queue.songs[1]) return message.channel.send("ERREUR: La liste est vide !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        if(i.musique.isPaused(message)) return message.channel.send("ERREUR: La musique est en pause !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        let embedloop = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('**MUSIQUES**')
                        .setDescription(`Je répète la musique 1 fois !`)
                       
                        send_play.edit({embed: embedloop, components: [pauserepeat, lister]});
                        i.musique.setRepeatMode(message, parseInt(1));
                    }
                    function loop1(){
                        let queue = i.musique.getQueue(message);
                        if (!queue.songs[1]) return message.channel.send("ERREUR: La liste est vide !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        if(i.musique.isPaused(message)) return message.channel.send("ERREUR: La musique est en pause !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        let embedloop1 = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('**MUSIQUES**')
                        .setDescription(`Répétition remise à 0 !`)
                       
                        send_play.edit({embed: embedloop1, components: [pause, lister]});
                        i.musique.setRepeatMode(message, parseInt(0));
                    }
                    function shuffle(){
                        let queue = i.musique.getQueue(message);
                        if (!queue.songs[5]) return message.channel.send("ERREUR: La liste est pas assez rempli pour le mode aléatoire !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        });
                        if(i.musique.isPaused(message)) return message.channel.send("ERREUR: La musique est en pause !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        });
                        if(i.musique.setRepeatMode(message, parseInt(1))) return message.channel.send('Erreur : Mode loop activé !').then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        });
                        let embedshuffle = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('**MUSIQUES**')
                        .setDescription(`Mode aléatoire activé !`)
                       
                        send_play.edit({embed: embedshuffle, components: [pause, lister]});
                        i.musique.shuffle(message);
                    }
                    function liste(){
                        let queue = i.musique.getQueue(message);
                        if (!queue.songs[1]) return message.channel.send("ERREUR: La liste est vide !").then((file) =>{
                            setTimeout(()=> {
                                file.delete();
                            }, 5000);
                        })
                        let counter = 0;
                        for(let i = 0; i < queue.songs.length; i+=20){
                        if(counter >= 10) break;
                        let k = queue.songs;
                        let songs = k.slice(i, i + 20);
                        message.author.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle('**MUSIQUES**')
                       
                        .setDescription(songs.map((song, index) => `**${index + 1 + counter * 20}** [${song.name}](${song.url}) - ${song.formattedDuration}`)))
                        counter++;
                        }
                    }
                    if(b.id == "pause") return paus();
                    if(b.id == "replay") return reprendr();
                    if(b.id == "leave") return leave();
                    if(b.id == "skip") return skipped();
                    if(b.id == "loop") return loop();
                    if(b.id == "loop1") return loop1();
                    if(b.id == "shuffle") return shuffle();
                    if(b.id == "list") return liste();
                });
        }
        function spotifymusic(){
            if(argsradio.includes("spotify") && argsradio.includes("track")){
                getPreview(args.slice(0).join(" ")).then(result => {
                    i.musique.play(message, result.title);
                })
            }
            if(argsradio.includes("spotify") && argsradio.includes("playlist")){
                getTracks(args.slice(0).join(" ")).then(result => {
                    for(const song of result)
                    i.musique.play(message, song.name);
                })
            }
        }
        async function radio(r){
            let skyrock = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('RADIO')
            .setDescription('Je joue la radio !')
         //   .setFooter('Profite de la radio !', 'https://media.discordapp.net/attachments/732877745683693588/808011310784184330/ezgif-2-e3f0773857a2.gif');
            let skyrock1 = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('RADIO')
            .setDescription("J'arrête de jouer la radio !")
       //     .setFooter('Profite de la radio !', 'https://media.discordapp.net/attachments/732877745683693588/808011310784184330/ezgif-2-e3f0773857a2.gif');
            let leave = new MessageButton().setStyle('gray').setID('leave').setLabel('⏹');
            const sky = await message.channel.send({embed: skyrock, component: leave});
            const filter = (button) => button.clicker.user.id == message.author.id || button.clicker.user.id == "482551411884818472";
            const collector = sky.createButtonCollector(filter);
            collector.on('collect', b => {
                b.defer();

                if(b.id === "leave"){
                    VoiceChannel.leave();
                    sky.edit(skyrock1);
                }
            })

            VoiceChannel.join().then(connection => {
                require('http').get(r, (res) => {
                    connection.play(res);
                })
            })
        }
    }

 module.exports.help = {
   name: "musique",
   aliases : ['music'],
   category: "musique",
   description: "",
   usage : '<lien>',
   isUserAdmin: false,
   permissions : true,
   args: false
   
 }