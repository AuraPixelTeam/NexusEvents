import { GuildMember } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildMemberUpdateEvent extends GuildEvent {
    oldMember: GuildMember;
    newMember: GuildMember;
    constructor(oldMember: GuildMember, newMember: GuildMember);
    getOldMember(): GuildMember;
    getNewMember(): GuildMember;
}
//# sourceMappingURL=GuildMemberUpdateEvent.d.ts.map