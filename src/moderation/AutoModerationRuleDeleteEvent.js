"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationRuleDeleteEvent = void 0;
const Events_1 = require("../Events");
const ModerationEvent_1 = require("./ModerationEvent");
class AutoModerationRuleDeleteEvent extends ModerationEvent_1.ModerationEvent {
    constructor(autoModerationRule) {
        super(Events_1.Events.AutoModerationRuleDelete, autoModerationRule);
    }
}
exports.AutoModerationRuleDeleteEvent = AutoModerationRuleDeleteEvent;
//# sourceMappingURL=AutoModerationRuleDeleteEvent.js.map