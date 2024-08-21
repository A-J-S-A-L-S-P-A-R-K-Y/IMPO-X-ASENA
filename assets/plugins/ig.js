const {
  command,
  getUrl,
  igdl,
  isIgUrl,
  isPrivate,
  getJson,
  getBuffer
} = require("../../lib/");
command(
  {
    pattern: "insta",
    fromMe: isPrivate,
    desc: "To download instagram media",
    type: "user",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.sendMessage(message.jid, "Give me a link");
    const url = getUrl(match.trim())[0];
    if (!url) return await message.sendMessage(message.jid, "Invalid link");
    if (!isIgUrl(url))
      return await message.sendMessage(message.jid, "Invalid Instagram link");
    if (!isIgUrl(match.trim()))
      return await message.sendMessage(message.jid, "Invalid Instagram link");
    try {
      const data = await getJson(
        `https://api.thexapi.xyz/api/v1/download/instagram?url=${url}`
      );

      if (data.data?.length == 0)
        return await message.sendMessage(
          message.jid,
          "No media found on the link"
        );
      data.data.forEach(async (url) => {
        await message.sendFile(url);
      });
    } catch (e) {
      await message.sendMessage(message.jid, "Error: " + e);
    }
  }
);

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
				let response = await getJson(`https://viper.xasena.me/api/insta?url=${match}`);
			for (let i of response.data) {
				await message.sendFile(i.url);
			}
			} catch (err) {
        return;
			}
		}
    }
  );
