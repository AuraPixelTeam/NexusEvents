import { Guild } from "discord.js";
import { Event } from "../Event.js";

export class GuildEvent extends Event {
    guild: Guild | null;

    /**
     * @param {string} eventName 
     * @param {Guild} guild 
     */
    constructor(eventName: string, guild: Guild | null) {
        super(eventName);
        this.guild = guild;
    }

    /**
     * @returns {Guild}
     */
    getGuild(): Guild | null {
        return this.guild;
    }
}