/**
PAUSEMUSIQUE BOT
**/
const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');
const token = require("./token.json");

  /*****************************************
  ************ STATUT DU BOT ***************
  ******************************************/

bot.on("ready", async () => {
    console.log("Le bot est allumé")
    bot.user.setActivity('GHelp - By Griffon#9999'); // Son activité, anciennement #4905
    bot.user.setUsername('Griffon - BOT'); // Son nom qui s'affiche
})


  /*****************************************
  ******* RÉACTIIONS AUX COMMANDES *********
  ******************************************/

bot.on('message', function (message){

  if (message.content.startsWith("GTest") || message.content.startsWith("Gtest")) { //Test
    message.channel.send('OK c\'est bon pour moi !');
  }

  if (message.content.startsWith("GEtatB") || message.content.startsWith("GetatB") || message.content.startsWith("Getatb") || message.content.startsWith("GEtatb")) { //Statut du bot
    message.channel.send('Je suis opérationnel :-)');
  }

  if(message.content.startsWith("GTwitch") || message.content.startsWith("Gtwitch")) {
    message.channel.send('Tiens gros bg là : https://www.twitch.tv/griffon_winky (dédi à Chaos au passage)');
  }
  
  if (message.content.startsWith("GNomS") || message.content.startsWith("GnomS") || message.content.startsWith("Gnoms") || message.content.startsWith("gNoms")) { //Affiche le nom du serveur
    message.channel.send('Le nom du serveur actuel est  : ' + message.guild.name);
  }

  if (message.content.startsWith("GInfos") || message.content.startsWith("Ginfos")) { //Donne les infos de l'utilisateur
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    }  else {
      user = message.author;
    }

  const member = message.guild.member(user);
  const embed = new Discord.MessageEmbed()
  .setColor('#ff5555')
  .setThumbnail(user.avatarURL)
  .setTitle(`Informations sur ${user.username}#${user.discriminator} : `)
  .addField('ID du compte : ', `${user.id}`, true)
  .addField('Pseudo sur le serveur : ', `${member.nickname !== null ? `${member.nickname}` :'Aucun' }`, true)
  .addField('A crée son compte le : ', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField('A rejoint le serveur le : ', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
  .addField('Status : ', `${user.presence.status}`, true)
  //.addField('Joue a :', `${user.presence.game ? user.presence.game.name : 'Rien'}`, true)
  .addField('Rôle(s) :', member.roles.cache.map(roles => `${roles.name}`).join(', '), true)
  .addField('En réponse à : ', `${message.author.username}#${message.author.discriminator}`)
  message.channel.send(embed).then(message => message.delete({ timeout : 900000 }));
  }

  if (message.content.startsWith("GStatS") || message.content.startsWith("GstatS")) { //DONNE LES STATS DU SERVEUR
      let onlines = message.guild.members.cache.filter(({
          presence
      }) => presence.status !== 'offline').size;
      let totalmembers = message.guild.members.cache.size;
      let totalservers = bot.guilds.cache.size;
      let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

      const EmbedStats = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Statistiques')
          .setDescription('Voici les statistiques du serveur')
          .addFields({
              name: 'Nombre de membrs total',
              value: totalmembers,
              inline: true
          }, {
              name: 'Membres connectés : ',
              value: onlines,
              inline: true
          }, {
              name: 'Nombre de serveurs auquel le bot appartient : ',
              value: totalservers,
              inline: true
          }, {
              name: 'Nombres de bots sur le serveur : ',
              value: totalbots,
              inline: true
          },)

      message.channel.send(EmbedStats);
  }

  /*********************************************************************************************************************************************************************** */

  /*****************************************
  ** COMMANDE D'HELP DES COMMANDES DISPO ***
  ******************************************/
      if(message.content.startsWith("GHelp") || message.content.startsWith("Ghelp")) {
        if (message.member.hasPermission('MANAGE_MESSAGES')){
          var user = message.user
          const ticketMod = new Discord.MessageEmbed()
          
          .setColor('#FF9B00')
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle('Liste des commandes disponibles pour toi') 
          .addFields(
            { name: '🤖 __Relatif au bot__' , value: `**GEtatB :** T\'informe sur l\'état actuel du bot. \n **GTest :** Le bot doit te répondre (sinon, il est HS).`},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: '**NOUVEAU** 🎵 __Relatif à la musique__ ' , value: `**GPlay + url YOUTUBE :** Lis une musique youtube dans ton salon vocal. \n **GWaitlist :** Liste les musiques qui sont en file d'attente. \n **GStop :** Déconnecte le bot et vide la liste d'attente.`},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            //{ name: '\u200B', value: '\u200B' },
            { name: '🔒 __Relatif au serveur actuel et à la modération__', value: '**GBan + @utilisateur + temps (sec) + raison :** Bannis un membre du serveur pendant un temps donné. \n **GClear + nombre :** Supprime le nombre de messages que vous souhaitez dans le channel. \n **GNomS :** Donne le nom du serveur actuel. \n **GStatS :** Donne des infos à propos du serveur actuel. \n **GTicket :** Ouvre un ticket d\'assistance pour contacter les modérateurs du serveur.'},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: '👤 __Relatif à un utilisateur__' , value: `**GInfos + @utilisateur :** Donne des infos au sujet du compte Discord d\'un membre.`},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: 'ᕙ༼*◕_◕*༽ᕤ __Commandes fun__' , value: `**GTwitch** \n **GNathanG** \n **GGofi** \n **GKeke** \n **GGriffon** \n **GMassaï** \n **GChaos** \n **GPsgalpha** \n **GHakura**`},
            )
          .setDescription(`Demandé par ${message.author}`)
            .setTimestamp()
            .setFooter('Développé par Griffon #9999');

          message.channel.send(ticketMod)
        }
        else{
          var user = message.user
          const ticket = new Discord.MessageEmbed()
          .setColor('#FF9B00')
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle('Liste des commandes disponibles pour toi') 
          .addFields(
            { name: '🤖 __Relatif au bot__' , value: `**GEtatB :** T\'informe sur l\'état actuel du bot. \n **GTest :** Le bot doit te répondre (sinon, il est HS).`},
            //{ name: '\u200B', value: '\u200B' },
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: '**NOUVEAU** 🎵 __Relatif à la musique__' , value: `**GPlay + url YOUTUBE :** Lis une musique youtube dans ton salon vocal. \n **GWaitlist :** Liste les musiques qui sont en file d'attente. \n **GStop :** Déconnecte le bot et vide la liste d'attente.`},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: '🔒 __Relatif au serveur actuel__', value: '**GNomS :** Donne le nom du serveur actuel. \n **GStatS :** Donne des infos à propos du serveur actuel. \n **GTicket :** Ouvre un ticket d\'assistance pour contacter les modérateurs du serveur.'},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: '👤 __Relatif à un utilisateur__' , value: `**GInfos + @utilisateur :** Donne des infos au sujet du compte Discord d\'un membre.`},
            { name: ' ╔═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╗ ' , value: ` **╚═════════ஓ๑♡๑ஓ═ஓ๑♡๑ஓ════════╝** `},
            { name: 'ᕙ༼*◕_◕*༽ᕤ __Commandes fun__' , value: `**GTwitch** \n **GNathanG** \n **GGofi** \n **GKeke** \n **GGriffon** \n **GMassaï** \n **GChaos** \n **GPsgalpha** \n **GHakura**`},
            )
          .setDescription(`Demandé par ${message.author}`)
            .setTimestamp()
            .setFooter('Développé par Griffon #9999');

          message.channel.send(ticket)
        }
      }

  /*****************************************
  ************* COMMANDES FUN **************
  ******************************************/
  if (message.content.startsWith("GNathanG") || message.content.startsWith("GNathang") || message.content.startsWith("GnathanG") || message.content.startsWith("Gnathang")) { //FUN
    message.channel.send('De toute évidence, NathanG est un bg');
    message.react('🥵');
    message.react('🔥');
    message.react('💯');
  }

  if (message.content.startsWith("GGofi") || message.content.startsWith("Ggofi")) {
    message.channel.send('OOOOHHH LUUUUUIIIII');
    message.react('😆');
  }

  if (message.content.startsWith("GGriffon") || message.content.startsWith("Ggriffon")) {
    message.channel.send('"Griffon partout, même dans ton trou"');
  }

  if (message.content.startsWith("GPsgalpha") || message.content.startsWith("Gpsgalpha")) {
    message.channel.send('Marié avec un bescherelle, ils ont eu ensemble un enfant claquette');
  }

  if (message.content.startsWith("GKeke") || message.content.startsWith("Gkeke")) {
    message.channel.send('Muet comme une carpe, con comme un gland');
  }

  if (message.content.startsWith("GChaos") || message.content.startsWith("Gchaos")) {
    message.channel.send('Un plombier qui poste des vidéos drôles sur le Discord ಠ ͜ʖ ಠ');
  }

  if (message.content.startsWith("GMassaï") || message.content.startsWith("Gmassaï")) {
    message.channel.send('Le M c\'est le S motherfuck !');
  }

  if (message.content.startsWith("GHakura") || message.content.startsWith("Ghakura")) {
    message.channel.send('(｡♥‿♥｡) Mon amouuur (｡♥‿♥｡) ');
  }
});
  /*****************************************
  ***** SYSTEME DE TICKET D'ASSISTANCE *****
  ******************************************/

