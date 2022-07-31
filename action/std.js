const axios = require("axios");
const {Composer} = require("telegraf");
const bot = require("../core/bot");
const {Markup} = require("telegraf");
const url="https://raw.githubusercontent.com/jheysonsaav/deno_website2/main/versions.json";
const composer = new Composer();
let versions = [];
let keyboards = [];
composer.command("std",async ctx => {
    let data =await axios.get(url)
        .then(res => {
            return res.data.std;
        })
        console.log(data)
        for (let version of data) {
            keyboards.push(
                [Markup.urlButton(`${version}`,`https://deno.land/std@${version}`)
            ]
            )
                }
        ctx.replyWithHTML("Choose version from the list: ",{
            reply_markup:Markup.inlineKeyboard(keyboards)
        })
        // console.log(data.std)
})

bot.use(composer.middleware());

