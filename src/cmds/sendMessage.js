const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const config = require("../data/config.json");

var langConf = config.lang;
const l = require(`../lang/${langConf}.json`);
const embeds = require(`../data/embedSettings.json`);

module.exports = {
    category: "general",
    data: new SlashCommandBuilder()
        .setName("message")
        .setDescription("send an message.")
        .addStringOption(option =>
            option.setName("message")
            .addChoices(
                { name: "rules", value: "rules" },
                { name: "vacances (NL)", value: "vacances_nl" },
                { name: "vacances (EN)", value: "vacances_en" },
                { name: "vacances (DE)", value: "vacances_de" },
                { name: "stafftasks", value: "staff_tasks" },
                { name: "application (NL)", value: "app_nl"},
                { name: "application (EN)", value: "app_en"}
            )
                .setDescription(l.starsDesc)
                .setRequired(true))
        .addStringOption(option =>
            option.setName(l.reviewOptionTwo)
                .setDescription(l.reviewMsgDesc)
                .setRequired(true)),

    async execute(client, interaction) {

        let channel = client.channels.cache.get(config.suggestChannel);
        if (!channel) console.log(l.suggestionChannelInvalid);

        let embed = new EmbedBuilder()
            /*.setTitle("This command is not completed yet!")
            .setDescription("This will be completed ASAP!")
            .setThumbnail("https://cdn.discordapp.com/attachments/952109062676418580/1034796699933212802/logo_zion.png")
            //.setImage("https://cdn.discordapp.com/attachments/952109062676418580/1034796699933212802/logo_zion.png")
            .addFields(
                { name: "Meer informatie", value: "tja idk wat hier moet :joy:" },
                { name: `Botnaam`, value: `${client.user.username}` },
                { name: `Botnaam + tag`, value: `${client.user.tag}` },
        )*/
            .setTitle(`${l.suggestTitle} ${interaction.user.username}`)
            .setDescription(interaction.options.getString(l.suggestOptionOne))
            .addFields(
                { name: l.suggestWhyToAdd, value: interaction.options.getString(l.suggestOptionTwo) }
            )
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        await channel.send({ embeds: [embed] })

        interaction.reply({content: `\`\`\`diff\n+ ${l.suggestSent}\`\`\``, ephemeral: true})


    },
};