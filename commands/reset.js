command("reset", (msg) => {
  client.user.setAvatar("https://cdn.discordapp.com/embed/avatars/1.png")
  client.user.setUsername("TModeration Bot 2021")
  msg.reply("TModeration's avatar and username have been **reset** to normal.")
}, {
  staff: true
})