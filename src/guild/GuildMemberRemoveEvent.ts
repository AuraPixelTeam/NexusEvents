import { GuildMember } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildMemberRemoveEvent extends GuildEvent {

    guildMember: GuildMember;
    /**
     * @param {GuildMember} guildMember 
     */
    constructor(guildMember: GuildMember) {
        super(Events.GuildMemberRemove, guildMember.guild);
        this.guildMember = guildMember;
    }

    /**
     * @returns {GuildMember}
     */
    getGuildMember(): GuildMember {
        return this.guildMember;
    }
}