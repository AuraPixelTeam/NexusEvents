import { MessageReaction, User } from "discord.js";
import { MessageEvent } from "./MessageEvent";
export declare class MessageReactionRemoveEvent extends MessageEvent {
    messageReaction: MessageReaction;
    user: User;
    constructor(messageReaction: MessageReaction, user: User);
    getMessageReaction(): MessageReaction;
    getUser(): User;
}
//# sourceMappingURL=MessageReactionRemoveEvent.d.ts.map