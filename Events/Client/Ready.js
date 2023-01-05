const { Client } = require("discord.js")
const ms = require("ms")
const mongoose = require("mongoose");
const mongo = process.env.DATABASE;

module.exports = {
    name: "ready",

    /**
    * @param {Client} client
    */
    async execute(client) {

        const { user, ws } = client

        console.log(`${user.tag} is now online!`)

        setInterval(() => {

            const ping = ws.ping

            user.setActivity({
                name: `Ping: ${ping} ms`,
                type: 3,
            })

        }, ms("5s"))
        if (!mongo) return
        mongoose.connect(mongo, {
        useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => { console.log(" 💙 Database Connected!") }).catch(err => console.log(err))
    }
}