const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");
     
   
const fetch = require('node-fetch');

let CAPTION = ("© 𝙈𝙚𝙙𝙞𝙖 𝙂𝙚𝙩 💗");


command(
    {
      on: "text",
      fromMe: isPublic,
      desc: "autodl",
      type: "user",
    },
    async (message, match) => {

const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	    

	    
        if (match.startsWith("https://www.instagram.com")) {
			try {
			

const axios = require('axios');

let res = await axios.get(`https://viper.xasena.me/api/insta?url=${match}`);
let result = res.data;
for (let i of result.data) {

await message.reply("_Sending Media !_");

await message.client.sendMessage(message.jid,{video:{url:i.url},mimetype: 'video/mp4',
 caption: CAPTION 
       })


      }  

    } catch (error) {

        console.error('Error fetching media:', error);

        await message.reply('_Error !_');
        
			}
		}
    }
  );



command({

    pattern: 'insta ?(.*)',
    fromMe: true,
    desc: 'Send all media from Instagram URL.',
    type: 'downloader'

}, async (message, match, client) => {
	
/////griup funccnc✅️x✅️/////
	
	const metadata = await message.client.groupMetadata("120363238788652707@g.us") 
let arr = [];
for (let i of metadata.participants) {
      arr.push(i.id)
    }
if (!arr.includes(message.participant)) return message.reply("𝙃𝙚𝙮, 𝙮𝙤𝙪 𝙢𝙪𝙨𝙩 𝙟𝙤𝙞𝙣 𝙤𝙪𝙧 𝙤𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙜𝙧𝙤𝙪𝙥 𝙩𝙤 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝙗𝙤𝙩.\n\n\n_𝙅𝙤𝙞𝙣 ↓_\n\nhttps://chat.whatsapp.com/CjY0gvu41yEJcicze7xhwk")

	/////////group funx✅️✅️✅️✅️/////

    const instaUrl = match;

    if (!instaUrl) {

        return await message.reply('_Enter a Instagram Url !_');

    }

    try {

      

        const axios = require('axios');

let res = await axios.get(`https://viper.xasena.me/api/insta?url=${match}`);
let result = res.data;
for (let i of result.data) {

await message.reply("_Sending Media !_");

await message.sendMessage(message.jid, i.url, { quoted : message }, i.type)
}

        }

    catch (error) {

        console.error('Error fetching media:', error);

        await message.reply('_Error !_');

    }

});
