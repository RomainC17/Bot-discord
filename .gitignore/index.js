const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');

  /*****************************************
  ************ STATUT DU BOT ***************
  ******************************************/
bot.on('ready', function (){
    bot.user.setActivity('GHelp - By Griffon#4905'); // Son activité
    bot.user.setUsername('Griffon - BOT'); // Son nom qui s'affiche
})



  /*****************************************
  ******* RÉACTIIONS AUX COMMANDES *********
  ******************************************/
bot.on('message', function (message){

    if (message.content === 'GTestB') { //Test
      message.reply('OK c\'est bon pour moi !');
    }
    if (message.content === 'GEtatB') { //Statut du bot
      message.reply('BOT opérationnel');
    }
    if (message.content === 'GNomS') { //Affiche le nom du serveur
      message.channel.send('Le nom du serveur actuel est  : ' + message.guild.name);
    }
    if (message.content.startsWith("GInfos")) { //Donne les infos de l'utilisateur
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
      message.channel.send(embed).then(message => message.delete({ timeout : 59000 }));
    }
    if (message.content.startsWith("GStats")) { //DONNE LES STATS DU SERVEUR
      let onlines = message.guild.members.cache.filter(({
          presence
      }) => presence.status !== 'offline').size;
      let totalmembers = message.guild.members.cache.size;
      let totalservers = bot.guilds.cache.size;
      let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;

      const EmbedStats = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Statistiques')
          //.setURL('https://discord.js.org/')
          .setAuthor('Griffon - BOT')
          .setDescription('Voici les statistiques du serveur')
          //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
          .addFields({
              name: 'Nombre de membres au total :',
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
          .setTimestamp()
          .setFooter('Griffon - BOT');

      message.channel.send(EmbedStats);
  }

    if (message.content === 'GTcheaze') { //FUN
      message.reply('Tcheaze à juste été littéralement plus de fois absent en PPE que casper ');
      message.react('👻')
    }
    if (message.content === 'GNathanG') { //FUN
      message.reply('De toute évidence,NathanG est un bg');
      message.react('🥵');
      message.react('🔥');
      message.react('💯');
    }
    if (message.content === 'GGofi') { //FUN
      message.reply('OOOOHHH LUUUUUIIIII');
      message.react('😆');
    }
    if (message.content === 'GHelp') { //HELP DE TOUTES LES COMMANDES
      if (message.member.hasPermission('MANAGE_MESSAGES')){
      message.reply('\n \n' + 
      '__**Utilise le préfixe : G puis à la suite le nom de ta commande :**__' +
      '\n \n' + 
      '__Commandes à propos **DU BOT** :__ ' +
      '\n \n' +
      '*-TestB* : Le bot doit te répondre (si c\'est pas le cas, c\'est la douille).' + 
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
      '__Commandes à propos **DU SERVEUR** ET DE **LA MODÉRATION** :__' + 
      '\n \n' +
      '*-GTicket* : Ouvre un ticket d\'assistance pour contacter un modérateur du serveur. ' + 
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
      '*-Infos* + *@MentionUtilisateur* : Donne des infos au sujet d\'un membre par un message éphémère (59 secondes). ' +
      '\n \n' + 
      '__Commandes pour le **FUN** :__' +
      '\n \n' +
      '*-Tcheaze* / *NathanG* / *Gofi* : Surprise :)' + 
      '');
    }
  }
  if (message.content === 'GHelp') { //HELP DE TOUTES LES COMMANDES
    if (!message.member.hasPermission('MANAGE_MESSAGES')){
    message.reply('\n \n' + 
    '__**Utilise le préfixe : G puis à la suite le nom de ta commande :**__' +
    '\n \n' + 
    '__Commandes à propos **DU BOT** :__ ' +
    '\n \n' +
    '*-TestB* : Le bot doit te répondre (si c\'est pas le cas, c\'est la douille).' + 
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
    '*-GTicket* : Ouvre un ticket d\'assistance pour contacter un modérateur du serveur. ' + 
    '\n' +
    '*-Stats* : Donne des infos au sujet du serveur (nombre de membres, membres connectés...).' +
    '\n' + 
    '*-NomS* : Donne le nom du serveur actuel.' + 
    '\n \n' +
    '__Commandes à propos **D\'UN MEMBRE** :__' + 
      '\n \n' +
      '*-Infos* + *@MentionUtilisateur* : Donne des infos au sujet d\'un membre par un message éphémère (59 secondes). ' +
    '\n \n' + 
    '__Commandes pour le **FUN** :__' +
    '\n \n' +
    '*-Tcheaze* / *NathanG* / *Gofi* : Surprise :)' + 
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
    { name: 'Bonjour' , value: `Le staff sera bientot à vous.`},
    //{ name: '\u200B', value: '\u200B' },
    { name: '🔒 Pour fermer le ticket,', value: 'contactez un administrateur.'},
    )
  .setDescription(`Ticket de ${message.author}`)
    .setTimestamp()
    .setFooter('Développé par Griffon #4905');

  if(message.content === `GTicket`) {
    message.delete();
    message.guild.channels.create('ticket  ' + message.member.user.username,)
    .then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false,
})
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
  ******* COMMANDES MUSIQUES ET BAN ********
  ******************************************/

const ytdl = require("ytdl-core");
const queue = new Map();
bot.on("message", async message => {
  let commande = message.content.trim().split(" ")[0].slice(1)
  let args = message.content.trim().split(" ").slice(1);
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
  else if (message.content.startsWith(`GClear`)) {
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
  else if (message.content.startsWith(`GBan`)) {
    if (message.member.hasPermission('BAN_MEMBERS')) {
      //GBan @qqn 123 test

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

  /*****************************************
  ******** MESSAGE DE BIENVENUE ************
  ******************************************/
//Pas op
bot.on("guildMemberAdd", member => {
  bot.channels.cache.get('720888577256325164').send(`Bienvenue sur le serveur ${member} !`);
})
});


  /*****************************************
  ******** FONCTIONS UTILISABLES ***********
  ******************************************/

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
      return message.channel.send(
          "Tu dois être connecté à un salon vocal pour jouer une musique !"
      );
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
  if (!message.member.voice.channel)
      return message.channel.send(
          "Tu dois être connecté au salon pour skip la musique !"
      );
  if (!serverQueue)
      return message.channel.send("Il n'y a pas de chanson à skip !");
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
  if (!message.member.voice.channel)
      return message.channel.send(
          "Tu dois être connecté au salon pour mettre en pause la musique !"
      );
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






/*     ATTENTION, A 10 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 9 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 8 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 7 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 6 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 5 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 4 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 3 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 2 LIGNES DU TOKEN DU BOT      */
/*     ATTENTION, A 1 LIGNE DU TOKEN DU BOT      */
bot.login('NzM1MTQwOTQxMTMxNjc3ODI3.Xxb8fw.71cYhJcL37Vl_iQA_VMUawUAQ00');
