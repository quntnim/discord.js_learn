const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu  } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Menu Export'),
        async execute(interaction, client) {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId('select')
                        .setPlaceholder('아무것도 선택하지 않음')
                        .addOptions([
                            {
                                label: '선택지 1',
                                description: '선택지 1의 설명이에요.',
                                value: 'first_option',
                            },
                            {
                                label: '선택지 2',
                                description: '선택지 2의 설명입니다.',
                                value: 'second_option',
                            },
                        ]),
                );
                await interaction.reply({ content: '메뉴 출력 테스트', components: [row] });
        }
}