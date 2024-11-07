const { Axl } = require("../lib/");

Axl({
    pattern: "alive",
    desc: "To check ping",
    type: "user",
}, async ({ client, msg }) => {
    let pong = await client.sendMessage(msg.chat, { text: "_Checking..._" }, { quoted: msg });
    return await client.sendMessage(msg.chat, { text: `_I'm Still alive !_\n_Tyep help for help😌_`, edit: pong.key }, { quoted: msg });
});
