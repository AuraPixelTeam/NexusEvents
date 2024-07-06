import { GuildBan } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildBanRemoveEvent extends GuildEvent {
    guildBan: GuildBan;
    /**
     * @param {GuildBan} guildBan
     */
    constructor(guildBan: GuildBan);
    /**
     * @returns {GuildBan}
     */
    getGuildBan(): GuildBan;
}
//# sourceMappingURL=GuildBanRemoveEvent.d.ts.map