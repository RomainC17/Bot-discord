const Discord = require('discord.js');
const bot = new Discord.Client();


/*     STATUT DU BOT      */
bot.on('ready', function (){
    bot.user.setActivity('GRHelp - En cours de dev - Griffon#4905'); // Son activité
    bot.user.setUsername('Griffon - BOT'); // Son nom qui s'affiche
})



/*     RÉACTION AUX COMMANDES      */
bot.on('message', function (message){
    if (message.content === 'GRtest') { //Commande de test
      message.reply('OK ça marche !')
    }
    if (message.content === 'GRStatut') { //Commande de statut du bot
      message.reply('BOT en cours de maintenance')
    }
    if (message.content === 'GRTcheaze') { //Commande FUN
      message.reply('Ce mec est juste un gros noob')
    }
    if (message.content === 'GRNathanG') { //Commande FUN
      message.reply('De toute évidence, ce mec est un bg')
    }
    if (message.content === 'GRGofi') { //Commande FUN
      message.reply('OOOOHHH LUUUUUIIIII')
    }
    if (message.content === 'GRHelp') { //Commande FUN
      message.reply('\n```diff\n-Utilise le préfixe : GR puis à la suite le nom de ta commande :\n``````\n-Test : le bot doit te répondre``````\n-Statut : Informe sur le statut du bot``````\n-Tcheaze / NathanG / Gofi : ;)``` ')
    }
  })

/*     EXPULSER UN MEMBRE      */


bot.login('NzM1MTQwOTQxMTMxNjc3ODI3.Xxb8fw.71cYhJcL37Vl_iQA_VMUawUAQ00'); // TOKEN DU BOT
