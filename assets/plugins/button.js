const { command, isPrivate } = require("../../lib");

command(
  {
    pattern: "hey",
    fromMe: true,
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
            display_text: "ᴏᴡɴᴇʀ",
            url: "https://wa.me/919539412641?text=_Hey !_",
            merchant_url: "https://wa.me/919539412641?text=_Hey !_",
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
