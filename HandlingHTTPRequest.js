const http = require('http')
const https = require('https')
const colors = require('colors')

// A handling server for TModeration Bot
// Credit: Henry133
// Helpers/Coders: Razpizday228
// Made by Henry133
//
// Feel free to copy. But DO NOT edit!
// ***************************************** //
http.createServer(function (request, respond) { // res is respond, req is request
  respond.writeHead(200 ,{'Content-Type': 'text/html'})
  respond.write(`
  <head>
    <title>TModeration Bot 2021 Server</title>
    <meta content="TModeration Bot 2021 Request Handler and Endpoint" property="og:title" />
    <meta content="TModeration Bot 2021 is a bot for moderation, fun, developing, and even economy." property="og:description" />
    <meta content="https://TModeration-Server.henry133.repl.co" property="og:url" />
    <meta content="#AAAAFF" data-react-helmet="true" name="theme-color" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="https://cdn.discordapp.com/avatars/937190474299633734/8590f67a81573dff234be8168904f025.webp?size=80" />
   


  <body>
    <center><h3>Thanks for using TModeration Bot!</h3>
    <p> You can close this page now </p>
    </center>
  </body>
`);
  respond.end();
}).listen(443)
// ***************************************** //