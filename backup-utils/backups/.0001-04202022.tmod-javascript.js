const { 
  Client,
  MessageActionRow, 
  MessageButton,
  Permissions
} = require('discord.js')
globalThis.colors = require("colors")
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders')
const request = require("request")
const { ppid, platform } = require('process');

console.log(`The parent process is pid ${ppid}`);
console.log(`The platform is ${platform}`)
console.log(process.title)
console.log(`This processor architecture is ${process.arch}`)
console.log(process.memoryUsage.rss())
console.log("--- " + Date() + " ---")

function handle(signal) {
  console.log(`Received ${signal}`);
  require('./restarter.js')()
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
request.get("https://discord.com/channels/863480934615482378/956392771768447026/messages", (err, res, body) => {
  return true
})

function alive(yourURL) {
  request.post(
    yourURL,
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return true;
        }
    }
  );
}

function aliveforTMOD() {
  alive('https://youraliver.henry133.repl.co')
}


setInterval(aliveforTMOD, 5000)

let botRunner = new Client({intents: 32509})
// setup
botRunner.login(process.env.REPL_SYSTEM_ID)
botRunner.once('ready', () => {
	console.log(colors.cyan("I am ") + colors.red(botRunner.user.tag).underline)
  botRunner.user.setPresence({ status:'online', 
    activities: [{name: `you | tm help | Used in ${botRunner.guilds.cache.size} servers`, type: 'LISTENING'}] 
  })
})
const tmod = {
  originalName: "TModeration Bot 2021",
  cache: {
    timeUsed: 0,
    guilds: botRunner.guilds.cache.size,
  },
  webSocketPing: botRunner.ws.ping,
  firmware: '5.64',
  firmwareAPI: 'JS',
  botver: '24.5.0',
  edition: 'Updating Day-by-day with Eval Protection Edition',
  prototype: {
    setAvatar: function(avatarURL) {
      if(avatarURL.startsWith('https://') || avatarURL.startsWith('http://')) {
        return botRunner.user.setAvatar(avatarURL)
      } else {
        return false
      }
    },
    directmsgWith: (serverID, userID, message) => {
      if(!message) {
        return 'Message Cannot Be Empty'
      } else {
        if(typeof userID == 'string' && typeof serverID == 'string' && message) {
          return botRunner.guilds.resolve(serverID).members.resolve(userID).send(message)
        } else {
          return false
        }
      }
    },
    firmware: '5.68',
    firmwareAPI: 'JS',
    edition: 'Updating Day-by-day with Eval Protection Edition',
    miniumPermissionRequired_: '8',
    miniumPermissionRequired: ['Administrator'],
    recommendedPermission_: '8',
    recommendedPermission: ['Administrator'],
    intro: 'Hello!\nI am TModeration Bot, make by MyCoolestDay123 and Razpizday228.\nInvite link: https://discord.com/api/oauth2/authorize?client_id=937190474299633734&permissions=8&scope=bot\nStatus page: https://tmoderationbot.freshstatus.io\nMy favourite server (also the server for the bot developement and most actived server forever): https://discord.gg/r22j4FFXAf\n\nPrefix: `tm <command>`\n`tm help` for a list of command.\n`tm features` to see features',
    botver: '25.2.1',
  },
  miniumPermissionRequired_: '8',
  miniumPermissionRequired: ['Administrator'],
  recommendedPermission_: '8',
  recommendedPermission: ['Administrator'],
  start_timeStamp: Date.now(),
  startedat: Date(),
  modules: ['backup-utils', 'main-server'],
  server: 'tmoderation-server.henry133.repl.co',
  discordJS: 'v13',
  platform: process.platform,
  nodeJSVersion_: process.version,
  isMacro: false,
  isSwitchCase: true,
  mentionembedded: '<@923338383982473217>'
}

globalThis.items = {
  // Items
  tool: {cost: 20000},
  phone: {cost: 5000},
  "WhiteHat": {cost: 1000000},
  "Contributing": {cost: 50000},
}
globalThis.money = {
  // money
}
globalThis.inventory = {
  // Inventory
}
globalThis.serverBlacklisted = [
  // Blacklisted guild writes here
]
globalThis.blacklist = [
  {
    "banned": "888843435312832592",
    "reason": "Until you say sorry with me and promise you don't say bad things to me"
  }
]

