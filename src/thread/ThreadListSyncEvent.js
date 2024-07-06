"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadListSyncEvent = void 0;
const Events_1 = require("../Events");
const ThreadEvent_1 = require("./ThreadEvent");
class ThreadListSyncEvent extends ThreadEvent_1.ThreadEvent {
    constructor(threads, guild) {
        super(Events_1.Events.ThreadListSync, undefined);
        this.threads = threads;
        this.guild = guild;
    }
    getThreads() {
        return this.threads;
    }
    getGuild() {
        return this.guild;
    }
}
exports.ThreadListSyncEvent = ThreadListSyncEvent;
//# sourceMappingURL=ThreadListSyncEvent.js.map