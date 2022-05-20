'use strict';

import 'dotenv/config';
import { SapphireClient } from '@sapphire/framework';

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] });

client.login(process.env.DISCORD_TOKEN);
