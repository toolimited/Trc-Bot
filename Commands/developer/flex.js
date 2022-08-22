const { CommandInteraction } = require("discord.js");

module.exports ={
    name: "flex",
    description: "FLEX",
    Permission: "@everyone",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction){
        interaction.reply({content: "A KURVA ANYÁD"})
    }
}