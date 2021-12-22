module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`"${interaction.user.tag}" 님이 #${interaction.channel.name} 에서 명령어를 실행했어요.`);

		if (!interaction.isButton()) return;
		console.log(interaction);
	},
};	