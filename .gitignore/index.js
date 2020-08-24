const Discord = require('discord.js');
const bot = new Discord.Client();

/*     STATUT DU BOT      */
bot.on('ready', function (){
    bot.user.setActivity('GRHelp - By Griffon#4905'); // Son activité
    bot.user.setUsername('Griffon - BOT'); // Son nom qui s'affiche
})



/*     RÉACTION AUX COMMANDES      */
bot.on('message', function (message){

    if (message.content === 'GRTestB') { //Test
      message.reply('OK c\'est bon pour moi !');
    }
    if (message.content === 'GREtatB') { //Statut du bot
      message.reply('BOT opérationnel');
    }
    if (message.content === 'GRNomS') { //Affiche le nom du serveur
      message.channel.send('Le nom du serveur actuel est  : ' + message.guild.name);
    }
    if (message.content === 'GRMembreS') { //Donne le nombre de membres sur le serveur
      message.channel.send('Nombre total de personnes sur le serveur : ' + message.guild.memberCount + ' (toi y compris)');
    }
    if (message.content === 'GRInfosT') { //Donne les infos de l'utilisateur
      message.channel.send('Ton pseudo : ' + message.author.username);
      message.channel.send('Ton tag : ' + message.author.discriminator);
      message.channel.send('Ta date de création de compte : ' + message.author.createdAt);      
      message.channel.send('Ton identifiant : ' + message.author.id);
    }
    if (message.content === 'GRTcheaze') { //FUN
      message.reply('Tcheaze à juste été littéralement plus de fois absent en PPE que casper ');
      message.react('👻')
    }
    if (message.content === 'GRNathanG') { //FUN
      message.reply('De toute évidence,NathanG est un bg');
      message.react('🥵');
      message.react('🔥');
      message.react('💯');
    }
    if (message.content === 'GRGofi') { //FUN
      message.reply('OOOOHHH LUUUUUIIIII');
      message.react('😆');
    }
    if (message.content === 'GRHelp') { //HELP DE TOUTES LES COMMANDES
      message.reply('\n \n' + 
      '__**Utilise le préfixe : GR puis à la suite le nom de ta commande :**__' +
      '\n \n' + 
      '__Commandes à propos **DU BOT** :__ ' +
      '\n \n' +
      '*-TestB* : Le bot doit te répondre (si c\'est pas le cas, c\'est la douille).' + 
      '\n' + 
      '*-EtatB* : Informe sur l\'état du bot.' + 
      '\n \n' +
      '__Commandes à propos **DE LA MUSIQUE** :__' + 
      '\n \n' +
      '*-Play* + url : Joue le titre demandé.' + 
      '\n' + 
      '*-Pause* : Met en pause la musique / Reprends la lecture.' +
      '\n' +
      '*-Skip* : Saute le titre joué pour passer au suivant.' +
      '\n' +
      '*-Stop* : Arrête la musique et déconnecte le bot.' +
      '\n \n' +
      '__Commandes à propos **DU SERVEUR** :__' + 
      '\n \n' +
      '*-NomS* : Donne le nom du serveur actuel.' + 
      '\n' + 
      '*-MembreS* : Donne le nombre de personnes sur le serveur.' +
      '\n \n' +
      '__Commandes à propos **DE TOI** :__' + 
      '\n \n' +
      '*-InfosT* : Donne ton réel pseudo, ton tag, ta date de création de ton compte, ton id. ' +
      '\n \n' + 
      '__Commandes pour le **FUN** :__' +
      '\n \n' +
      '*-Tcheaze* / *NathanG* / *Gofi* : Surprise :)' + 
      '');
  }
});

const fetch = require('node-fetch');
const ytdl = require("ytdl-core");
const queue = new Map();

bot.on("message", async message => {
  let commande = message.content.trim().split(" ")[0].slice(1)
  if (message.author.bot) return;
  /*****************************************
  ************ COMMANDE MUSIQUE ***********
  ******************************************/
  const serverQueue = queue.get(message.guild.id);
  if (message.content.startsWith(`GRPlay`)) {
      execute(message, serverQueue);
      return;
  } 
  else if (message.content.startsWith(`GRSkip`)) {
      skip(message, serverQueue);
      return;
  } 
  else if (message.content.startsWith(`GRStop`)) {
      stop(message, serverQueue);
      return;
  } 
  else if (message.content.startsWith(`GRPause`)) {
      pause(message, serverQueue);
      return;
  }
});


async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
      return message.channel.send(
          "You need to be in a voice channel to play music!"
      );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
          "I need the permissions to join and speak in your voice channel!"
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
      return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue, args) {
  if (!message.member.voice.channel)
      return message.channel.send(
          "Tu dois être connecté au salon pour skip la musique !"
      );
  if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
      return message.channel.send(
          "Tu dois être connecté au salon pour stopper la musique !"
      );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function pause(message, serverQueue, args) {
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
