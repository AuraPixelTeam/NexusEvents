"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoModerationRuleUpdateEvent = void 0;
const Events_js_1 = require("../Events.js");
const ModerationEvent_1 = require("./ModerationEvent");
class AutoModerationRuleUpdateEvent extends ModerationEvent_1.ModerationEvent {
    constructor(oldAutoModerationRule, newAutoModerationRule) {
        super(Events_js_1.Events.AutoModerationRuleUpdate, newAutoModerationRule);
        this.oldAutoModerationRule = oldAutoModerationRule;
    }
    getOldAutoModerationRule() {
        return this.oldAutoModerationRule;
    }
}
exports.AutoModerationRuleUpdateEvent = AutoModerationRuleUpdateEvent;
//# sourceMappingURL=AutoModerationRuleUpdateEvent.js.map