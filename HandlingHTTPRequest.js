const http = require('http')
const https = require('https')
const colors = require('colors')

// API server
const express = require('express')
const app = express()
const port = 3000

app.get('/api/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.sendFile("./APIs/")
}).listen(443)

app.get('/api/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.sendFile("./html.txt")
}).listen(443)

app.listen(port, () => {
  console.log(`APIs [BETA] is listening ${port}`)
})

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
    <title>TModeration Bot 2021</title>
    <link href="https://cdn.discordapp.com/attachments/975412104741929021/979133266147827743/tmod.png" rel="icon" />
    <meta content="TModeration Bot 2021 Request Handler and Endpoint" property="og:title" />
    <meta content="TModeration Bot 2021 is a bot for moderation, fun, developing, and even economy." property="og:description" />
    <meta content="https://TModeration-Server.henry133.repl.co" property="og:url" />
    <meta content="#AAAAFF" data-react-helmet="true" name="theme-color" />
    <meta charset="UTF-8">
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="https://cdn.discordapp.com/avatars/937190474299633734/8590f67a81573dff234be8168904f025.webp?size=80" />
  <style>
  body {
    font-family: "Arial", "Helvetica", sans-serif;
    background-image: linear-gradient(to bottom right, grey, white);
  }
  .centre {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
   
   
  <body class="centre">
    <center><h3>Thanks for using TModeration Bot 2021! ⭐</h3>
    <p>Feel free to close this page.</p>
    </center>
  </body>
`);
  respond.end();
}).listen(443)
// ***************************************** //