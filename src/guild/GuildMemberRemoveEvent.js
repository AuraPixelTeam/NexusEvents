"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMemberRemoveEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildMemberRemoveEvent extends GuildEvent_1.GuildEvent {
    /**
     * @param {GuildMember} guildMember
     */
    constructor(guildMember) {
        super(Events_1.Events.GuildMemberRemove, guildMember.guild);
        this.guildMember = guildMember;
    }
    /**
     * @returns {GuildMember}
     */
    getGuildMember() {
        return this.guildMember;
    }
}
exports.GuildMemberRemoveEvent = GuildMemberRemoveEvent;
//# sourceMappingURL=GuildMemberRemoveEvent.js.map