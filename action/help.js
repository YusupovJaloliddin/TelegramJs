const bot = require("../core/bot");

bot.help(ctx =>{
    let text = `<b>Bizning botimizda bajarilishi mumkin bo'lgan komandalar:</b>\n`+
    `/start - <code>botni ishga tushuruvchi komanda</code>\n`+
    `Author: <a href="https://google.com">Google</a>`
    ctx.replyWithHTML(text);
})