import { GuildMember } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildMemberRemoveEvent extends GuildEvent {
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
//# sourceMappingURL=GuildMemberRemoveEvent.d.ts.map