const { Composer } = require("telegraf")
const bot = require("../core/bot")
const message = require("../lib/message")
const keyboards = require("../lib/keyboard");

const composer = new Composer()
composer.start(ctx =>{
    ctx.replyWithHTML(message["start"],{
        reply_markup:keyboards["start"]
    }).then(r=>console.log(r))
})

composer.action("help",ctx=>{
    ctx.editMessageText(message["help"],{
        parse_mode:"HTML"
    })
})
composer.command("contact",ctx=>{
    ctx.reply("Please send your contact by pressing your contact", {
        reply_markup: {
        keyboard: [
            [
            {
                text: "📲 Send phone number",
                request_contact: true,
            },
            ],
        ],
        one_time_keyboard: true,
        },
    }).then(r=>console.log(r))
})
bot.use(composer.middleware());