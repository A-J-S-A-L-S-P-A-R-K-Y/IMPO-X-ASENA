const { fromBuffer, mimeTypes } = require("file-type");
const { command, isPrivate } = require("../../lib/");
command(
  {
    pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    /*const start = new Date().getTime();
    await message.sendMessage(message.jid, "```Ping!```");
    const end = new Date().getTime();*/
    return await message.sendMessage(
      message.jid,
      "𝘏𝘦𝘺..!\n𝘋𝘰𝘯'𝘵 𝘊𝘰𝘮𝘱𝘢𝘳𝘦 𝘔𝘦 𝘸𝘪𝘵𝘩 𝘢𝘯𝘰𝘵𝘩𝘦𝘳 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘉𝘰𝘵𝘴 🙂"
    );
  }
);

