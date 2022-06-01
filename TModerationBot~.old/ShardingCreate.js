globalThis.createShard = (_token) => {
  // Sharding (NEW, Copied from Discord.JS Tutorial - https://discordjs.guide/sharding/#how-does-sharding-work)
  const { ShardingManager } = require('discord.js');
  const manager = new ShardingManager('./bot.js', { token: _token ?? process.env._tknn21_2949301 });
  manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
  manager.spawn();
}