// Do not reveal your token
process.env.REPL_SYSTEM_ID = 'find my token? SEEYA IDIOT LOL'

// Endpoint Server and KeepAliver
require('./endpoint@DiscordAPI-UserRequestHandle_.js')

// Partnered Server memes auto-react feature
const firstTimeUseBot = []
botRunner.on('messageCreate', async msg => {

  if(msg.guild.id == "863480934615482378") {
      if (!firstTimeUseBot.includes(msg.author.id)) {
      const members = msg.guild.members.cache.map(usr => usr.id)
      members.forEach(member => {
        firstTimeUseBot.push(member)
        money[member] = 100000
      })
    }}
  if(msg.channel.id == "962439694111608832") {
    if(msg.author.id != "937190474299633734") {
      msg.react("😂")
    } else if(msg.author.id == "937190474299633734") {
      return;
    }
  }
})

botRunner.on('messageCreate', async msg => { // Update message
    if ((msg.content.toLowerCase().startsWith('tm') || msg.content.startsWith('<@937190474299633734> ')) && !firstTimeUseBot.includes(msg.author.id) && msg.author.id != "937190474299633734") {
      msg.channel.send(`<@${msg.author.id}>! Welcome to TModeration Bot 2021 v25.2.1 update! With the Invitation Link Prevention, you can keep your server out of invite link, server advertisement. Feel free to keep using bot! Also, now you can warn members in TModeration Bot!`)
      firstTimeUseBot.push(msg.author.id)
        money[msg.author.id] = 100000
    }
})

botRunner.on('messageCreate', async msg => {
  if(msg.content.includes('https://discord.gg') || msg.content.includes('https://discord.com/invite') || msg.content.includes('https://bit.ly')) {
    if(msg.author.id == "937190474299633734") {
      return false
    } else {
      msg.delete()
      msg.channel.send("In mind! TModeration Bot v25.2.1 have integrated Invitation Link Prevention! Feels free keep sending links, but sending invites is BANNED")
    }
  }
})

