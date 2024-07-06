"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildMemberUpdateEvent = void 0;
const Events_1 = require("../Events");
const GuildEvent_1 = require("./GuildEvent");
class GuildMemberUpdateEvent extends GuildEvent_1.GuildEvent {
    constructor(oldMember, newMember) {
        super(Events_1.Events.GuildMemberUpdate, newMember.guild);
        this.oldMember = oldMember;
        this.newMember = newMember;
    }
    getOldMember() {
        return this.oldMember;
    }
    getNewMember() {
        return this.newMember;
    }
}
exports.GuildMemberUpdateEvent = GuildMemberUpdateEvent;
//# sourceMappingURL=GuildMemberUpdateEvent.js.map