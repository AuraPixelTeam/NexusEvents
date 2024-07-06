"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReactionRemoveAllEvent = void 0;
const MessageEvent_1 = require("./MessageEvent");
const Events_1 = require("../Events");
class MessageReactionRemoveAllEvent extends MessageEvent_1.MessageEvent {
    constructor(message, reactions) {
        super(Events_1.Events.MessageReactionRemoveAll, message);
        this.reactions = reactions;
    }
    getReactions() {
        return this.reactions;
    }
}
exports.MessageReactionRemoveAllEvent = MessageReactionRemoveAllEvent;
//# sourceMappingURL=MessageReactionRemoveAllEvent.js.map