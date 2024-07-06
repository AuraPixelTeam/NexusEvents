"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypingStartEvent = void 0;
const Event_1 = require("../Event");
const Events_1 = require("../Events");
class TypingStartEvent extends Event_1.Event {
    constructor(typing) {
        super(Events_1.Events.TypingStart);
        this.typing = typing;
    }
    getTyping() {
        return this.typing;
    }
}
exports.TypingStartEvent = TypingStartEvent;
//# sourceMappingURL=TypingStartEvent.js.map