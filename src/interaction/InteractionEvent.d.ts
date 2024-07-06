import { BaseInteraction } from "discord.js";
import { Event } from "../Event";
export declare class InteractionEvent extends Event {
    interaction: BaseInteraction;
    /**
     * @param {string} eventName
     * @param {BaseInteraction} interaction
     */
    constructor(eventName: string, interaction: BaseInteraction);
    /**
     * @returns {BaseInteraction}
     */
    getInteraction(): BaseInteraction;
}
//# sourceMappingURL=InteractionEvent.d.ts.map