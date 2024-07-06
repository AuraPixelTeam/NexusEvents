import { Role } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildRoleDeleteEvent extends GuildEvent {
    role: Role;
    /**
     * @param {Role} role
     */
    constructor(role: Role);
    /**
     * @returns {Role}
     */
    getRole(): Role;
}
//# sourceMappingURL=GuildRoleDeleteEvent.d.ts.map