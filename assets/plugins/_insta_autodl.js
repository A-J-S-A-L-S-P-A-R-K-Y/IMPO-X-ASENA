const {
    command,
    getJson,
   isPublic,    
    getBuffer
  } = require("../../lib/");
     
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
			

const mediaUrl = `https://api.eypz.c0m.in/aio?url=${match}`;

        const mediaData = await getJson(mediaUrl);
for (const media of mediaData.medias) {

            message.reply('_Sending Media !_', media.url);

            await message.sendFile(media.url);

}
			} catch (error) {

await message.reply('_Error !_');
        
			}
		}
    }
  );
