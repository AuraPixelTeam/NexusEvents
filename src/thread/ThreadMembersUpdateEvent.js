"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadMembersUpdateEvent = void 0;
const Events_1 = require("../Events");
const ThreadEvent_1 = require("./ThreadEvent");
class ThreadMembersUpdateEvent extends ThreadEvent_1.ThreadEvent {
    constructor(addedMembers, removedMembers, thread) {
        super(Events_1.Events.ThreadMembersUpdate, thread);
        this.addedMembers = addedMembers;
        this.removedMembers = removedMembers;
    }
    getAddedMembers() {
        return this.addedMembers;
    }
    getRemovedMembers() {
        return this.removedMembers;
    }
}
exports.ThreadMembersUpdateEvent = ThreadMembersUpdateEvent;
//# sourceMappingURL=ThreadMembersUpdateEvent.js.map