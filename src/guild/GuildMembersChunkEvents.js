"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMembersChunkEvents = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildMembersChunkEvents extends GuildEvent_1.GuildEvent {
    /**
     * @param {Collection} members
     * @param {Guild} guild
     * @param {*} chunk
     */
    constructor(members, guild, chunk) {
        super(Events_1.Events.GuildMembersChunk, guild);
        this.members = members;
        this.chunk = chunk;
    }
    /**
     * @returns {Collection}
     */
    getMembers() {
        return this.members;
    }
    getChunk() {
        return this.chunk;
    }
}
exports.GuildMembersChunkEvents = GuildMembersChunkEvents;
//# sourceMappingURL=GuildMembersChunkEvents.js.map