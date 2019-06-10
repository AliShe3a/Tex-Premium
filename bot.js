const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('@obc')){
if(!message.author.id === '357961207019470851') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(config.token);

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc});
        });
        const AziRo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)   
        .setTitle('✔️ | جاري ارسال رسالتك ') 
        .addBlankField(true)
        .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
        .addField('📋| الرسالة ', args)
        .setColor('RANDOM')  
        message.channel.sendEmbed(AziRo);          
    }
    } else {
        return;
    }
});
  client.login("NTg3NTk1MDc3Njk0NzgzNDg4.XP43Zg.rDI7D-W3OG_YAjIv5cQiog6MBBk" );

client.on('message', message => {
    if (message.content.startsWith("@hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })

 client.login(config.token);

var prefix = "@"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.login(config.token);

var prefix = "@"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.login(config.token);

var prefix = "@";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "say") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.login(config.token);

var prefix = "@";
client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

client.login(config.token);

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "@mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });

client.login(config.token);

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "@unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });

  client.login(config.token);

  client.on('message', message => {

    if (message.content === "@server") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()

.addField('***SERVER OWNER👑***: ' , message.guild.owner)
.addField('***SERVER NAME💳***: ' , message.guild.name)
.addField('***SERVER ID🆔***:' , message.guild.id)
.addField('***SERVER VERIFICATIONLEVEL❓***: ' , message.guild.verificationLevel)
.addField('***SERVER REGION:globe_with_meridians: ***: ' , message.guild.region)
.addField('***DEFAULT CHANNEL1⃣ ***: ' , message.guild.defaultChannel)
.addField('***CHANNELS SIZE🔋***: ' , message.guild.channels.size)
.addField('***ROLES🔢***: ' , message.guild.roles.size)
.addField('***MEMBERS📡***: ' , message.guild.memberCount)
.addField('**SERVER CREATED IN🕑***: ' ,year + "-"+ month +"-"+ day)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});

client.login(config.token);

client.on('message', message => {
    if(message.content.startsWith('@voice')) {
    let args = message.content.split(' ').slice(1);
    let ar = args.join(' ');

    message.channel.send(ar,{tts:true});
}
});

client.login(config.token);

client.on("message", msg => {
    var prefix = "@";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

client.login(config.token);

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('@ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

client.login(config.token);


client.on("ready", () => {
    client.user.setPresence({
      status: 'online',
      game: { 
         type: 0,
         name: 'انطزرو شيعا قريبا',
         details: `شيعا جاي يكسر الدنيا`,
         url: 'http://twitch.tv/algamer998',
         state: `شيعا الفخم جااي`,
        application_id: '587595077694783488',
         assets: {
            small_image: `2`,
            small_text: 'جاي' ,
            large_image: `1`,
            large_text: `شيعا` }
    
      }
        });
    });
    
    client.login(config.token);

    var antispam = require("anti-spam");//npm i anti-spam
 
antispam(client, {
  warnBuffer: 3, //الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على تحذير.
  maxBuffer: 5, // الحد الأقصى المسموح به من الرسائل لإرسالها في الفاصل الزمني قبل الحصول على ميوت.
  interval: 1000, // مقدار الوقت قبل حصول باند
  warningMessage: "stop spamming.", // رسالة تحذير اذا سوا سبام!
  roleMessage: "Muted!!", // الرسالة الي تجي اذا شخص اخذ ميوت
  roleName: "Muted", // اسم رتبة الميوت
  maxDuplicatesWarning: 7, // عدد الرسايل الي قبل التحذيرات
  maxDuplicatesBan: 10, // عدد الرسايل الي يقدر المستخدم يرسلها قبل الميوت
  time: 10, // عدد الوقت الي يجلس لين تسحب رتبة الميوت من الشخص الحسبة برمجية وليست كتابية 
});

client.login(config.token);

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("587606171595046912").send({embed:iiMo});
    }
});

client.login(config.token);

client.on('message', message => {
    if (message.content === "@help1") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`© She3a ™.`, 'https://cdn.discordapp.com/attachments/540547527011860500/587670091554881537/9db11fdfd2f506c4.jpeg')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });

  client.login(config.token);

client.on('message', message => {
  
    if(message.content.split(' ')[0] == '@owmes'){
         if(!message.channel.guild) return;
                            let args = message.content.split(' ').slice(1).join(' ');
    
    client.guilds.get("584735012390436874").members.get("357961207019470851").sendMessage(message.author.tag+"\n Message : "+args)
    
                                                    let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription(':mailbox_with_mail: تم ارسال صاحب البوت بنجاح')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embed);}
                                                  });

client.login(config.token);

var prefix = "@";
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { //DiamondCodes - [ X_KillerYT ]
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل قرابة 24 ساعة
**
        ***__General orders__***
**
『@server /يعرض لك معلومات عن السيرفر』
『@id / يعرض لك معلومات عنك』
『@ping / سرعه البوت』
『 للحصول على بريميوم كلم صاحب سيرفر السبورت 』
『support / https://discord.gg/3Qy74SE 』
『@voice / لتحويل الكلام الى صوت 』
『@owmes / لرفع شكوى على عضو 』
『@server / معلومات السيرفر 』
『@avatar / صوره بلمنشن 』

**
  `
,`
        ***__Admin orders__***
**
『@clear / لتنظيف الشات 』
『@say / جعل البوت يقول اشياء 』
『@owmes / للتواصل مع الاونر 』
『@mc / قفل الشات 』
『@unmc / فتح الشات 』
『@adrole   / اعطاء رتبه بالسم و المنشن  』
『@bc / لارسال رسالة لجميع اعضاء السيرفر 』
『@kick / لطرد شخص من الدسكورد 』
『@ban / لاعطاء شخص باند من الدسكورد 』
『@mute / لاعطاء شخص ميوت 』
『@voice / لتحويل الكلام الى صوت 』
『@obc / برود كاست للبريميوم 』
**
  `
,`
        ***__Games orders__***
**
『@hack   لعبه التهكير』
**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});
client.on('message', message => {
    if(message.content === '@help') {
        message.reply('تم ارساله بالخاص :white_check_mark: ');
    }
});

client.login(config.token);


client.on('message', message => {
    if (message.content.startsWith("@avatar")) {
if(!message.channel.guild) return;

        var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }

        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")

        .setColor(000000)
        .setFooter(اسم بوتك, 'ur bot image link')
        .setImage(${client.avatarURL})
      message.channel.sendEmbed(embed);
    }
});


client.login(config.token);



client.on('message', message => { 
    var prefix = "@";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "adrole") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

client.login(config.token);


    var prefix = "@";

client.on('message', message => {

    if(message.content === prefix + "mc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
    var prefix = "@";

 if(message.content === prefix + "unmc") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             

client.login(config.token);
