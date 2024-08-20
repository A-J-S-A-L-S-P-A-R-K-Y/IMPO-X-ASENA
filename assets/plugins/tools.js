const {
  command,
  qrcode,
  Bitly,
  isPrivate,
  isUrl,
  readQr,
} = require("../../lib/");

const { downloadMediaMessage } = require("baileys");
const { getLyrics } = require("../../lib/functions");
const config = require("../../config");
command(
  {
    pattern: "vv",
    fromMe: isPrivate,
    desc: "Forwards The View once messsage",
    dontAddCommandList: true,
    type: "tool",
  },
  async (message, match, m) => {
    let buff = await m.quoted.download();
    return await message.sendFile(buff);
  }
);

// STATUS SAVER ( MAKE fromMe: false TO USE AS PUBLIC )
command(
  {
    on: "text",
    fromMe: !config.STATUS_SAVER,
    desc: "Save or Give Status Updates",
    dontAddCommandList: true,
    type: "Tool",
  },
  async (message, match, m) => {
    try {
      if (message.isGroup) return;
      const triggerKeywords = ["save", "send", "sent", "snt", "give", "snd"];
      const cmdz = match.toLowerCase().split(" ")[0];
      if (triggerKeywords.some((tr) => cmdz.includes(tr))) {
        const relayOptions = { messageId: m.quoted.key.id };
        return await message.client.relayMessage(
          message.jid,
          m.quoted.message,
          relayOptions
        );
      }
    } catch (error) {
      console.error("[Error]:", error);
    }
  }
);



