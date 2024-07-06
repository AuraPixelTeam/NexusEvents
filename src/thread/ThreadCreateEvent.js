"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateEvent = void 0;
const Events_1 = require("../Events");
const ThreadEvent_1 = require("./ThreadEvent");
class ThreadCreateEvent extends ThreadEvent_1.ThreadEvent {
    constructor(thread, newlyCreated) {
        super(Events_1.Events.ThreadCreate, thread);
        this.newlyCreated = newlyCreated;
    }
    getNewlyCreated() {
        return this.newlyCreated;
    }
}
exports.ThreadCreateEvent = ThreadCreateEvent;
//# sourceMappingURL=ThreadCreateEvent.js.map