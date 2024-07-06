import { Role } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildRoleCreateEvent extends GuildEvent {
    role: Role;
    constructor(role: Role);
    getRole(): Role;
}
//# sourceMappingURL=GuildRoleCreateEvent.d.ts.map