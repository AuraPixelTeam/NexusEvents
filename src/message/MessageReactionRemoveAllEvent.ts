import { Collection, Message, MessageReaction } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageReactionRemoveAllEvent extends MessageEvent {
    reactions: Collection<string, MessageReaction>;

    constructor(message: Message, reactions: Collection<string, MessageReaction>) {
        super(Events.MessageReactionRemoveAll, message);
        this.reactions = reactions;
    }

    getReactions(): Collection<string, MessageReaction> {
        return this.reactions;
    }
}