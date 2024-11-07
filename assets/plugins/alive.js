const { Axl } = require("../lib/");

Axl({
    pattern: "alive",
    desc: "To check ping",
    type: "user",
}, async ({ client, msg }) => {
    let pong = await client.sendMessage(msg.chat, { text: "_Checking..._" }, { quoted: msg });
    return await client.sendMessage(msg.chat, { text: `_I'm Still alive !_\n_Tyep help for help😌_`, edit: pong.key }, { quoted: msg });
});


command(
  {
    pattern: "usermen",
    fromMe: true,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
if(!match){return message.reply("_Wait a sec, don't know? 😵_")};
let jid = ("120363338794084249@g.us")

let data = await message.client.groupMetadata(jid);

let men = data.participants.map(i => i.id);


return await message.sendMessage(jid,match,{
    mentions: men 
}); 

  });

command(
  {
    pattern: "mediamen",
    fromMe: true,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
if(!match){return message.reply("_Hey sparky, You know 😌_")};
let jid = ("120363238788652707@g.us")

let data = await message.client.groupMetadata(jid);

let men = data.participants.map(i => i.id);


return await message.sendMessage(jid,match,{
    mentions: men 
}); 

  });
