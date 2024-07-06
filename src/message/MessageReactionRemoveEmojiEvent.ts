import { MessageReaction, User } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageReactionRemoveEmojiEvent extends MessageEvent {
    messageReaction: MessageReaction;

    constructor(messageReaction: MessageReaction, user: User) {
        super(Events.MessageReactionRemoveEmoji, messageReaction.message);
        this.messageReaction = messageReaction;
    }

    getMessageReaction(): MessageReaction {
        return this.messageReaction;
    }
}