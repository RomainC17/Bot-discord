const Discord = require('discord.js');
const bot = new Discord.Client();

/*     STATUT DU BOT      */
bot.on('ready', function (){
    bot.user.setActivity('GRHelp - En cours de dev - Griffon#4905'); // Son activité
    bot.user.setUsername('Griffon - BOT'); // Son nom qui s'affiche
})



/*     RÉACTION AUX COMMANDES      */
bot.on('message', function (message){

    if (message.content === 'GRTestB') { //Test
      message.reply('OK c\'est bon pour moi !');
    }
    if (message.content === 'GREtatB') { //Statut du bot
      message.reply('BOT opérationnel !');
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
})








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
