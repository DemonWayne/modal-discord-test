'use strict';

const { DISCORD_TOKEN } = require('dotenv').config();
const { SapphireClient } = require('@sapphire/framework');

const client = new SapphireClient({
  defaultPrefix: '/',
  disableMentionPrefix: true,
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
});

client.login(DISCORD_TOKEN);
