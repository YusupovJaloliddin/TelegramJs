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

bot.use(composer.middleware());