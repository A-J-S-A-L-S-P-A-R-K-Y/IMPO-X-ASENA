const { command, isPublic } = require("../../lib");

command(
  {
    pattern: "hey",
    fromMe: isPublic,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
    let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴍᴇɴᴜ",
            id: "help",
          },
        },

        ///////✅️✅️✅️✅️😂/////

        
        
////////❤️❤️❤️❤️


{
          type: "url",
          params: {
            display_text: "ᴡᴩ-ᴄʜᴀɴɴᴇʟ",
            url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
            merchant_url: "https://whatsapp.com/channel/0029Va97vPqGU3BKjEyFQX3l",
          },
        },

      ],
      header: {
        title: "𝙈𝙚𝙙𝙞𝙖 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 _↓_💗",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "© ᴍᴇᴅɪᴀ ɢᴇᴛ",
      },
      body: {
        text: "\n_Hey !_\n_i'm a instagaram Video/Photo Downloader Whatsapp Bot._\n_Just paste a instagaram url for download_\n",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);
