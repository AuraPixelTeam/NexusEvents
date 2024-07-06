import { GuildScheduledEvent } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildScheduledEventCreateEvent extends GuildEvent {
    guildScheduledEvent: GuildScheduledEvent;
    constructor(guildScheduledEvent: GuildScheduledEvent);
    getGuildScheduledEvent(): GuildScheduledEvent;
}
//# sourceMappingURL=GuildScheduledEventCreateEvent.d.ts.map