import { Collection, Message, MessageReaction } from "discord.js";
import { MessageEvent } from "./MessageEvent";
export declare class MessageReactionRemoveAllEvent extends MessageEvent {
    reactions: Collection<string, MessageReaction>;
    constructor(message: Message, reactions: Collection<string, MessageReaction>);
    getReactions(): Collection<string, MessageReaction>;
}
//# sourceMappingURL=MessageReactionRemoveAllEvent.d.ts.map