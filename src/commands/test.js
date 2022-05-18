'use strict';

const { Command } = require('@sapphire/framework');
const { Modal, MessageActionRow, TextInputComponent } = require('discord.js');

module.exports = class extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'test',
      description: 'Test command',
      chatInputCommand: {
        register: true,
      },
    });
  }

  messageRun(message) {
    message.reply('Turn on Slash Commands or reboot.');
  }

  async chatInputRun(interaction) {
    const modal = new Modal()
      .setTitle('test')
      .setCustomId('test_modal')
      .addComponents(
        new MessageActionRow().addComponents(
          new TextInputComponent()
            .setCustomId('input')
            .setLabel('Text')
            .setMinLength(1)
            .setMaxLength(32)
            .setPlaceholder('Write some text')
            .setStyle('SHORT')
            .setRequired(true),
        ),
      );

    await interaction.showModal(modal);
  }
};
