"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadDeleteEvent = void 0;
const Events_1 = require("../Events");
const ThreadEvent_1 = require("./ThreadEvent");
class ThreadDeleteEvent extends ThreadEvent_1.ThreadEvent {
    constructor(thread) {
        super(Events_1.Events.ThreadDelete, thread);
    }
}
exports.ThreadDeleteEvent = ThreadDeleteEvent;
//# sourceMappingURL=ThreadDeleteEvent.js.map