"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceUpdateEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class PresenceUpdateEvent extends Event_1.Event {
    constructor(oldPresence, newPresence) {
        super(Events_1.Events.PresenceUpdate);
        this.oldPresence = oldPresence;
        this.newPresence = newPresence;
    }
    getOldPresence() {
        return this.oldPresence;
    }
    getNewPresence() {
        return this.newPresence;
    }
}
exports.PresenceUpdateEvent = PresenceUpdateEvent;
//# sourceMappingURL=PresenceUpdateEvent.js.map