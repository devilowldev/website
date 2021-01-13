const { Webhook, MessageBuilder } = require('discord-webhook-node')
const hook = new Webhook(process.env.WEBHOOK)
const db = require('quick.db')

module.exports = () => {
    const embed = new MessageBuilder()
        .setTitle('Website')
        .setURL('https://www.null.com')
        .setDescription(`Website Restart(${db.get('restart')})`)
        .setTimestamp()
    hook.send(embed)
    db.add('restart', 1)
}
