const {
    command,
    getJson,
   isPrivate,    
    getBuffer
  } = require("../../lib/");
     
    command(
    {
      on: "text",
      fromMe: isPrivate,
      desc: "autodl",
      type: "user",
    },
    async (message, match) => {
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
