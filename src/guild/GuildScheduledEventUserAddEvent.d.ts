import { GuildScheduledEvent, User } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildScheduledEventUserAddEvent extends GuildEvent {
    guildScheduledEvent: GuildScheduledEvent;
    user: User;
    constructor(guildScheduledEvent: GuildScheduledEvent, user: User);
    getGuildScheduledEvent(): GuildScheduledEvent;
    getUser(): User;
}
//# sourceMappingURL=GuildScheduledEventUserAddEvent.d.ts.map