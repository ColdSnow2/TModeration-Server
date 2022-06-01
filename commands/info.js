const os = require("os")
const { MessageEmbed } = require("discord.js")

// Ping Command By: birb || DJRuv
command("ping", (msg) => {
  msg.reply(
    // Time between rn and when message was sent:
    `**Overall Response:** ${Date.now() - msg.createdTimestamp}ms\n` + 
    // Latency of the connected websocket (how long it takes for a message that's sent to reach us):
    `**Discord Gateway** ${client.ws.ping}ms\n` + 
    // The time between now and when the message was sent, not counting the time it took to go through
    // the discord websocket
    `**Message Handler:** ${Date.now() - msg.createdTimestamp - client.ws.ping }ms`
  );
});

command("process", msg => {
  const startUsage = process.cpuUsage();
  let mem = process.memoryUsage()
  let memPercent = (mem.heapUsed/mem.heapTotal)*100
  msg.channel.send(`**CPU Usage:** User: ${process.cpuUsage(startUsage).user} | system: ${process.cpuUsage(startUsage).system}
**Current working dir:** ${process.cwd()}
**Shell:** ${process.env.SHELL}
**User:** ${process.env.USER}
**Total Used Memory:** ${Math.round(mem.rss/(1e+6))} MB
Using ${Math.round(memPercent)}% of heap memory (${Math.round(mem.heapTotal/(1e+6))} MB).
C++ objects are using ${Math.round(mem.external/(1e+6))} MB of memory
**Platform:** ${process.platform}
**PID:** ${process.pid}
**Free Memory:** ${Math.round(os.freemem()/(1e+6))} MB
**Priority:** ${os.getPriority(process.pid)}
**Host Name:** ${os.hostname()}
**OS Release:** ${os.release()}
**Temporary File Directory:** ${os.tmpdir()}
**Total Memory:** ${Math.round(os.totalmem()/(1e+6))} MB
**OS Type:** ${os.type()}
**OS Uptime:** ${os.uptime()}
**OS Version:** ${os.version()}
**Architecture:** ${os.arch()}`
  //Node Version: ${process.lts} | ${String(process.sourceUrl).slice(process.sourceUrl.lastIndexOf('/')+1, process.sourceUrl.indexOf('.tar'))}
  );
})



function prettifyMS (ms) {
	let seconds = Math.round(ms/1000)
  let days     = Math.floor(seconds / (24*60*60));
      seconds -= days    * (24*60*60);
  let hours    = Math.floor(seconds / (60*60));
      seconds -= hours   * (60*60);
  let minutes  = Math.floor(seconds / (60));
      seconds -= minutes * (60);
  return ((0<days)?(days+" days, "):"")+hours+"h, "+minutes+"m and "+seconds+"s";
}


command("cpu", (msg) => {
	let embed = new MessageEmbed()
	for (const cpu of os.cpus()) {
		embed.addField(`__${cpu.model}__`, `Speed: ${cpu.speed} MHz
**User Time**: ${prettifyMS(cpu.times.user)}
**System Time**: ${prettifyMS(cpu.times.sys)}
**Idle Time**: ${prettifyMS(cpu.times.idle)}
**IRQ Time**: ${prettifyMS(cpu.times.irq)}
**NICE Time**: ${prettifyMS(cpu.times.nice)}`)	
	}
	msg.channel.send({embeds: [embed]})
})