import { GuildMember } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildMemberAddEvent extends GuildEvent {
    guildMember: GuildMember;
    /**
     * @param {GuildMember} guildMember
     */
    constructor(guildMember: GuildMember);
    /**
     * @returns {GuildMember}
     */
    getGuildMember(): GuildMember;
}
//# sourceMappingURL=GuildMemberAddEvent.d.ts.map