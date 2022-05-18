'use strict';

import { Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';

module.exports = class extends Listener {
  run(client: Client) {
    this.container.logger.info(`Bot started and authorized as ${client.user!.tag}`);
  }
};
