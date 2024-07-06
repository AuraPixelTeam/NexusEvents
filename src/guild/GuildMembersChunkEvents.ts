import { Collection, Guild } from "discord.js";
import { Events } from "../Events";
import { GuildEvent } from "./GuildEvent";

export class GuildMembersChunkEvents extends GuildEvent {

    members: any;
    chunk: any;
    /**
     * @param {Collection} members 
     * @param {Guild} guild
     * @param {*} chunk
     */
    constructor(members: any, guild: Guild, chunk: any) {
        super(Events.GuildMembersChunk, guild);
        this.members = members;
        this.chunk = chunk;
    }

    /**
     * @returns {Collection}
     */
    getMembers(): any {
        return this.members;
    }

    getChunk(): any {
        return this.chunk;
    }
}