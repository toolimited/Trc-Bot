const { Client } = require("discord.js")

module.exports = {
    name: "rEady",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log("The client is now ready!")
        client.user.setActivity("youtube.com/TheRavenCroaks", {type: "WATCHING"})
    }
}