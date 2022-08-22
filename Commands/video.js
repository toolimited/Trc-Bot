const { CommandInteraction } = require("discord.js");

module.exports ={
        name: "video",
         description: "video",
         guildOnly: config.guildId,
         Permission: "@everyone",
         /**
          * 
          * @param {CommandInteraction} interaction 
          */
    async run({ client, interaction }) {
        let req = (await client.request.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${client.config.youtubeChannelId}`)).items[0]
    
        interaction({
            content: `${client.config.latestVideoMessage.replace("{url}", req.link)}`,
            ephemeral: true
        })
    }
}