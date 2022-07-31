const bot = require("../core/bot");
const message = require("../lib/message");

bot.help(ctx =>{
    ctx.replyWithHTML(message["help"]);
})