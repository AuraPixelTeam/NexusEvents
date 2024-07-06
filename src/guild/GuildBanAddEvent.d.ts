import { GuildBan } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildBanAddEvent extends GuildEvent {
    guildBan: GuildBan;
    constructor(guildBan: GuildBan);
    getGuildBan(): GuildBan;
}
//# sourceMappingURL=GuildBanAddEvent.d.ts.map