const bot = require("../core/bot");
const { Markup } = require("telegraf")

bot.command('inlineSilka' , ctx => {
    const keyboard = Markup.inlineKeyboard(
        [
            Markup.urlButton('Goole','google.com'),
        ]
    )
    ctx.telegram.sendMessage(
        ctx.from.id,
        'Testing url buttons',{
        reply_markup:keyboard
        }
    )
})

//callback button

bot.command('inlineCallback' , ctx => {
    const keyboard = Markup.inlineKeyboard(
        [
            Markup.callbackButton('Tester','inline'),
        ]
    )
    ctx.telegram.sendMessage(
        ctx.from.id,
        'Testing url buttons',{
        reply_markup:keyboard
        }
    )
})
bot.action("inline" , ctx =>{
    ctx.editMessageText("Tesed")
})