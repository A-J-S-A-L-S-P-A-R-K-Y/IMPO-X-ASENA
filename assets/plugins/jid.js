const { command, isAdmin, parsedJid } = require("../../lib");
const { exec } = require("child_process");
const { PausedChats, WarnDB } = require("../database");
const { WARN_COUNT } = require("../../config");
const { secondsToDHMS } = require("../../lib/functions");
const { saveWarn, resetWarn } = WarnDB;


command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.jid,
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);



command(
  {
    pattern: "uptime",
    fromMe: true,
    desc: "Check uptime of bot",
    type: "user",
  },
  async (message, match) => {
    message.reply(`*Uptime:* ${secondsToDHMS(process.uptime())}`);
  }
);
