"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageInstanceDeleteEvent = void 0;
const Events_1 = require("../Events");
const StageEvent_1 = require("./StageEvent");
class StageInstanceDeleteEvent extends StageEvent_1.StageEvent {
    constructor(stageInstance) {
        super(Events_1.Events.StageInstanceDelete, stageInstance);
    }
}
exports.StageInstanceDeleteEvent = StageInstanceDeleteEvent;
//# sourceMappingURL=StageInstanceDeleteEvent.js.map