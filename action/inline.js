// const bot = require("../core/bot");
// const { Markup } = require("telegraf")

// bot.command('inlineSilka' , ctx => {
//     const keyboard = Markup.inlineKeyboard(
//         [
//             Markup.urlButton('Google','google.com'),
//             Markup.urlButton('Author','t.me/uzmu4633')
//         ]
//     )
//     ctx.telegram.sendMessage(
//         ctx.from.id,
//         'Testing url buttons',{
//         reply_markup:keyboard
//         }
//     )
// })

// //callback button

// bot.command('inlineCallback_1' , ctx => {
//     const keyboard = Markup.inlineKeyboard(
//         [
//             Markup.callbackButton('Tester','inline'),
//         ]
//     )
//     ctx.telegram.sendMessage(
//         ctx.from.id,
//         'Quyidagi tugmalani birini tanlang',{
//         reply_markup:keyboard
//         }
//     )
// })
// bot.action("inline" , ctx =>{
//     ctx.editMessageText("Tesed")
// })

const bot = require("../core/bot");
const { Markup } = require("telegraf")

bot.command('inlineSilka' , ctx => {
    const keyboard = Markup.inlineKeyboard(
        [
            Markup.urlButton('Google','google.com'),
            Markup.urlButton('Author','t.me/uzmu4633')
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

bot.command('inlineCallback_1' , ctx => {
    const keyboard = Markup.inlineKeyboard(
        [
            Markup.callbackButton('Tester','inline'),
        ]
    )
    ctx.telegram.sendMessage(
        ctx.from.id,
        'Quyidagi tugmalani birini tanlang',{
        reply_markup:keyboard
        }
    )
})
bot.action("inline" , ctx =>{
    ctx.editMessageText("Tesed")
})