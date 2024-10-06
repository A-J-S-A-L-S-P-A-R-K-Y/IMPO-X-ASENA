const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");
     
   
const fetch = require('node-fetch');

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

await message.sendMessage(message.jid, i.url, { quoted : message }, i.type)
}

        }

    catch (error) {

        console.error('Error fetching media:', error);

        await message.reply('_Error !_');
	    
//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////
	 
	    let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let group1= ("120363319463425491@g.us");

let ajsal = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 𝙚𝙧𝙧𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙨𝙥𝙤𝙩𝙚𝙙 😮\n\n𝙁𝙧𝙤𝙢 :-" + oo);

await message.sendMessage(group1, ajsal);
	    
	//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////    
        
			}
		}
    }
  );


command({

    pattern: 'insta ?(.*)',
    fromMe: isPublic,
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


	    //////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////
	 
	    let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let group1= ("120363319463425491@g.us");

let ajsal = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 𝙚𝙧𝙧𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙨𝙥𝙤𝙩𝙚𝙙 😮\n\n𝙁𝙧𝙤𝙢 :-" + oo);

await message.sendMessage(group1, ajsal);
	    
	//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️///////

    }

});




command({

    pattern: 'story ?(.*)',
    fromMe: isPublic,
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

        return await message.reply(`_Enter a Instagram username!_\n*Eg:- Story media._get*`);

    }

    try {

      

        const axios = require('axios');

let res = await axios.get(`https://devstackx.in/v1/igstory/username?id=${match}`);
let result = res.data;
for (let i of result.data) {

await message.reply("_Sending Media !_");

await message.sendMessage(message.jid, i.url, { quoted : message }, i.type)
}

        }

    catch (error) {

        console.error('Error fetching media:', error);

        await message.reply(`_Error !_\n\n_No data available. The user might have a private account or the username is invalid.!_`);

//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️////////
	 
	    let ui = message.participant
let ee = ui.split("@")[0]
let oo = ("wa.me/+" + ee);
let group1= ("120363319463425491@g.us");

let ajsal = ("𝙃𝙚𝙮 𝙎𝙥𝙖𝙧𝙠𝙮,\n𝘼 𝙚𝙧𝙧𝙤𝙧 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙨𝙥𝙤𝙩𝙚𝙙 😮\n\n𝙁𝙧𝙤𝙢 :-" + oo);

await message.sendMessage(group1, ajsal);
	    
	//////ERROR SPOTER MESAAGE✅️✅️✅️✅️✅️✅️///////
	    
    }

});
