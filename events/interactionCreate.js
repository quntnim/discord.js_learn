module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		console.log(`"${interaction.user.tag}" 님이 #${interaction.channel.name} 에서 명령어를 실행했어요.`);

		// 버튼 입력 받기
		if (!interaction.isButton()) return;

		if (interaction.customId === 'test') {
			await interaction.update({ content: '버튼을 눌렀어요!', components: [] });
		}

		if (interaction.customId === 'test2') {
			await interaction.update({ content: '초록 버튼을 눌렀어요!', components: [] });
		}

		if (interaction.customId === 'test3') {
			await interaction.update({ content: '빨간 버튼을 눌렀어요!', components: [] });
		}

		if (interaction.customId === 'test4') {
			await interaction.update({ content: '회색 버튼을 눌렀어요!', components: [] });
		}
	},
};	