const {
    command,
	getJson,
  } = require("../../lib/");
  const util = require("util");

  command(
    {
      on: "text",
      fromMe: true,
      desc: "eval",
      type: "user",
    },
    async (message, match) => {
        if (match.startsWith(">")) {
			try {
				let evaled = await eval(`(async () => { ${match.replace(">", "")} })()`);
				if (typeof evaled !== "string") evaled = util.inspect(evaled);
				await message.reply(`${evaled}`)
			} catch (err) {
				await message.reply(`${util.format(err)}`);
			}
		}
    }
  );
