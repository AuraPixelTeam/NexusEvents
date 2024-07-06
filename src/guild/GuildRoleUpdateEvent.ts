import { Role } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildRoleUpdateEvent extends GuildEvent {
    oldRole: Role;
    newRole: Role;

    constructor(oldRole: Role, newRole: Role) {
        super(Events.GuildRoleUpdate, newRole.guild);
        this.oldRole = oldRole;
        this.newRole = newRole;
    }

    getOldRole(): Role {
        return this.oldRole;
    }

    getNewRole(): Role {
        return this.newRole;
    }
}