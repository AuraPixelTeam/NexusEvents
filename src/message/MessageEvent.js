"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageEvent = void 0;
const Event_1 = require("../Event");
class MessageEvent extends Event_1.Event {
    /**
     * @param {string} eventName
     * @param {Message|null} message
     */
    constructor(eventName, message) {
        super(eventName);
        this.message = message;
    }
    /**
     * @returns {Message|null}
     */
    getMessage() {
        return this.message;
    }
}
exports.MessageEvent = MessageEvent;
//# sourceMappingURL=MessageEvent.js.map