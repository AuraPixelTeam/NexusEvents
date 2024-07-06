import { GuildScheduledEvent, User } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildScheduledEventUserRemoveEvent extends GuildEvent {
    guildScheduledEvent: GuildScheduledEvent;
    user: User;
    constructor(guildScheduledEvent: GuildScheduledEvent, user: User);
    getGuildScheduledEvent(): GuildScheduledEvent;
    getUser(): User;
}
//# sourceMappingURL=GuildScheduledEventUserRemoveEvent.d.ts.map