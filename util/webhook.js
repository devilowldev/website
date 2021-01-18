const { Webhook, MessageBuilder } = require('discord-webhook-node')
const hook = new Webhook(process.env.WEBHOOK)
const db = require('quick.db')

module.exports = () => {
  const x = db.get('restart')

    const embed = new MessageBuilder()
        .setTitle('Website')
        .setURL('https://www.devilowl.js.org')
        .setDescription(`Website Restart (${x})`)
        .setTimestamp()
    hook.send(embed)

    db.add('restart', 1)
}