bot.on('message', message => {
  var user = message.user
  const ticket = new Discord.MessageEmbed()
  .setColor('#FF9B00')
  .setThumbnail(message.author.displayAvatarURL())
  .setTitle('Ticket 🎫') 
  .addFields(
    { name: 'Bonjour' , value: `Un membre du staff va venir vous aider.`},
    //{ name: '\u200B', value: '\u200B' },
    { name: '🔒 Pour fermer le ticket,', value: 'contactez un administrateur.'},
    )
  .setDescription(`Ticket de ${message.author}`)
    .setTimestamp()
    .setFooter('Développé par Griffon #4905');

  if(message.content.startsWith("GTicket") || message.content.startsWith("Gticket")) {
    message.delete();
    message.guild.channels.create('ticket  ' + message.member.user.username,)
    .then((chan)=>{
    chan.updateOverwrite(message.guild.roles.everyone, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
    })
    /*chan.updateOverwrite(message.guild.roles.******, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
    })*/
    chan.updateOverwrite(message.author.id ,{ 
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
    })

    message.channel.send(`Votre ticket a bien été ouvert <@!`+ message.author +`> ! 🔓`);
    chan.send(ticket)
    })
  }
})


  /*****************************************
  *********** COMMANDE DE CLEAR  ***********
  ******************************************/
