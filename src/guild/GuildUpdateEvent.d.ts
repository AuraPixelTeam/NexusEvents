import { Guild } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildUpdateEvent extends GuildEvent {
    oldGuild: Guild;
    constructor(oldGuild: Guild, newGuild: Guild);
    getOldGuild(): Guild;
}
//# sourceMappingURL=GuildUpdateEvent.d.ts.map