import { GuildMember } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildMemberAvailableEvent extends GuildEvent {

    guildMember: GuildMember;
    /**
     * @param {GuildMember} guildMember 
     */
    constructor(guildMember: GuildMember) {
        super(Events.GuildMemberAvailable, guildMember.guild);
        this.guildMember = guildMember;
    }

    /**
     * @returns {GuildMember}
     */
    getGuildMember(): GuildMember {
        return this.guildMember;
    }
}