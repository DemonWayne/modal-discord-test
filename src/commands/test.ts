'use strict';

import { Command } from '@sapphire/framework';
import { Modal, MessageActionRow, TextInputComponent, ModalActionRowComponent } from 'discord.js';

module.exports = class extends Command {
  constructor(context: Command.Context, options?: Command.Options) {
    super(context, {
      ...options,
      name: 'test',
      description: 'Test command',
      chatInputCommand: {
        register: true,
      },
    });
  }

  public async chatInputRun(interaction: Command.ChatInputInteraction) {
    const modal = new Modal()
      .setTitle('test')
      .setCustomId('test_modal')
      .addComponents(
        new MessageActionRow<ModalActionRowComponent>().addComponents(
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
