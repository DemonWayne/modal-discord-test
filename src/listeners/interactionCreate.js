'use strict';

const { Listener } = require('@sapphire/framework');

module.exports = class extends Listener {
  run(interaction) {
    if (!interaction.isModalSubmit()) return;
    const text = interaction.fields.getTextInputValue('input');
    interaction.reply(text);
  }
};
