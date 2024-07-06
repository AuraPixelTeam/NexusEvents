import { GuildMember } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildMemberAvailableEvent extends GuildEvent {
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
//# sourceMappingURL=GuildMemberAvailableEvent.d.ts.map