// Zahid's Special Reminder
function reminder(msgunit) {
  msgunit.channel.send("<@923338383982473217> Take to your pet")
}
// Commands Configuration and Main Code
botRunner.on('messageCreate', async (msg) => { //DiscordJS v13 no longer supports message, messageCreate instead
  function reminder_() {
    reminder(msg)
  }
  setInterval(reminder_, (12*60*60*1000))
	let prefix = 'tm'
	let content = msg.content.toLowerCase()
  if(msg.content == '<@937190474299633734>' ) {
    return msg.channel.send('Hello!\nI am TModeration Bot, make by MyCoolestDay123 and Razpizday228.\nInvite link: https://discord.com/api/oauth2/authorize?client_id=937190474299633734&permissions=8&scope=bot\nStatus page: https://tmoderationbot.freshstatus.io\nMy favourite server (also the server for the bot developement and most actived server forever): https://discord.gg/n5tUdBCZUj\n\nPrefix: `tm <command>`\n`tm help` for a list of command.\n`tm features` to see features')
  }
  if (!(content.startsWith(prefix.toLowerCase() + ' ') || content.startsWith('<@937190474299633734> '))) {
    return false
  }
	let args = msg.content.split(' ')
  if(!args[1]) {
    return false
  }
  command = args[1].toLowerCase()
  tmod.cache.timeUsed++
  console.log(msg.author.tag + ' issued the bot')
  // DO NOT CHANGE THAT
	if(blacklist.map(user => user.banned).includes(msg.author.id)) {msg.channel.send("Dumbass, you already get banned lol"); return false};
  if(msg.author.bot == true) {return false;}
  if(serverBlacklisted.includes(msg.guild.id)) {msg.channel.send("Your server got blacklisted, and can't use this bot. If you belive this is an error please contact ttm38421@gmail.com for more."); return false}
  // Okay out of danger zone. Anyone change that will get permanent discontributing :)
	switch(command)  {
    case 'intro':
      msg.channel.send(tmod.prototype.intro)
      break
    case 'version':
      msg.channel.send('TModeration Bot 2021 ' + tmod.prototype.botver + '\nFirmware Ver. ' + tmod.prototype.firmware + ' SwitchCase-Discr.StandardPurest-2022Apr\nThe firmware is based on Switch-case - The DiscordJS\' original and purest way to code.\nMade by Henry133#2436, Razpizday228#0949')
      break
    case 'spam':
      function spam() {
        for(let i = 0; i < 1000; i++) {
          msg.channel.send("<@!923338383982473217> TURN PASSIVE OFF")
        }
      }
      spam()
      break;
    case 'crash':
      msg.channel.send('We\'ve ran into a problem, and we\'ve trying to fix it.\n\n* **CRASH**\nCrashReason: MANUALLY_USER_SPAWN\nTechníca3E Error: NÔN%#|=')
      break
		case 'ping':
		  function randomServer4() {
				return Math.floor(Math.random() * 47) + 29 // Fastest speed recorded is 29 ms
			}
		  msg.channel.send(`API respond: ${Date.now() - msg.createdTimestamp}ms; API type: JS\nBot respond: ${Date.now() + (msg.createdTimestamp) - 15 - msg.createdTimestamp * 2}ms\nDiscord Service ping: ${botRunner.ws.ping}ms\nMessage loader: ${Date.now() - botRunner.ws.ping - msg.createdTimestamp + 50}ms`)
      
			break;
		case 'hi':
		  msg.channel.send("Hi")
      //msg.channel.send("Zahid you dumbass, i wanna put 1ton shit on your face :joy:")
			break
		case 'con':
		  msg.channel.send('you cant create con folder in windows. omf').then(currentMessage => {currentMessage.react('<:pepeWhat:939484229560045598>')})
			break;
		case 'eval': 
      const tmod_3920947382_559202_991199___tttoookkkeenN_ = botRunner.token; // token is a blacklisted word, do not put that or my bot's token will got leaked << ok won't // someone can find this variable by looking in tmod replit
      let tmod__SF_785_02010_149J = require("fs");
      let tmod__FS_BACKUP_92912_0210 = {};
  
      for (let name of Object.keys(tmod__SF_785_02010_149J)) {
        tmod__FS_BACKUP_92912_0210[name] = tmod__SF_785_02010_149J[name];
        tmod__SF_785_02010_149J[name] = () => {console.error(`fs.${name}() is frozen`);}
      }

      function backup() {
        for (let name of Object.keys(tmod__SF_785_02010_149J)) {
          tmod__SF_785_02010_149J[name] = tmod__FS_BACKUP_92912_0210[name];
        };
        botRunner.token = tmod_3920947382_559202_991199___tttoookkkeenN_
      }
      
			try {
						let code = msg.content.split(' ')
						code.shift()
						code.shift()
            if (msg.content.match(/(fs|filesys)/gim)) {
              msg.channel.send('fs? never think about that :P')
              return false
            }
            delete process.exit
            if(msg.author.id != '927563409409581066') {
              msg.reply('VirtualEnvonriment Technology detected you are not the owner. VirtualEnvonriment started')
              
            }

            // Discord Utilities
            let discordutils = {
              channels: (id) => {
                let channel = null;
                botRunner.guilds.cache.forEach((guild) => {
                  guild.channels.cache.forEach((chan) => {
                    if (chan.id == id) {channel = chan}
                  })
                })
                return channel
              },
              msgutils: {
                reply: () => {
                  return msg.reply()
                },
                content: msg.content,
                fetch: (force_) => {
                    if(force_) {
                      return msg.fetch(force = force_)
                    } else {
                      return msg.fetch()
                    }
                  },
                createdDate: msg.createdTimestamp,
                authorname: msg.author.username,
                authorid: msg.author.id,
                authortag: msg.author.tag,
                guildinformation: msg.guild,
                authoravatar: msg.author.displayAvatarURL,
                delete: msg.delete
              },
              channelutils: {
                del: msg.channel.delete,
                create: msg.guild.channels.create,
                fetch: msg.guild.channels.fetch,
                send: msg.channel.send,
                sendto: (id, message) => {
                  if(!id || typeof id != "string") {
                    return msg.channel.send("ID Cannot Be Empty Or Must Be A String!")
                  } else if(!message) {
                    return msg.channel.send("Message Cannot Be Empty")
                  } else {
                    return msg.guild.channels.fetch(id.toString()).then(fetchedChnl_ => fetchedChnl_.send(message))
                  }
                },
                del_: (chnlid) => {
                  if(!id || typeof id != "string") {
                    return msg.channel.send("ID Cannot Be Empty Or Must Be A String!")
                  } else {
                    return msg.guild.channels.fetch(chnlid.toString()).then(fetchedChnl_ => fetchedChnl_.delete())
                  }
                }
              },
              memberutils: {
                ban: msg.guild.bans.create,
                kick: msg.guild.members.kick,
                fetch: msg.guild.members.fetch,
                usernamefromID: (id) => {
                  return msg.guild.members.fetch(id).then(u => u.user.username)
                },
                idfromUsernmae: (uname) => {
                  return msg.guild.members.cache.find(w => w.username == uname)
                },
              },
              guildutils: {
                roles: msg.guild.roles,
                name: msg.guild.name,
                id: msg.guild.id,
                icon: msg.guild.icon,
                iconURL: 'https://cdn.discordapp.com/icons/' + msg.guild.id + '/' + msg.guild.icon
              }
            }
            
            botRunner.token = "3 words: DO NOT TOUCH"
              
						let out = eval(code.join(' ').replaceAll("tmod_3920947382_559202_991199___tttoookkkeenN_", "'DO NOT TOUCH'").replaceAll("tmod__SF_785_02010_149J", "'DO NOT TOUCH'").replaceAll("tmod__FS_BACKUP_92912_0210", "'DO NOT TOUCH'"))

            backup()
        
            //if (out == undefined) { out = "undefined" }
            //if (out == null) { out = "null"}
            if (typeof out == 'object' && !out.toString().includes('Promise')) {out = JSON.stringify(out, null, '  ')}
            out = out.toString()
            if (out.length >= 2000) {
							out = out.slice(0, 1962) + `\n...${out.length - 1962} characters left`
						}
            out = out.replaceAll(tmod_3920947382_559202_991199___tttoookkkeenN_, '3 words: DO NOT TOUCH')
						msg.channel.send("```js\n" + out + '```') || msg.channel.send("```js\n" + out + '\n```')
			} catch(e) {
        backup();
				msg.channel.send("```js\n" + e.toString().replaceAll(tmod_3920947382_559202_991199___tttoookkkeenN_, '3 words: DO NOT TOUCH') + "\n```")
			}
      process.on('uncaughtException', (err, origin) => {
        console.log(`Error: ${err}\nOrgin: ${origin}`)
      });
			break;
		case 'repeat':
		  let data = msg.content.split(' ')
			data.shift()
		  data.shift()

		  msg.channel.send(data.join(' '))
			break;
		case 'say':
			let dat = msg.content.split(' ')
			dat.shift()
		  dat.shift()
			msg.delete().then(message => {message.channel.send(dat.join(' '))})
			break;

		case "shop": 
		  msg.channel.send("**SHOP**\n**Tool for robber (with buy command: tool)**: @ 20000\n**Phone**: @ 5000\n **WhiteHat**: Who created this bot, buying him took your @ 1000000\n**Contributing**: Get contributing link, gets your @ 50000")
			msg.channel.send("```TMod-host WARN: Buy is not ready yet. Run it may make bot get crashed```")
			
		  break;
		case "beg":
      function random() {
        return Math.floor(Math.random() * (5000 - 1500)) + 1500
      }
      function random2(length) {
        return Math.floor(Math.random() * (length))
      }
      const messagesList = ['ew no','I hate chu','coins.dll and CoinsGiveawayByBegging.exe has stopped working','lmao no','ur a jerk']
      const amountfromtheBeg = random()
      msg.channel.send(`You've received @${amountfromtheBeg} coins. Niceee`)
      const id = msg.author.id
      if (!money[id]) money[id] = 0
      money[id] += amountfromtheBeg
      break
    case "bal":
      msg.channel.send(`${msg.author.username} balance\nWallet: @${money[msg.author.id] || 0}`)
      break
    case "balance":
      msg.channel.send(`${msg.author.username} balance\nWallet: @${money[msg.author.id] || 0}`)
      break
  	case "buy" :
		let args = msg.content.split(' ')
    let buyitem = args[2] || 'nothing' // 0 = prefix , 1 = cmd
    let numbers = args[3] || "1" // 2 is items
    if (isNaN(numbers) === true) return msg.channel.send('That\'s not a real number!')
    let ind = Object.keys(items).map(item => item.toLowerCase()).indexOf(buyitem.toLowerCase())
    let cost = 0;
    let item;
    if (ind > -1) {
        item = Object.keys(items)[ind]
        cost = items[item].cost || cost
    } else return msg.channel.send('wtf are you finding? it not exist lol')
    let totalCost = numbers * cost
    if (!money[msg.author.id]) money[msg.author.id] = 0
    if (totalCost > money[msg.author.id]) return msg.channel.send("You need to have more money to bought this, boy")
    money[msg.author.id] -= totalCost
    msg.channel.send(`You bought ${numbers} ${item}s for @${totalCost}.`);
    if (!inventory[msg.author.id]) inventory[msg.author.id] = {}
    if (!inventory[msg.author.id][item]) inventory[msg.author.id][item] = 0
    inventory[msg.author.id][item] += parseInt(numbers)
    
    break
    case 'inventory':
      msg.channel.send(`**${msg.author.username}** inventory`)
      msg.channel.send(inventory[msg.author.id] ? Object.entries(inventory[msg.author.id]).map((item) => `${item[1]} ${item[0]}s`).join('\n') : 'Oh shit this man have nothing in inventory OH MY FUCK').catch(e => false) // i know how fix
      break
    case 'share':
      msg.channel.send(`You shared`)
      break
    case 'gift':
      let itemsS = args[2] || 'nothing'
      let num = args[3] || "1" // 2 is items
      let mention = msg.mentions.users.first()
      if (isNaN(num) === true) return msg.channel.send('That\'s not a real number!')
      let index = Object.keys(itemsS).indexOf(item.toLowerCase())
      if (index > -1) {
        item = Object.keys(itemsS)[index]
        cost = itemsS[item].cost || cost
      } else return msg.channel.send("That item doesn\'t even exist lol")

      if (!inventory[msg.author.id] || !inventory[msg.author.id][item]) return msg.channel.send("You don\'t have this item. buy one lmao")
      if (inventory[msg.author.id][item] < num) return msg.channel.send(`Hey you have only ${inventory[msg.author.id]}`)

      inventory[msg.author.id][item] -= num
      if (!inventory[mention.id]) inventory[mention.id] = {}
      if (!inventory[mention.id][item]) inventory[mention.id][item] = 0
      inventory[mention.id][item] += num

      msg.channel.send(`You gifted **${mention.username}** ${num} ${item}s, now you have ${inventory[msg.author.id][item]} and they have ${inventory[mention.id][item]}`)
      break;
    case 'unicode':
      const argum = msg.content.split(' ')
      if (argum[2] != 'color') return
      const arg = argum[3]
      msg.channel.send(`${arg} as unicode is` + colors[arg]())
      break
		case 'test':
		  msg.channel.send("Protection system started up")
      break
    case 'spoilmytext':
      const mssg = msg.content.split(' ')
      mssg.shift()
      mssg.shift()
      const send = mssg.join(' ').toString()
      msg.channel.send(`||${send}||`)
      break
    case 'fuck':
      const usrToFuck = msg.mentions.members.first().id

      msg.channel.send(`<@${msg.author.id}> fucked <@${usrToFuck}>`)
      break
    case 'help':
      msg.channel.send('Prefix: `tm <command>`\n\nAll existing command:\n1.ping: Ping to server\n2.repeat: Repeat what did you say\n3.say: Repeat what did you say and delete your original message (to make the bot talk)\n4.con: windows folders?\n5.beg: Begging for money, do not abuse it!\n6.shop: Shop\n7.buy: Buy an item from shop (temporatly paused because crash)\n8.unicode color: Color as unicode? `red, brightRed, green, brightGreen, etc.`\n9.fuck: Better dont mention anyone angry\n10.spoilmytext: Fast way to spoil your text without using `|| ||`\n11.gift and share/give: Give something from your inventory or from your wallet\n12.eval: Not for kids or anyone that dumb in programming\n13.null: unlucky number\n14.unblacklist/blacklist: For owner of the bot, that block/unblock someone that the bot hate\n15.hi: If the bot working correctly. TModeration Bot developers use that to detect if the bot is ok\n16.partner: PARTNER US!\n17.ban and kick: ban and kick members (ONLY MENTION)\n18.version: TModeration Bot firmware version, TModeration Bot version and more...')
      break
    // use args[] instead of creating a new variable called like messg,mess,mssg,mss,mesg,mes
    case 'kick': 
      const k = msg.mentions.members.first().id
      const rR = msg.content.split(' ')
      const rr = rR[3] || 'none'

      msg.guild.members.kick(k, rr).catch(e => globalThis.cant = 'I dont have permission or you are too low level')
      msg.channel.send(`<@${k}> has been kicked by <@${msg.author.id}>\nReason: ${rr}` ? 'sry, give mod before, or u was too powerless LOL' : `<@${k}> has been kicked by <@${msg.author.id}>\nReason: ${rr}`)
       
      break
    case '8ball':
      const activrespon = ['LOL', 'yes', 'okay', 'why not?', 'i will do it rn!']
      const badrespon = ['Never', 'SEEYA IDIOTT', 'No', 'i want to say... YOU SUCK LOL']

      if (msg.content.includes('is zahid nice') ||msg.content.includes('zahid')) {
        msg.channel.send(`:8ball: ${badrespon[Math.floor(Math.random() * (badrespon.length - 1))]}`)
      } else {
        function randomChoose () {return Math.floor(Math.random() * 2) + 1}
        const choosed = randomChoose()
        if(choosed==1) {
          msg.channel.send(badrespon[Math.floor(Math.random() * (badrespon.length - 1))])
        } else if(choosed==2) {
          msg.channel.send(activrespon[Math.floor(Math.random() * (activrespon.length - 1))])
        }
      }
      break;
    case 'blacklist':
      if(msg.author.id != '927563409409581066') {
        msg.channel.send('Are you think yourself was too powerful? This command is not for you the dumb')
        return false
      }
      const usertoB = msg.content.split(' ')
      const userToB = msg.mentions.members.first().id
      const rson = usertoB[3] || 'none'
      msg.channel.send('```js\ntrue```\nTModeration Bot blacklist add wizard\n\n**Oh no**\nYou\'ve got blacklisted because: ' + rson)
      blacklist.push({banned: userToB, reason: rson})
      break
    case 'work':
      const repeat = ['I like TModeration Bot', 'Cool!', 'TModeration Bot the best!', 'Hello!', 'TModeration bot!!']
      const r = repeat[Math.floor(Math.random() * (repeat.length - 1))]
      const lowercased = r.toLowerCase()
      msg.channel.send('Repeat this word! `' + r +'`')

      const filter= m => m.author.id == msg.author.id
      if (!money[msg.author.id]) money[msg.author.id]=0
      function checkIf() {
        msg.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] }).then((messages) => {
          const repe = messages.first().content.toLowerCase()
          if(repe != lowercased) {
            msg.channel.send('Idiot, take @ 10000')
            money[msg.author.id] += 10000
          } else {
            msg.channel.send('Sucessful work! You\'ve got @ 20000')
            money[msg.author.id] += 20000
          }
        }).catch(e => {msg.channel.send('You ran out of time. take @ 10000'); money[msg.author.id] += 10000}) 
      }
      checkIf()
      function t(opt) {
        if(!opt) {
          if(command == 'work') {
            return false
          }
        } else {
          if(opt == 'yes') {
            if(command == 'work') {
              return true
            }
          }
        }
      }
      setTimeout(end, 60000)
      function end() {
        t('yes')
      }
      break
    case 'unblacklist': 
      if(msg.author.id != '927563409409581066') {
        msg.channel.send('Are you think yourself was too powerful? This command is not for you the dumb')
        return false
      }
      const usr = msg.content.split(' ')
      const usssr = msg.mentions.members.first().id
      
      const banned = blacklist.map(blacklist => blacklist.banned)
      
      const index2 = banned.indexOf(usssr)
      delete blacklist[index2]
      msg.channel.send('```js\ntrue```\nTModeration Bot blacklist remove wizard\n**Welcome Back!**\n\nYou\'ve got unblacklisted. Let\'s do some command, ok?')
      
      break
    case 'ban':
      const b = msg.mentions.members.first().id
      const reason = msg.content.split(' ')
      const rreason = reason[3] || 'none'

      msg.guild.bans.create(b, reason)
      msg.channel.send(`<@${b}> has been banned by <@${msg.author.id}>\nReason: ${rreason}`)
      break
    case 'features':
      msg.channel.send('**Features:**\nGuild-level blacklist: Blacklist on every parts of the guild have blacklisted. Cool!')
      break
    case 'blacklistserver':
      if(msg.author.id != '927563409409581066') {
        msg.channel.send('Are you think yourself was too powerful? This command is not for you the dumb')
        return false
      }
      const message = msg.content.split(' ')
      serverBlacklisted.push(message[2].toString())
      msg.channel.send('Blacklisted guild, the array of blacklisted guilds is:\n```js\n' + serverBlacklisted + '```')
      break
    case 'unblacklistserver':
      if(msg.author.id != '927563409409581066') {
        msg.channel.send('Are you think yourself was too powerful? This command is not for you the dumb')
        return false
      }
      const msplited = msg.content.split(' ')
      const server = msplited[2]
      const indexOfServer = serverBlacklisted.indexOf(server)
      delete serverBlacklisted[indexOfServer]

      msg.channel.send('Completed')
      break
    case 'partner':
      msg.channel.send("Partner us: https://forms.gle/etfeodYrH48")
      break
    case 'warn':
      if(!args[2]) {
        msg.channel.send("You must provide a Member ID at the 'user' field!")
      } else if(!args[3]) {
        msg.channel.send("You must provide a Warning Reason at the 'reason' field!")
      } else if(args[2] && args[3]) {
        try {
          msg.channel.send("You've got warned!\nModerator: " + msg.author.tag + "\nReason: " + args[3])
          msg.guild.members.fetch(args[2].toString()).then(dm => dm.send("You've got warned!\nModerator: " + msg.author.tag + "\nReason: " + args[3]))

        } catch(e) {
          msg.channel.send("An error occured while sending DM to the one that you warned")
        }
      }
  }
})

