"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDeleteEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageDeleteEvent extends MessageEvent_1.MessageEvent {
    constructor(message) {
        super(Events_1.Events.MessageDelete, message);
    }
}
exports.MessageDeleteEvent = MessageDeleteEvent;
//# sourceMappingURL=MessageDeleteEvent.js.map