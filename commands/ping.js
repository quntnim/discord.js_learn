const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
        async execute(interaction) {
            const sent = await interaction.reply({ content: '공 받는 중...', fetchReply: true });
interaction.editReply(`Pong! **${sent.createdTimestamp - interaction.createdTimestamp}ms.**`);

        },
};