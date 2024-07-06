import { Message } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageUpdateEvent extends MessageEvent {
    oldMessage: Message;

    constructor(oldMessage: Message, newMessage: Message) {
        super(Events.MessageCreate, newMessage);
        this.oldMessage = oldMessage;
    }

    getOldMessage(): Message {
        return this.oldMessage;
    }
}