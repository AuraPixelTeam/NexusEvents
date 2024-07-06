"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationActionExecutionEvent = void 0;
const Events_1 = require("../Events");
const ModerationEvent_1 = require("./ModerationEvent");
class AutoModerationActionExecutionEvent extends ModerationEvent_1.ModerationEvent {
    constructor(autoModerationActionExecution) {
        super(Events_1.Events.AutoModerationActionExecution, null);
        this.autoModerationActionExecution = autoModerationActionExecution;
    }
    getAutoModerationActionExecution() {
        return this.autoModerationActionExecution;
    }
}
exports.AutoModerationActionExecutionEvent = AutoModerationActionExecutionEvent;
//# sourceMappingURL=AutoModerationActionExecutionEvent.js.map