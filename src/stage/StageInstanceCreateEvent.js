"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageInstanceCreateEvent = void 0;
const Events_1 = require("../Events");
const StageEvent_1 = require("./StageEvent");
class StageInstanceCreateEvent extends StageEvent_1.StageEvent {
    constructor(stageInstance) {
        super(Events_1.Events.StageInstanceCreate, stageInstance);
    }
}
exports.StageInstanceCreateEvent = StageInstanceCreateEvent;
//# sourceMappingURL=StageInstanceCreateEvent.js.map