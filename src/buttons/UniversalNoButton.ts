import { Button, Bot } from "../classes/Bot";
import {ButtonInteraction, ButtonStyle, ButtonBuilder} from "discord.js";

export default class extends Button {
    override build(): ButtonBuilder {
        return new ButtonBuilder()
            .setLabel("No")
            .setStyle(ButtonStyle.Danger)
            .setCustomId(this.id());
    }

    override id(): string {
        return "no";
    }

    override async run (interaction: ButtonInteraction, bot: Bot): Promise<void> {
        await interaction.deferUpdate();
        await interaction.deleteReply();
        await interaction.reply({content: "Action cancelled.", ephemeral: true});
    }

}