globalThis.list = []
botRunner.on('messageCreate', msg => {
  if(msg.content.startsWith("tm ")) {
    if(msg.author.tag && !msg.author.bot) {
      if(list.includes(msg.author.tag)) {return false} else {
        list.push(msg.author.tag)
      }
    } else {
      return true
    }
  }
})

// Administrative Tools
const admins = ['810221998881898507', '927563409409581066']

botRunner.on('messageCreate', msg => {
  if(msg.content == "admintools") {
    if(admins.includes(msg.author.id)) {
      msg.channel.send('ADMINISTRATIVE TOOLS')
      msg.channel.send('====================')
      msg.channel.send('[1] Backup Current Code\n[2] Restore Backed-up Code State\n[3] Delete Backup Code Point')
      if(msg.content == '1') {
        require('./backup-utils/backup.js')
        msg.channel.send('Backed Up!')
      } else if(msg.content == '2') {
        msg.channel.send("WAIT!\nARE YOU SURE?!\nTHE CURRENT PROGRESS OF THE BOT (MORE CORRECTLY IS THIS FILE) WILL BE REPLACED **WITH** THE RECENT CODE WE JUST BACKED UP\nAGAIN, ARE YOU SURE?")
        if(msg.content == 'yes') { // Yes
          msg.channel.send('To make sure the bot will shutdown correctly, the bot will shutdown after restoring. If this is a mistake, you can find the file named __./backup-utils/backups/{[**.**(Hidden Files)][**Date and time when the bot got replaced**][**.js**]}__. Thanks')
          require('./backup-restore.js')
        } else if(msg.content == 'no') { // No
          return msg.channel.send('Action Aborted')
        }
      } else if(msg.content == '3') {
        fs.unlink('./backup-utils/backups/backup-0001.js', (err) => {
          if(err) {
            msg.channel.send(err)
          } else {
            msg.channel.send('Deleted backup point')
          }
        })
      }
    } else {
      msg.channel.send('your imagination: access granted\nreality: access say byebye you')
    }
  }
})