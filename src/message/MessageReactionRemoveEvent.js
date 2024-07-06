"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionRemoveEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageReactionRemoveEvent extends MessageEvent_1.MessageEvent {
    constructor(messageReaction, user) {
        super(Events_1.Events.MessageReactionRemove, messageReaction.message);
        this.messageReaction = messageReaction;
        this.user = user;
    }
    getMessageReaction() {
        return this.messageReaction;
    }
    getUser() {
        return this.user;
    }
}
exports.MessageReactionRemoveEvent = MessageReactionRemoveEvent;
//# sourceMappingURL=MessageReactionRemoveEvent.js.map