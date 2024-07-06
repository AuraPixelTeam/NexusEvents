import { GuildMember } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildMemberUpdateEvent extends GuildEvent {
    oldMember: GuildMember;
    newMember: GuildMember;

    constructor(oldMember: GuildMember, newMember: GuildMember) {
        super(Events.GuildMemberUpdate, newMember.guild);
        this.oldMember = oldMember;
        this.newMember = newMember;
    }

    getOldMember(): GuildMember {
        return this.oldMember;
    }

    getNewMember(): GuildMember {
        return this.newMember;
    }
}