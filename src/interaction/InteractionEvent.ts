import { BaseInteraction } from "discord.js";
import { Event } from "../Event";

export class InteractionEvent extends Event {

    interaction: BaseInteraction;

    /**
     * @param {string} eventName 
     * @param {BaseInteraction} interaction
     */
    constructor(eventName: string, interaction: BaseInteraction) {
        super(eventName);
        this.interaction = interaction;
    }

    /**
     * @returns {BaseInteraction}
     */
    getInteraction(): BaseInteraction {
        return this.interaction;
    }
}