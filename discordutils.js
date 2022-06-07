module.exports = (msg) => {
  return {
    msgutils: {
      reply: () =>  msg.reply(),
      content: msg.content,
      fetch: (force_) => force_ ? msg.fetch(force = force_) : msg.fetch(),
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
      sendto: (id, message) => (!id || typeof id != "string") ? msg.channel.send("ID Cannot Be Empty Or Must Be A String!") : ((!message) ? msg.channel.send("Message Cannot Be Empty") : msg.guild.channels.fetch(id.toString()).then(fetchedChnl_ => fetchedChnl_.send(message))),
      del_: (chnlid) => (!id || typeof id != "string") ? msg.channel.send("ID Cannot Be Empty Or Must Be A String!") : msg.guild.channels.fetch(chnlid.toString()).then(fetchedChnl_ => fetchedChnl_.delete())
    },
    memberutils: {
      ban: msg.guild.bans.create,
      kick: msg.guild.members.kick,
      fetch: msg.guild.members.fetch,
      usernamefromID: (id) =>  msg.guild.members.fetch(id).then(u => u.user.username),
      idfromUsernmae: (uname) =>  msg.guild.members.cache.find(w => w.username == uname),
    },
    guildutils: {
      roles: msg.guild.roles,
      name: msg.guild.name,
      id: msg.guild.id,
      icon: msg.guild.icon,
      iconURL: 'https://cdn.discordapp.com/icons/' + msg.guild.id + '/' + msg.guild.icon
    }
  }
}