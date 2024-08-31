const { fromBuffer, mimeTypes } = require("file-type");
const { command, isPublic } = require("../../lib/");
command(
  {
    pattern: "ping",
    fromMe: isPublic,
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

command(
  {
    pattern: "alive",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    /*const start = new Date().getTime();
    await message.sendMessage(message.jid, "```Ping!```");
    const end = new Date().getTime();*/
    return await message.sendMessage(
      message.jid,
      "ī.am 𝙎𝙩𝙞𝙡𝙡 𝙖𝙡𝙞𝙫𝙚\n_Paste url for download_"
    );
  }
);


