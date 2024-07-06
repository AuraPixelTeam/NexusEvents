"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageEvent = void 0;
const Event_1 = require("../Event");
class StageEvent extends Event_1.Event {
    constructor(eventName, stageInstance) {
        super(eventName);
        this.stageInstance = stageInstance;
    }
    getStageInstance() {
        return this.stageInstance;
    }
}
exports.StageEvent = StageEvent;
//# sourceMappingURL=StageEvent.js.map