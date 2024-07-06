"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteEvent = void 0;
const Event_1 = require("../Event");
class InviteEvent extends Event_1.Event {
    constructor(eventName, invite) {
        super(eventName);
        this.invite = invite;
    }
    getInvite() {
        return this.invite;
    }
}
exports.InviteEvent = InviteEvent;
//# sourceMappingURL=InviteEvent.js.map