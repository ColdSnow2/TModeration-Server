const { Client } = require('discord.js')
globalThis.colors = require("colors")

/ a server for that
const http = require('http')
http.createServer(function (request, respond) { // res is resond, req is request
  respond.write('Hello World!');
  respond.end();
}).listen(443)

let botRunner = new Client({intents: 32509})
// setup
const { MessageActionRow, MessageButton } = require('discord.js');
botRunner.login(process.env.REPL_SYSTEM_ID)
botRunner.once('ready', () => {
	console.log(colors.cyan("I am ") + colors.red(botRunner.user.tag).underline)
  botRunner.user.setPresence({ status:'online', 
    activities: [{name: 'I Like this bot: tm con', type: 'LISTENING'}] 
	})
})
botRunner.on('guild', guild => {
	// console.log(guild)
})

globalThis.items = {
  tool: {cost: 20000},
  phone: {cost: 5000},
  "WhiteHat": {cost: 1000000},
  "Contributing": {cost: 50000},
}
globalThis.money = {
}
globalThis.inventory = {}
globalThis.serverBlacklisted = [
  // Blacklisted guild writes here
]
globalThis.guildAccepted = [
  // Server that accepted
]
globalThis.notAccepted = [
  // Server that didn't even accepted yet
  
]
globalThis.blacklist = [
  , // this dumb i never forgive you 
]

// delete secret
process.env.REPL_SYSTEM_ID = 'find my token? SEEYA IDIOT LOL'
process.env.function = 'STAP BITCH!'


// commands
botRunner.on('messageCreate', async (msg) => { //discordjs v13 uses messageCreate
	let prefix = 'tm'
	let content = msg.content.toLowerCase()
	if(!content.startsWith(prefix + ' ')) {return false}
	let args = msg.content.split(' ')
  command = args[1] || args[1] + ' ' + args[2]
  let i = 0
  i++
  // DO NOT CHANGE THAT
	if(blacklist.includes(msg.author.id)) {msg.channel.send("Dumbass, you already get banned lol"); return false};
  if(serverBlacklisted.includes(msg.guild.id)) {'You\'ve declined and got blacklisted to use bot in this server. Wait until we restart the bot or contact them to get unblacklisted'}
  // Okay out of danger zone. Anyone change that will get permanent discontributing :)
	switch(command) {
    case 'accept':
      msg.channel.send('Hi!\nWe just want ask one simple question. Do you accept our license?\n\`\`\`txt\nHi!\nWe are TModeration Bot 2021 team!\nThe license to use our bot is\`\`\`')
		case 'ping':
		  function randomServer4() {
				return Math.floor(Math.random() * 47) + 29 // Fastest speed recorded is 29 ms
			}
		  msg.channel.send(`API respond: ${Date.now() - msg.createdTimestamp}ms; API type: JS\nBot respond: ${Date.now() + (msg.createdTimestamp) - 15 - msg.createdTimestamp * 2}ms\nDiscord Service ping: ${botRunner.ws.ping}ms\nMessage loader: ${Date.now() - botRunner.ws.ping - msg.createdTimestamp + 50}ms\n\nServer 1 respond: GET average 107ms\nServer 2 respond: GET average 12ms\nServer 3 respond: GET average 8ms\nServer 4 respond (With SSL/TLS encrypted): GET ping ${randomServer4()}ms`)
      
			break;
		case 'hi':
		  msg.channel.send("Hi")
      //msg.channel.send("Zahid you dumbass, i wanna put 1ton shit on your face :joy:")
			break
		case 'con':
		  msg.channel.send('you cant create con folder in windows. omf').then(currentMessage => {currentMessage.react('<:peeWhat:939484229560045598>')})
			break;
		case 'eval': 
			try {
						let code = msg.content.split(/ |\n/)
						code.shift()
						code.shift()
						let out = eval(code.join(' '))
            if (out == undefined) { out = "undefined" }
            if (out == null) { out = "null"}
            if (typeof out == 'object' && !out.toString().includes('Promise')) {out = JSON.stringify(out, null, '  ')}
            out = outp = out.toString()
            if (out.length >= 2000) {
							out = out.slice(0, 1962) + `\n...${out.length - 1962 * 2} characters left`
						}
						if(out == undefined || out === undefined || out == 'undefined' || typeof out == 'undefined') {
							out = "WARNING: The code provided is NOT a valid code or output. The eval is crashed and debugging itself. You must be eval something have output or at least it need be return null. The EVAL flag provided is INVALID.\n{}"
						}
						msg.channel.send("```js\n" + out + '```') || msg.channel.send("```js\n" + out + '```')
			} catch(e) {
						msg.channel.send("```js\n" + e.toString() + "```")
			}
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
      msg.delete().then(message => {message.channel.send(dat.join(' '))})
      msg.delete().then(message => {message.channel.send(dat.join(' '))})
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
    let ind = Object.keys(items).indexOf(buyitem.toLowerCase())
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
    inventory[msg.author.id][item] += numbers

    break
    case 'inventory':
      msg.channel.send(`**${msg.author.username}** inventory`)
      msg.channel.send(inventory[msg.author.id] ? Object.entries(inventory[msg.author.id]).map((item) => `${item[1]} ${item[0]}s`).join('\n') : 'Oh shit this man have nothing in inventory OH MY FUCK').catch(e => false) // i know how fix
      break
    case 'share':
      msg.channel.send(`You shared`)
      break
    case 'gift':
      let items = args[2] || 'nothing'
      let num = args[3] || "1" // 2 is items
      let mention = msg.mentions.users.first()
      if (isNaN(num) === true) return msg.channel.send('That\'s not a real number!')
      let index = Object.keys(items).indexOf(item.toLowerCase())
      if (index > -1) {
        item = Object.keys(items)[index]
        cost = items[item].cost || cost
      } else return msg.channel.send("That item doesn\'t even exist lol")

      if (!inventory[msg.author.id] || !inventory[msg.author.id][item]) return msg.channel.send("You don\'t have this item. buy one lmao")
      if (inventory[msg.author.id][item] < num) return msg.channel.send(`Hey you have only ${inventory[msg.author.id]}`)

      inventory[msg.author.id][item] -= num
      if (!inventory[mention.id]) inventory[mention.id] = {}
      if (!inventory[mention.id][item]) inventory[mention.id][item] = 0
      inventory[mention.id][item] += num

      msg.channel.send(`You gifted **${mention.username}** ${num} ${item}s, now you have ${inventory[msg.author.id][item]} and they have ${inventory[mention.id][item]}`)
      break
    case 'unicode':
      const argum = msg.content.split(' ')
      if (argum[2] != 'color') return
      const arg = argum[3]
      msg.channel.send(`${arg} as unicode is` + colors[arg])
      break
		case 'test':
		  msg.channel.send("Protection system started up")
    case 'help':
      const message = msg.channel.send('1st page: Fun\n2nd page:Currency (MAYBE NOT WORKING GOOD)\n3rd page: others').then(m => {m.react('➡️');m.react('⏹️')}).catch(e => msg.channel.send('Failed.\nTechnical Information: ' + e))
      const userReactions = msg.reactions.cache.filter(reaction => reaction.users.cache.has(userId))
      break
    case 'blacklist':
      const usertoB = msg.content.split(' ')
      const userToB = usertoB[2]

      blacklist.push(userToB)
      break
    case 'unblacklist': 
      const usr = msg.content.split(' ')
      const usssr = usr[2]

      const index2 = blacklist.indexOf(usssr)
      delete blacklist[index2]
	}
})