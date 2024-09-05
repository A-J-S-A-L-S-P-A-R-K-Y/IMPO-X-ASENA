const { command} = require("../../lib");
const axios = require("axios");
const fetch = require("node-fetch");

command(
{
on: "text",
fromMe: false,
dontAddCommandList: true
},
  async (message, 
match) => {
try {
  
  const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	    

if (match.startsWith("https://youtu", "https://youtube.com", "https://youtu.be", "https://www.youtube.com")) {
let response = await axios.get(`https://api.eypz.c0m.in/ytdl?url=${match}`);
let media = response.data;
let { title, 
        mp4,
        mp3,
       description,
       duration } = media.result;
let data = {
      jid: message.jid,
      button: [{
          type: "reply",
          params: {
            display_text: "ᴀᴜᴅɪᴏ",
            id: `ytaudiodlx ${mp3}`
          },
        },
{
          type: "reply",
          params: {
            display_text: "ᴠɪᴅᴇᴏ",
            id: `ytvideodlx ${mp3}`
          },
        },
      ],
      header: {
        title: "*YouTube Downloader*",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "© ᴍᴇᴅɪᴀ ɢᴇᴛ",
      },
      body: {
        text: `\n_Hey !_\n_Title : ${title}_\n_Description : ${description}_\n_Duration : ${duration}_\n\n*_Please click the button which format you want given below👇🏻_*\n`,
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
}
} catch (e) {
console.log(e);
}
});

command(
  {
    pattern: "ytaudiodlx",
    fromMe: false,
    type: "downloader",
    dontAddCommandList: true
  },
  async (message,
 match) => {
try {
if(match) await message.reply("_Downloading..._");
let Audiobuff = await (await fetch(match)).buffer();
return await message.sendMessage(
        message.jid,
        Audiobuff,
        {
          mimetype: "audio/mpeg",
          filename: `getmedia.mp3`,
          quoted: message.data
        },
        "audio"
      );
} catch (e) {
console.log(e);
}
 });
 
 command(
  {
    pattern: "ytvideodlx",
    fromMe: false,
    type: "downloader",
    dontAddCommandList: true
  },
  async (message,
 match) => {
try {
if(match) await message.reply("_Downloading..._");
let Videobuff = await (await fetch(match)).buffer();
return await message.sendMessage(
        message.jid,
        Videobuff,
        {
          mimetype: "video/mp4",
          quoted: message.data
        },
        "video"
      );
} catch (e) {
console.log(e);
}
 });
