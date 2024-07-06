"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDeleteBulkEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageDeleteBulkEvent extends MessageEvent_1.MessageEvent {
    constructor(messages, channel) {
        super(Events_1.Events.MessageBulkDelete, null);
        this.messages = messages;
        this.channel = channel;
    }
    getMessages() {
        return this.messages;
    }
    getChannel() {
        return this.channel;
    }
}
exports.MessageDeleteBulkEvent = MessageDeleteBulkEvent;
//# sourceMappingURL=MessageDeleteBulkEvent.js.map