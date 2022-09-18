// const { Composer , Markup } = require("telegraf")
// const  bot  = require("../core/bot");
// const  axios  = require("axios");
// const fuzzy = require("fuzzy");
// const thumb_link = "https://denolib.github.io/high-res-deno-logo/deno_hr.png"
// const composer = new Composer();
// const url = "https://raw.githubusercontent.com/adelsz/deno_website2/master/database.json"

// composer.on("inline_query",async ({inlineQuery,answerInlineQuery}) =>{
//     let results = [];
//     let indexation = 0;
//     let database = await axios.get(url).then(res =>{
//         return res.data;
//     })
//     let packs = Object.keys(database).map(function(obj){return obj})
//     console.log(packs)

//     let similarities = fuzzy.filter(inlineQuery.query,packs).sort().slice(0,20);

//     let found = similarities.map(function (it){return it.string;})

//     for(let key of found){
//         let data = database[key];
//         let repo = data["repo"];
//         let auth = data["auth"];
//         let desc = data["desc"]
//         let deno = `https://deno.land/x/${key}`
//         let github = `https://github.com/${auth}/${repo}`
//         let prefix = key.replace(/_/g,' ');

//         let text = `<b>Package: </b>${prefix}\n`+
//             `<b>Description: </b>${desc}\n`
    
//         const keyboard = Markup.inlineKeyboard([
//             Markup.urlButton("GitHub",github),
//             Markup.urlButton("Deno",deno)
//         ],{columns:2})

//         let serializer = () =>{
//             const querylizer = {
//                 type:"article",
//                 id:++indexation,
//                 url:deno,
//                 title:prefix,
//                 description:desc,
//                 thumb_width:100,
//                 thumb_height:100,
//                 thumb_url:thumb_link,
//                 reply_markup:keyboard,
//                 input_message_content:{
//                     message_text:text,
//                     parse_mode:"HTML"
//                 }
//             }
//             results.push(querylizer);
//             indexation+=1;
//         }
//         serializer();
//     }
// return answerInlineQuery(results)
// })

// bot.use(composer.middleware());

const { Composer , Markup } = require("telegraf")
const  bot  = require("../core/bot");
const  axios  = require("axios");
const fuzzy = require("fuzzy");
const thumb_link = "https://denolib.github.io/high-res-deno-logo/deno_hr.png"
const composer = new Composer();
const url = "https://raw.githubusercontent.com/adelsz/deno_website2/master/database.json"

composer.on("inline_query",async ({inlineQuery,answerInlineQuery}) =>{
    let results = [];
    let indexation = 0;
    let database = await axios.get(url).then(res =>{
        return res.data;
    })
    let packs = Object.keys(database).map(function(obj){return obj})
    console.log(packs)

    let similarities = fuzzy.filter(inlineQuery.query,packs).sort().slice(0,20);

    let found = similarities.map(function (it){return it.string;})

    for(let key of found){
        let data = database[key];
        let repo = data["repo"];
        let auth = data["auth"];
        let desc = data["desc"]
        let deno = `https://deno.land/x/${key}`
        let github = `https://github.com/${auth}/${repo}`
        let prefix = key.replace(/_/g,' ');

        let text = `<b>Package: </b>${prefix}\n`+
            `<b>Description: </b>${desc}\n`
    
        const keyboard = Markup.inlineKeyboard([
            Markup.urlButton("GitHub",github),
            Markup.urlButton("Deno",deno)
        ],{columns:2})

        let serializer = () =>{
            const querylizer = {
                type:"article",
                id:++indexation,
                url:deno,
                title:prefix,
                description:desc,
                thumb_width:100,
                thumb_height:100,
                thumb_url:thumb_link,
                reply_markup:keyboard,
                input_message_content:{
                    message_text:text,
                    parse_mode:"HTML"
                }
            }
            results.push(querylizer);
            indexation+=1;
        }
        serializer();
    }
return answerInlineQuery(results)
})

bot.use(composer.middleware());