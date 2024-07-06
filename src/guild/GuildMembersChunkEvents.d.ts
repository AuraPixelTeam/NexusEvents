import { Guild } from "discord.js";
import { GuildEvent } from "./GuildEvent";
export declare class GuildMembersChunkEvents extends GuildEvent {
    members: any;
    chunk: any;
    /**
     * @param {Collection} members
     * @param {Guild} guild
     * @param {*} chunk
     */
    constructor(members: any, guild: Guild, chunk: any);
    /**
     * @returns {Collection}
     */
    getMembers(): any;
    getChunk(): any;
}
//# sourceMappingURL=GuildMembersChunkEvents.d.ts.map