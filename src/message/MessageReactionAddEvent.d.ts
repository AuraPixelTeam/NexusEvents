import { MessageReaction, User } from "discord.js";
import { MessageEvent } from "./MessageEvent";
export declare class MessageReactionAddEvent extends MessageEvent {
    messageReaction: MessageReaction;
    user: User;
    constructor(messageReaction: MessageReaction, user: User);
    getMessageReaction(): MessageReaction;
    getUser(): User;
}
//# sourceMappingURL=MessageReactionAddEvent.d.ts.map