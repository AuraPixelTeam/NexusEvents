"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMemberAvailableEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildMemberAvailableEvent extends GuildEvent_1.GuildEvent {
    /**
     * @param {GuildMember} guildMember
     */
    constructor(guildMember) {
        super(Events_1.Events.GuildMemberAvailable, guildMember.guild);
        this.guildMember = guildMember;
    }
    /**
     * @returns {GuildMember}
     */
    getGuildMember() {
        return this.guildMember;
    }
}
exports.GuildMemberAvailableEvent = GuildMemberAvailableEvent;
//# sourceMappingURL=GuildMemberAvailableEvent.js.map