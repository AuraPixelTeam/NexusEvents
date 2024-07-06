"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMemberAddEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildMemberAddEvent extends GuildEvent_1.GuildEvent {
    /**
     * @param {GuildMember} guildMember
     */
    constructor(guildMember) {
        super(Events_1.Events.GuildMemberAdd, guildMember.guild);
        this.guildMember = guildMember;
    }
    /**
     * @returns {GuildMember}
     */
    getGuildMember() {
        return this.guildMember;
    }
}
exports.GuildMemberAddEvent = GuildMemberAddEvent;
//# sourceMappingURL=GuildMemberAddEvent.js.map