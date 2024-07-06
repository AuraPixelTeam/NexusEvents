import { Role } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildRoleCreateEvent extends GuildEvent {
    role: Role;

    constructor(role: Role) {
        super(Events.GuildRoleCreate, role.guild);
        this.role = role;
    }

    getRole(): Role {
        return this.role;
    }
}