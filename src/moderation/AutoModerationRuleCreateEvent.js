"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationRuleCreateEvent = void 0;
const Events_1 = require("../Events");
const ModerationEvent_1 = require("./ModerationEvent");
class AutoModerationRuleCreateEvent extends ModerationEvent_1.ModerationEvent {
    constructor(autoModerationRule) {
        super(Events_1.Events.AutoModerationRuleCreate, autoModerationRule);
    }
}
exports.AutoModerationRuleCreateEvent = AutoModerationRuleCreateEvent;
//# sourceMappingURL=AutoModerationRuleCreateEvent.js.map