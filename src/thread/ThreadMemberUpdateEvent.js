"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadMemberUpdateEvent = void 0;
const Events_1 = require("../Events");
const ThreadEvent_1 = require("./ThreadEvent");
class ThreadMemberUpdateEvent extends ThreadEvent_1.ThreadEvent {
    constructor(oldMember, newMember) {
        super(Events_1.Events.ThreadMemberUpdate, newMember.thread);
        this.oldMember = oldMember;
    }
    getOldMember() {
        return this.oldMember;
    }
    getNewMembers() {
        return this.newMember;
    }
}
exports.ThreadMemberUpdateEvent = ThreadMemberUpdateEvent;
//# sourceMappingURL=ThreadMemberUpdateEvent.js.map