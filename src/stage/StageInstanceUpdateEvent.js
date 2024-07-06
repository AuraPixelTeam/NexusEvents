"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageInstanceUpdateEvent = void 0;
const Events_1 = require("../Events");
const StageEvent_1 = require("./StageEvent");
class StageInstanceUpdateEvent extends StageEvent_1.StageEvent {
    constructor(oldStageInstance, newStageInstance) {
        super(Events_1.Events.StageInstanceUpdate, newStageInstance);
        this.oldStageInstance = oldStageInstance;
    }
    getOldStageInstance() {
        return this.oldStageInstance;
    }
}
exports.StageInstanceUpdateEvent = StageInstanceUpdateEvent;
//# sourceMappingURL=StageInstanceUpdateEvent.js.map