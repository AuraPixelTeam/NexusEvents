import { Role } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildRoleUpdateEvent extends GuildEvent {
    oldRole: Role;
    newRole: Role;
    constructor(oldRole: Role, newRole: Role);
    getOldRole(): Role;
    getNewRole(): Role;
}
//# sourceMappingURL=GuildRoleUpdateEvent.d.ts.map