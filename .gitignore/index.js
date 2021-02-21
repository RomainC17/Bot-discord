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

  if (message.content.startsWith("GStats") || message.content.startsWith("Gstats")) { //DONNE LES STATS DU SERVEUR
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

  if (message.content.startsWith("GTcheaze") || message.content.startsWith("Gtcheaze")) { //FUN
    message.channel.send('Tcheaze à juste été littéralement plus de fois absent en PPE que casper ');
    message.react('👻')
  }


  if (message.content.startsWith("GNathanG") || message.content.startsWith("GNathang") || message.content.startsWith("GnathanG") || message.content.startsWith("Gnathang")) { //FUN
    message.channel.send('De toute évidence, NathanG est un bg');
    message.react('🥵');
    message.react('🔥');
    message.react('💯');
  }


  if (message.content.startsWith("GGofi") || message.content.startsWith("Ggofi")) { //FUN
    message.channel.send('OOOOHHH LUUUUUIIIII');
    message.react('😆');
  }

  if (message.content.startsWith("GAxeeel") || message.content.startsWith("Gaxeeel") || message.content.startsWith("Gaxel") || message.content.startsWith("GAxel")) {
    message.channel.send('Axeeel l\'amour de ma vie');
    message.react('💯');
  }

  if (message.content.startsWith("GFio") || message.content.startsWith("Gfio")) {
    message.channel.send('Fio c\'est tout simplement le S');
    message.react('🥵');
    message.react('🔥');
    message.react('💯');
  }

  if (message.content.startsWith("GGriffon") || message.content.startsWith("Ggriffon")) {
    message.channel.send('"Griffon partout, même dans ton trou');
  }

  if (message.content.startsWith("GPsgalpha") || message.content.startsWith("Gpsgalpha")) {
    message.channel.send('Marié avec un bescherelle, ils ont eu ensemble un enfant claquette');
  }


  if (message.content.startsWith("GKeke") || message.content.startsWith("Gkeke")) {
    message.channel.send('Muet comme une carpe, con comme un glan');
  }

  if (message.content.startsWith("GLaura") || message.content.startsWith("Glaura")) {
    message.channel.send('Notre mamie adorée... mais surtout... Ques\'tu veux que j\'fais ?!!');
    message.react('🥵');
  }

  if (message.content.startsWith("GTtoki") || message.content.startsWith("Gttoki")) {
    message.channel.send('Talkie-walkie est demandée à l\'acceuil, sa maman la cherche.');
    message.react('🥵');
  }

  if (message.content.startsWith("GHelp") || message.content.startsWith("Ghelp")) { //HELP DE TOUTES LES COMMANDES
    if (message.member.hasPermission('MANAGE_MESSAGES')){
      message.reply('\n \n' + 
      '__**Utilise le préfixe : G puis à la suite le nom de ta commande :**__' +
      '\n \n' + 
      '__Commandes à propos **DU BOT** :__ ' +
      '\n \n' +
      '*-Test* : Le bot doit te répondre (si c\'est pas le cas, c\'est la douille).' + 
      '\n' + 
      '*-EtatB* : Informe sur l\'état du bot.' + 
      '\n \n' +
      /*'__Commandes à propos **DE LA MUSIQUE** :__' + 
      '\n \n' +
      '*-Play* + url : Joue le titre demandé.' + 
      '\n' + 
      '*-Pause* : Met en pause la musique / Reprends la lecture.' +
      '\n' +
      '*-Skip* : Saute le titre joué pour passer au suivant.' +
      '\n' +
      '*-Stop* : Arrête la musique et déconnecte le bot.' +
      '\n \n' + */
      '__Commandes à propos **DU SERVEUR** ET DE **LA MODÉRATION** :__' + 
      '\n \n' +
      '*-Ticket* : Ouvre un ticket d\'assistance pour contacter un modérateur du serveur. ' + 
      '\n' +
      '*-Clear* + nombre : Supprime le nombre de message que vous souhaitez dans le channel.' + 
      '\n' +
      '*-Ban* + *utilisateur* + *temps (sec)* + *raison* : Bannis un membre du serveur pendant un certain temps.' +
      '\n' +
      '*-Stats* : Donne des infos au sujet du serveur (nombre de membres, membres connectés...).' +
      '\n' + 
      '*-NomS* : Donne le nom du serveur actuel.' + 
      '\n \n' +
      '__Commandes à propos **D\'UN MEMBRE** :__' + 
      '\n \n' +
      '*-Infos* + *@MentionUtilisateur* : Donne des infos au sujet d\'un membre par un message éphémère (15 minutes). ' +
      '\n \n' + 
      '__Commandes pour le **FUN** :__' +
      '\n \n' +
      '*-Tcheaze* / *NathanG* / *Gofi* / *Axeeel* / *Keke* / *Fio* / *Griffon* / *Laura* / *Ttoki* : Surprise :)' 
      );
    }
  }


  if (message.content.startsWith("GHelp") || message.content.startsWith("Ghelp")) { //HELP DE TOUTES LES COMMANDES
    if (!message.member.hasPermission('MANAGE_MESSAGES')){
      message.reply('\n \n' + 
      '__**Utilise le préfixe : G puis à la suite le nom de ta commande :**__' +
      '\n \n' + 
      '__Commandes à propos **DU BOT** :__ ' +
      '\n \n' +
      '*-Test* : Le bot doit te répondre (si c\'est pas le cas, c\'est la douille).' + 
      '\n' + 
      '*-EtatB* : Informe sur l\'état du bot.' + 
      '\n \n' +
    /*  '__Commandes à propos **DE LA MUSIQUE** :__' + 
      '\n \n' +
      '*-Play* + url : Joue le titre demandé.' + 
      '\n' + 
      '*-Pause* : Met en pause la musique / Reprends la lecture.' +
      '\n' +
      '*-Skip* : Saute le titre joué pour passer au suivant.' +
      '\n' +
      '*-Stop* : Arrête la musique et déconnecte le bot.' +
      '\n \n' + */
      '__Commandes à propos **DU SERVEUR** :__' + 
      '\n \n' +
      '*-Ticket* : Ouvre un ticket d\'assistance pour contacter un modérateur du serveur. ' + 
      '\n' +
      '*-Stats* : Donne des infos au sujet du serveur (nombre de membres, membres connectés...).' +
      '\n' + 
      '*-NomS* : Donne le nom du serveur actuel.' + 
      '\n \n' +
      '__Commandes à propos **D\'UN MEMBRE** :__' + 
        '\n \n' +
        '*-Infos* + *@MentionUtilisateur* : Donne des infos au sujet d\'un membre par un message éphémère (15 minutes). ' +
      '\n \n' + 
      '__Commandes pour le **FUN** :__' +
      '\n \n' +
      '*-Tcheaze* / *NathanG* / *Gofi* / *Axeeel* / *Keke* / *Fio* / *Griffon* / *Laura* / *Ttoki* : Surprise :)' + 
    '');
    }
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
    //if (isNan(args[0])) return message.channel.send("Le nombre de message est invalide");
    if (parseInt(args[0]) <= 0 || parseInt(args[0]) >= 99) return message.channel.send("Le nombre de messages à supprimer doit être compris entre 1 et 99.")
    message.channel.bulkDelete(parseInt(args[0]) + 1)
    message.channel.send(`Vous bien supprimé le nombre de message(s) demandé`).then(msg => {
      setTimeout(() => {
        msg.delete()
      }, 5000);
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

const ytdl = require("ytdl-core");
const queue = new Map();
bot.on("message", async message => {
  let commande = message.content.trim().split(" ")[0].slice(1)
  if (message.author.bot) return;

  const serverQueue = queue.get(message.guild.id);
  if (message.content.startsWith(`GPlay`)) { //COMMANDE PLAY  
    execute(message, serverQueue);
    return;
  } 


  else if (message.content.startsWith(`GSkip`)) { //COMMANDE SKIP
    skip(message, serverQueue);
    return;
  } 


  else if (message.content.startsWith(`GStop`)) { //COMMANDE STOP
    stop(message, serverQueue);
    return;
  } 


  else if (message.content.startsWith(`GPause`)) { //COMMANDE PAUSE
    pause(message, serverQueue);
    return;
  }
});


  /*****************************************
  ******** FONCTIONS UTILISABLES ***********
  ******************************************/

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel){
    return message.channel.send(
      "Tu dois être connecté à un salon vocal pour jouer une musique !"
    );
  }
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "J'ai besoin d'avoir la permission de rejoindre et de parler dans le salon !"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);
    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} a été ajouté à la liste en cours !`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "Tu dois être connecté au salon pour skip la musique !"
    )};
  if (!serverQueue){
    return message.channel.send(
      "Il n'y a pas de chanson à skip !"
    )};
  //serverQueue.connection.dispatcher.end();
}


function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Tu dois être connecté au salon pour stopper la musique !"
  );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}


function pause(message, serverQueue) {
  if (!message.member.voice.channel) {
    return message.channel.send(
      "Tu dois être connecté au salon pour mettre en pause la musique !"
  )};
  if (serverQueue.connection.dispatcher.paused) {
    serverQueue.connection.dispatcher.resume();
  } else {
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.pause();
  }
}


function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
  .play(ytdl(song.url))
  .on("finish", () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Son joué : **${song.title}**`);
}

bot.login(token.token);
