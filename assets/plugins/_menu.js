const plugins = require("../../lib/plugins");
const { command, isPublic, clockString, pm2Uptime } = require("../../lib");
const { OWNER_NAME, BOT_NAME } = require("../../config");
const { hostname } = require("os");
const readMore = String.fromCharCode(8206).repeat(4001);


command(
  {
    pattern: "help",
    fromMe: isPublic,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match) => {
   
    if (match) {
      for (let i of plugins.commands) {
        if (
          i.pattern instanceof RegExp &&
          i.pattern.test(message.prefix + match)
        ) {
          const cmdName = i.pattern.toString().split(/\W+/)[1];
          message.reply(`\`\`\`Command: ${message.prefix}${cmdName.trim()}
Description: ${i.desc}\`\`\``);
        }
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `-----➤ *_Media Get💗_*`;
      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((command, num) => {
        if (command.pattern instanceof RegExp) {
          cmd = command.pattern.toString().split(/\W+/)[1];
        }

        if (!command.dontAddCommandList && cmd !== undefined) {
          let type = command.type ? command.type.toLowerCase() : "misc";

          cmnd.push({ cmd, type });

          if (!category.includes(type)) category.push(type);
        }
      });
     /* cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `\n\t⦿---- *${cmmd.toUpperCase()}* ----⦿\n`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }) => {
          menu += `\n⛥  _${cmd.trim()}_ `;
        });
        menu += `\n`;
      });*/

      menu += `\n`;
      menu += `_This is a insta Downloader WhatsApp Bot._\n_You can download Instagram Video/Photo with lighting speed. Just Paste the url_\n ${readMore}`;

      menu += `\n\n\n\n*Commamds*\n-----------\n➤ ping\n➤ help\n➤ alive\n➤ insta\n\n\n_Still Under Developing....!_`;
    return await message.sendMessage(message.jid,menu);
    }
  }
);


/*command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All Commands",
    type: "user",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = "\t\t```Command List```\n";

    let cmnd = [];
    let cmd, desc;
    plugins.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern.toString().split(/\W+/)[1];
      }
      desc = command.desc || false;

      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `\`\`\`${(num += 1)} ${cmd.trim()}\`\`\`\n`;
      if (desc) menu += `Use: \`\`\`${desc}\`\`\`\n\n`;
    });
    menu += ``;
    return await message.reply(menu);
  }
);*/

