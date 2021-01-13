const { Webhook, MessageBuilder } = require('discord-webhook-node')
const hook = new Webhook(process.env.WEBHOOK)

module.exports = () => {
    const embed = new MessageBuilder()
        .setTitle('Website')
        .setURL('https://www.null.com')
        .setDescription(`Website Restart`)
        .setTimestamp()
    hook.send(embed)
}
