const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login('MTE3NTA3ODM2MjE2MzcwNzk3NA.GhMKlH.eM78qF9NlGWSS7U6MLeo75nX1rKu-ivYjmg1Rw');