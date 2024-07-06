"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardResumeEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class ShardResumeEvent extends Event_1.Event {
    constructor(id, replayedEvents) {
        super(Events_1.Events.ShardResume);
        this.id = id;
        this.replayedEvents = replayedEvents;
    }
    getId() {
        return this.id;
    }
    getReplayedEvents() {
        return this.replayedEvents;
    }
}
exports.ShardResumeEvent = ShardResumeEvent;
//# sourceMappingURL=ShardResumeEvent.js.map