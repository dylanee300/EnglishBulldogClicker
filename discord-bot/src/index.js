const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN = 'TOKEN'; 

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const warnings = {}; 

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const args = message.content.trim().split(' ');
  const command = args.shift().toLowerCase();

  // commands
  if (command === '!ping') {
    return message.reply('Pong!');
  }

  if (command === '!test') {
    return message.reply('ok!');
  }


  // Warn command
  if (command === '!warn') {
    const target = message.mentions.members.first();
    const reason = args.slice(1).join(' ') || 'No reason provided';

    if (!target) return message.reply('Please mention a user to warn.');

    if (!warnings[target.id]) warnings[target.id] = [];
    warnings[target.id].push({
      reason,
      warnedBy: message.author.tag,
      date: new Date().toLocaleString()
    });

    message.channel.send(
      `${target.user.tag} has been warned.\nReason: ${reason}`
    );

    try {
      await target.send(`You have been warned in ${message.guild.name}.\nReason: ${reason}`);
    } catch (err) {
      console.log(`Couldn't DM ${target.user.tag}`);
    }
  }

  // Check warnings
  if (command === '!warnings') {
    const target = message.mentions.members.first();
    if (!target) return message.reply('Mention someone to check warnings.');

    const userWarnings = warnings[target.id];
    if (!userWarnings || userWarnings.length === 0) {
      return message.reply(`${target.user.tag} has no warnings.`);
    }

    const list = userWarnings
      .map((w, i) => `#${i + 1} – ${w.reason} (by ${w.warnedBy} on ${w.date})`)
      .join('\n');

    message.channel.send(`Warnings for ${target.user.tag}:\n${list}`);
  }
});

client.login(TOKEN);

