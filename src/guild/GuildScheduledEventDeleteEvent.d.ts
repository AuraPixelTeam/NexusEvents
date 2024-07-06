import { GuildScheduledEvent } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildScheduledEventDeleteEvent extends GuildEvent {
    guildScheduledEvent: GuildScheduledEvent;
    constructor(guildScheduledEvent: GuildScheduledEvent);
    getGuildScheduledEvent(): GuildScheduledEvent;
}
//# sourceMappingURL=GuildScheduledEventDeleteEvent.d.ts.map