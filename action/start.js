const bot = require("../core/bot")

bot.start(ctx =>{
    ctx.replyWithHTML(`${ctx.chat.first_name}`).then(r=>console.log(r))
})