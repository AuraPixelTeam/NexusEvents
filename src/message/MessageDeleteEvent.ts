import { Message } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageDeleteEvent extends MessageEvent {
    constructor(message: Message) {
        super(Events.MessageDelete, message);
    }
}