import { GuildScheduledEvent } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildScheduledEventUpdateEvent extends GuildEvent {
    oldGuildScheduledEvent: GuildScheduledEvent;
    newGuildScheduledEvent: GuildScheduledEvent;
    constructor(oldGuildScheduledEvent: GuildScheduledEvent, newGuildScheduledEvent: GuildScheduledEvent);
    getOldGuildScheduledEvent(): GuildScheduledEvent;
    getNewGuildScheduledEvent(): GuildScheduledEvent;
}
//# sourceMappingURL=GuildScheduledEventUpdateEvent.d.ts.map