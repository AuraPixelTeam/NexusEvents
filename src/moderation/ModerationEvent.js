"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationEvent = void 0;
const Event_js_1 = require("../Event.js");
class ModerationEvent extends Event_js_1.Event {
    constructor(eventName, autoModerationRule) {
        super(eventName);
        this.autoModerationRule = autoModerationRule;
    }
    getAutoModerationRule() {
        return this.autoModerationRule;
    }
}
exports.ModerationEvent = ModerationEvent;
//# sourceMappingURL=ModerationEvent.js.map