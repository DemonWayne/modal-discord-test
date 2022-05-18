'use strict';

import { config } from 'dotenv';
import { SapphireClient } from '@sapphire/framework';
config();

const client = new SapphireClient({
  defaultPrefix: '/',
  disableMentionPrefix: true,
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
});

client.login(process.env.DISCORD_TOKEN);
