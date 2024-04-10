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
                    { name: "application (NL)", value: "app_nl" },
                    { name: "application (EN)", value: "app_en" }
                )
                .setDescription(l.starsDesc)
                .setRequired(true)),

    async execute(client, interaction) {

        let channel = client.channels.cache.get(interaction.channel.id);
        let msg = interaction.options.getString("message");
        if (!channel) console.log(l.suggestionChannelInvalid);

        // rules NL

        let rules = new EmbedBuilder()
            .setTitle(`__Communityregels MikaFM__`)
            .setDescription(`Welkom bij de MikaFM Discord Server! Wij willen je vragen onze communityregels na te leven om voor een veilige en prettige ervaring te zorgen.`)
            .addFields(
                {
                    name: "Algemeen", value: `
                • Wees vriendelijk en respectvol naar elkaar.
                • Houd de communicatie in het Engels voor een betere interactie.
                • Gebruik geen aanstootgevende taal of beledigingen.
                • Respecteer elkaars mening en achtergronden.
                • Vermijd het verspreiden van geruchten of lasterlijke opmerkingen.
            `},
                {
                    name: "Chatgedrag", value: `
                • Geen spam of overmatige berichten.
                • Geen herhaalde berichten (flooding).
                • Geen capslock-gebruik (schreeuwen).
                • Gebruik geen grove taal of vulgaire opmerkingen.
                • Houd het gesprek relevant voor het kanaal.
                • Gebruik geen overmatig gebruik van emoji's of stickers.
            `},
                {
                    name: "Privacy en Veiligheid", value: `
                • Bescherm je eigen privacy en de privacy van anderen. Deel geen persoonlijke informatie.
                • Respecteer de privacy van anderen en deel geen gesprekken of privéberichten zonder toestemming.
                • Geen links of verwijzingen naar schadelijke websites of inhoud.
            `},
                {
                    name: "Moderatie en Hulp", value: `
                • Bij twijfel, vraag een moderator om hulp.
                • Respecteer de aanwijzingen van de moderatoren en beheerders.
                • Niet vragen om onderscheidende rollen of speciale privileges.
                • Gebruik het juiste kanaal voor vragen, suggesties en feedback.
                • Meld overtredingen van de regels bij de moderatoren.
            `}
            )
            .setFooter({ text: config.footer + ` | Laatst bijgewerkt: 10-4-2024` })
            .setColor(embeds.color.default)
            .setTimestamp();

        // vacancies NL

        let vacNL = new EmbedBuilder()
            .setTitle(`Sollicitatie`)
            .setDescription("Welkom bij MikaFM, bedankt voor uw aandacht in onze vacatures, wij willen vermelden dat deze posities vrijwillig zijn en er geen hoge werkdruk te verwachten is.")
            .addFields(
                {
                    name: "Neem het onderstaande bericht over:", value: `
                \`\`\`- Wat is uw aanspreeknaam?
                - Mag uw aanspreeknaam zichtbaar zijn in uw nickname?
                - Voor welke vacature wilt u solliciteren?
                - Heeft u al ervaring(en)? Zo niet, laat leeg.
                - Wat voor en hoeveel motivatie heeft u voor deze functie?
                - Overweegt u een tweede functie buiten uw eerste?
                - Heeft u aan andere projecten meegeholpen? Zo niet, laat leeg.\`\`\`\n\n###Bedankt voor uw bijdrage!
            `}
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // vacancies EN

        let vacEN = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // vacancies DE

        let vacDE = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // staffTasks NL

        let staffTasks = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // staffTasks EN

        let staffTasksEN = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // application NL

        let appNL = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // application EN

        let appEN = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()

        // application DE

        let appDE = new EmbedBuilder()
            .setTitle(`Door ${interaction.user.username}`)
            .setDescription("test12345")
            .addFields(
                { name: "test", value: "test123" }
            )
            .setFooter({ text: config.footer })
            .setColor(embeds.color.suggestion)
            .setTimestamp()


        if (msg === "rules") await channel.send({ embeds: [rules] });
        if (msg === "vacances_nl") await channel.send({ embeds: [vacNL] });
        if (msg === "vacances_en") await channel.send({ embeds: [vacEN] });
        if (msg === "vacances_de") await channel.send({ embeds: [vacDE] });
        if (msg === "staff_tasks") await channel.send({ embeds: [staffTasks] });
        if (msg === "app_nl") await channel.send({ embeds: [appNL] });
        if (msg === "app_en") await channel.send({ embeds: [appEN] });
        if (msg === "app_de") await channel.send({ embeds: [appDE] });


        interaction.reply({ content: `\`\`\`diff\n+ ${l.suggestSent}\`\`\``, ephemeral: true })


    },
};