"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionRemoveEmojiEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageReactionRemoveEmojiEvent extends MessageEvent_1.MessageEvent {
    constructor(messageReaction, user) {
        super(Events_1.Events.MessageReactionRemoveEmoji, messageReaction.message);
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
exports.MessageReactionRemoveEmojiEvent = MessageReactionRemoveEmojiEvent;
//# sourceMappingURL=MessageReactionRemoveEmojiEvent.js.map