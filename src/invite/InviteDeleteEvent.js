"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteDeleteEvent = void 0;
const InviteEvent_1 = require("./InviteEvent");
const Events_1 = require("../Events");
class InviteDeleteEvent extends InviteEvent_1.InviteEvent {
    constructor(invite) {
        super(Events_1.Events.InviteDelete, invite);
    }
}
exports.InviteDeleteEvent = InviteDeleteEvent;
//# sourceMappingURL=InviteDeleteEvent.js.map