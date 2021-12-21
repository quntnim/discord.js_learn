const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Button Export'),
        async execute(interaction, client) {
            const row = new MessageActionRow()
                            .addComponents(

                                new MessageButton()
                                    .setCustomId('test')
                                    .setLabel('버튼')
                                    .setStyle("PRIMARY"),                                    
                                    
                                new MessageButton()
                                    .setCustomId('test2')
                                    .setLabel('초록 버튼')
                                    .setStyle("SUCCESS"),     
                                    
                                new MessageButton()
                                    .setCustomId('test3')
                                    .setLabel('빨간 버튼')
                                    .setStyle("DANGER"),

                                new MessageButton()
                                    .setCustomId('test4')
                                    .setLabel('회색 버튼')
                                    .setStyle("SECONDARY"),

                                new MessageButton()
                                    .setCustomId('test5')
                                    .setLabel('못 누르는 버튼')
                                    .setStyle("PRIMARY")
                                    .setDisabled(true)

                            )
                            await interaction.reply({content: '버튼 테스트', components: [row]})
        }
};