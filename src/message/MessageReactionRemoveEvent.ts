import { MessageReaction, User } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageReactionRemoveEvent extends MessageEvent {
    messageReaction: MessageReaction;
    user: User;

    constructor(messageReaction: MessageReaction, user: User) {
        super(Events.MessageReactionRemove, messageReaction.message);
        this.messageReaction = messageReaction;
        this.user = user;
    }

    getMessageReaction(): MessageReaction {
        return this.messageReaction;
    }

    getUser(): User {
        return this.user;
    }
}