const fs = require('fs');
const { Client, Collection, Intents, ClientUser } = require('discord.js');
const { token } = require('./config.json');
const { MessageActionRow, MessageButton } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`Bot Ready!`);
});

client.on('interactionCreate', async interaction => {
    console.log(`"${interaction.user.tag}"님이 "#${interaction.channel.name}" 채널에서 명령어를 실행했어요`);

	if (!interaction.isCommand()) return;
    
    const command = client.commands.get(interaction.commandName);
        
    if (!command) return;
        
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: '명령어 실행중 오류가 발생했어요! code: -1', ephemeral: true });
    }
        
});
        

client.login(token);