bot.on("message", async message => {
  let args = message.content.trim().split(" ").slice(1);
  if (message.content.startsWith(`GClear`) || message.content.startsWith("Gclear")) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions");
    if (!args[0]) return message.channel.send("Vous devez mettre un nombre de messages à supprimer");
    if (isNaN(args[0])) return message.channel.send("Merci de rentrer un nombre *(ex : GClear 20)*");
    //if (isNan(args[0])) return message.channel.send("Le nombre de message est invalide");
    if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 99) return message.channel.send("Le nombre de messages à supprimer doit être compris entre 1 et 99.")
    message.channel.bulkDelete(parseInt(args[0]) + 1)
    message.channel.send(`Vous bien supprimé le nombre de message(s) demandé`).then(msg => {
      setTimeout(() => {
        msg.delete()
      });
    });
  }
});


  /*****************************************
  ************ COMMANDE DE BAN  ************
  ******************************************/
  
  //GBan @qqn 123 test

bot.on("message", async message => {
  if (message.content.startsWith(`GBan`)) {
    if (message.member.hasPermission('BAN_MEMBERS')) {

      let arg = message.content.trim().split(/ +/g)
      
      utilisateur = message.mentions.members.first();
      temps = arg[2];
      raison = arg[3];

      if (!utilisateur) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
      }
      else {
      if (!temps || isNaN(temps)) {
        return message.channel.send('Vous devez indiquer un temps de ban en secondes !');
      } else {
      if (!raison) {
        return message.channel.send('Vous devez indiquer la raison du ban !');
      } else {
        // on fait le tempban
        message.guild.members.ban(utilisateur.id);
        setTimeout(function () {
          message.guild.members.unban(utilisateur.id);
        }, temps *1000)
      }
      }
      }
    } else {
      return message.channel.send('Tu ne peut pas ban un membre car tu n\'a pas la permission ! ')
    }
  }
});


  /*****************************************
  *********** COMMANDES MUSIQUES ***********
  ******************************************/

  const ytdl = require('ytdl-core');
  const { duration } = require('moment');
  const client = new Discord.Client();

  list = [];
  bot.on("message", async message => {

    if(message.content.startsWith("GWaitlist") || message.content.startsWith("Gwaitlist")){
      let msg = "**File d'attente** \n";
      for(var i = 1; i < list.length ; i++){
        let titleVid;
        let durationVid;
        let minutesVid;
        let secondesVid;
        let artistNameVid;
        let getInfo = await ytdl.getBasicInfo(list[i]);
        
        
        titleVid = getInfo.videoDetails.title;
        artistNameVid = getInfo.videoDetails.author.name;
  
        durationVid = getInfo.videoDetails.lengthSeconds;
        minutesVid = Math.floor(durationVid / 60);
        secondesVid = durationVid - minutesVid * 60;
        
  
        msg += '*' + i + ".* " + titleVid + " - " + artistNameVid + " ; durée : " + minutesVid + ":" + secondesVid + " min." +'\n';
      }
      message.channel.send(msg);
    }

    if(message.content.startsWith("GStop") || message.content.startsWith("Gstop")){
      message.member.voice.channel.leave();
      list.splice(0, list.length);
    }

    if(message.content.startsWith("GSkip") || message.content.startsWith("Gskip")){      
      list.shift();
      dispatcher.destroy(); //??? Inaccessible 
    }

    if(message.content.startsWith("GPlay") || message.content.startsWith("Gplay")){
      if(message.member.voice.channel){
        let args = message.content.split(" ");

        if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
          message.reply("Lien de la vidéo incorrect");
        }
        else {
          if(list.length > 0){
            list.push(args[1]);
            message.reply("Vidéo ajoutée à la liste !")
          }
          else {
            list.push(args[1]);
            message.reply("Vidéo ajoutée à la liste !")

            message.member.voice.channel.join().then(connection => {

              playMusic(connection);

              connection.on("disconnect", () =>{
                list = [];
              })
            }).catch(err =>{
              message.reply("Erreur lors de la connexion : " + err);
            })
          }
        }
      }
    }
});

function playMusic(connection){
  const dispatcher = connection.play(ytdl(list[0], { quality: "highestaudio", highWaterMark: 1 << 25}));
  
  dispatcher.on("finish", () =>{ //Quand la musique est finie
    list.shift();                //On supprime l'occurence en cours
    dispatcher.destroy();

    if(list.length > 0){         //Si il reste une musique dans la file d'attente
      playMusic(connection);     //On recommence
    }
    else{
      connection.disconnect();   //Sinon on déconnecte
    }
  });

  dispatcher.on("error", err => {
    console.log("Erreur de dispatcher : " + err);
    dispatcher.destroy();
    connection.disconnect();
  })
}

bot.login(token.token);
