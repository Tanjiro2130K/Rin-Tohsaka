const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('hi', {
            description: 'Says hi to the bot',
            category: 'general',
            usage: 'hi',
            aliases: ['hello'],
            exp: 15,
            cooldown: 5
        })
    }

    /**
     * @param {Message} m
     * @returns {Promise<void>}
     */

    execute = async (m) => {
        // return void m.reply(`Hello 👋 ${m.sender.username}`)
        // send a buttons message!
        const hello =[
            {buttonId: `${process.env.PREFIX}help`, buttonText: {displayText: `${process.env.PREFIX}help`}, types: 2},
     
     
        ]
        let buttonMessageds = {
         image: {url:"https://i.imgur.com/RSgecoh.jpg"},
         caption: `Hello 👋 *${m.sender.username}*` ,
         footer: `${this.helper.config.name}`,
         buttons: hello,
         headerType: 4
     }
     await this.client.sendMessage(m.from,buttonMessageds,{quoted:m.message})

    }
}
