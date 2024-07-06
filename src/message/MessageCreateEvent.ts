import { Message } from "discord.js";
import { MessageEvent } from "./MessageEvent";
import { Events } from "../Events";

export class MessageCreateEvent extends MessageEvent {
    constructor(message: Message) {
        super(Events.MessageCreate, message);
    }
}