import { Guild } from "discord.js";
import { Event } from "../Event.js";
export declare class GuildEvent extends Event {
    guild: Guild | null;
    /**
     * @param {string} eventName
     * @param {Guild} guild
     */
    constructor(eventName: string, guild: Guild | null);
    /**
     * @returns {Guild}
     */
    getGuild(): Guild | null;
}
//# sourceMappingURL=GuildEvent.d.ts.map