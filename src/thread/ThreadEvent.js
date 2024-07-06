"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadEvent = void 0;
const Event_1 = require("../Event");
class ThreadEvent extends Event_1.Event {
    constructor(eventName, thread) {
        super(eventName);
        this.thread = thread;
    }
    getThread() {
        return this.thread;
    }
}
exports.ThreadEvent = ThreadEvent;
//# sourceMappingURL=ThreadEvent.js.map