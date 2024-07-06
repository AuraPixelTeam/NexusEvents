"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteCreateEvent = void 0;
const InviteEvent_1 = require("./InviteEvent");
const Events_1 = require("../Events");
class InviteCreateEvent extends InviteEvent_1.InviteEvent {
    constructor(invite) {
        super(Events_1.Events.InviteCreate, invite);
    }
}
exports.InviteCreateEvent = InviteCreateEvent;
//# sourceMappingURL=InviteCreateEvent.js.map