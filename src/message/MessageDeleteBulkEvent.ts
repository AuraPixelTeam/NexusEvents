import { Collection } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageDeleteBulkEvent extends MessageEvent {
    messages: Collection<any, any>;
    channel: any;

    constructor(messages: Collection<any, any>, channel: any) {
        super(Events.MessageBulkDelete, null);
        this.messages = messages;
        this.channel = channel;
    }

    getMessages(): Collection<any, any> {
        return this.messages;
    }

    getChannel(): any {
        return this.channel;
    }
}