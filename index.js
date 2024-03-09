 
const express = require("express");
const app = express()
app.listen(3000, () => {
 console.log("Colo Goated"); 
})

app.get("/", (req, res) => { 
  res.send("Sercs Community On Top If U Found Repl Link https://discord.gg/WSQ7ATKAz5"); 
})
const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 })
const { MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const { MessageEmbed } = require('discord.js');


 var fs = require('fs');

client.commands = new Discord.Collection(); //main command
client.aliases = new Discord.Collection();//aliases command
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands) {
 const commandName = file.split(".")[0]
 const command = require(`./Commands/${commandName}`)
 client.commands.set(commandName, command)
//here is the command aliases
 if (command.aliases) {
 command.aliases.forEach(alias => {
 client.aliases.set(alias, command)
 })
}
}

const ms = require("pretty-ms")

let prefix = "?"

client.on('messageCreate', async (message) => {
 if (message.content.startsWith(prefix)) {
 const args = message.content.slice(prefix.length).trim().split(/ +/g)
 const commandName = args.shift()
 const command = client.commands.get(commandName) || client.aliases.get(commandName);
 if (!command) return
 command.run(client, message, args)
 
 }


})

client.on("messageCreate", async message => {
  if(message.content.startsWith("!owner")) {
      message.channel.send(" My Owner Is Jdlpa/Serc | Thanks For Asking")
  message.delete()
  
    if (message.content.startsWith("!afk")) {
    let afk = await db.get(`afk_${message.author.id}`)
    if (afk === null) afk = false;

    if (afk === false) {
        await db.set(`afk_${message.author.id}`, true)
        message.channel.send("turned on afk");
    } else if (afk === true) {
        await db.set(`afk_${message.author.id}`, true)
        message.channel.send("turned off afk");
    }
}
  }
  if(message.content.startsWith("!thank")) {
let victim = message.mentions.users.first()
 if(!victim) message.reply("**Mention someone to thank.**")
 else{
 message.channel.send(`${victim} Was thanked by ${message.author}!`)

 }
 }
})

client.login(process.env.token)