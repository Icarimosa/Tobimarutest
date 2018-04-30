const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});



client.on('guildMemberAdd', member => {
  client.channels.get(process.env.canal).send("Woof, bienvenue à " + member.displayName + " !\nSi tu es nouveau, nous t'invitons à lire le petit guide de Saigo Seizon : http://saigoseizon.forumgratuit.fr/t374-le-fameux-petit-guide !");
});

function envoieMes(s){
  client.channels.get(process.env.canal).send(s);
}


client.on('message',  message => { 
  if(message.channel === client.channels.get(process.env.canal)){
  
    const args = message.content.trim().split(/ +/g);
    var command;
    while ((command = args.shift()) != null){
      if(command === 'balle'){
        message.reply("*Tobimaru court chercher la balle.*");
        break;
      }
    }
    if(message.content.toLowerCase() === '*gronde tobimaru.*')
        message.reply("*Tobimaru se met à couiner.*");
    if(message.content.toLowerCase() === '*caresse tobimaru.*' )
      message.reply("*Tobimaru remue la queue de contentement.*");
    if(message.content.toLowerCase() === '*patpat tobimaru.*')
      message.reply("*Tobimaru lèche la main et roule sur son dos pour plus de gratouilles.*");
    
         
  }
});

function mes() {
  client.channels.get(process.env.canal).send("Woof ! C'est l'heure de voter pour Saigo Seizon ! Clique sur les petits nuages sur http://saigoseizon.forumgratuit.fr/ .");
}



setInterval(mes, 1000*60*60*2);
client.login(process.env.token)

