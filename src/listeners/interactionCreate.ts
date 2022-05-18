'use strict';

import { Listener }  from'@sapphire/framework';
import type { Interaction } from 'discord.js';

module.exports = class extends Listener {
  run(interaction: Interaction) {
    if (!interaction.isModalSubmit()) return;
    const text = interaction.fields.getTextInputValue('input');
    interaction.reply(`${text}`);
  }
};
