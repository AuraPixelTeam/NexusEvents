import { Role } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildRoleDeleteEvent extends GuildEvent {
    role: Role;

    /**
     * @param {Role} role 
     */
    constructor(role: Role) {
        super(Events.GuildRoleDelete, role.guild);
        this.role = role;
    }

    /**
     * @returns {Role}
     */
    getRole(): Role {
        return this.role;
    }
}