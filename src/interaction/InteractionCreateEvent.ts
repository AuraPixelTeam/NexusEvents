import { BaseInteraction } from "discord.js";
import { InteractionEvent } from "./InteractionEvent";
import { Events } from "../Events";

export class InteractionCreateEvent extends InteractionEvent {

    constructor(interaction: BaseInteraction) {
        super(Events.InteractionCreate, interaction);
    }
}