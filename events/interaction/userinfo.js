const { ContextMenuInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "rEady",
    type: "USER",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    async execute(interaction) {
        const target = await interaction.guild.members.fetch(interaction.targetId);

        const Response = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(targer.user.tag, target.user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(targer.user.tag, target.user.avatarURL({dynamic: true, size: 512}))
        .addField("ID", `${target.user.id}`)
        .addField("Roles", `${target.roles.cache.map(r => r).join(" ").replace("@everyone", "") || "None"}`)
        .addField("Member Since", `<t:${parseInt(target.joinedTimestamp) / 1000}:R>`, true)
        .addField("Discord User Since", `<t:${parseInt(target.createdTimestamp) / 1000}:R>`, true)

        interaction.reply({embeds: [Response], ephemeral: true})
    }
}