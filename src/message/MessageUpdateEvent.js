"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageUpdateEvent extends MessageEvent_1.MessageEvent {
    constructor(oldMessage, newMessage) {
        super(Events_1.Events.MessageCreate, newMessage);
        this.oldMessage = oldMessage;
    }
    getOldMessage() {
        return this.oldMessage;
    }
}
exports.MessageUpdateEvent = MessageUpdateEvent;
//# sourceMappingURL=MessageUpdateEvent.js.map