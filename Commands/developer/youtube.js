const { CommandInteraction } = require("discord.js");

module.exports ={
    name: "youtube",
    description: "YOUTUBE",
    Permission: "@everyone",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction){
        interaction.reply({content: "https://www.youtube.com/c/TheRavenCroaks"})
    }
}