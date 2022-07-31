const bot = require("../core/bot")

bot.on('text', ctx =>{
    ctx.replyWithHTML(ctx.message.text).then(r => console.log(r))
})