const { Webhook, MessageBuilder } = require('discord-webhook-node')
const hook = new Webhook(process.env.WEBHOOK)
const { Database } = require('instant.db')
const db = new Database()

module.exports = () => {
    const x = db.get('restart')

    const embed = new MessageBuilder()
        .setTitle('Website')
        .setURL('https://www.null.com')
        .setDescription(`Website Restart (${x})`)
        .setTimestamp()
    hook.send(embed)

    db.add('restart', 1)
}
