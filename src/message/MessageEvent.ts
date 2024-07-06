import { Message, PartialMessage } from "discord.js";
import { Event } from "../Event";

export class MessageEvent extends Event {

    message: Message | PartialMessage | null;

    /**
     * @param {string} eventName 
     * @param {Message|null} message 
     */
    constructor(eventName: string, message: Message | PartialMessage | null) {
        super(eventName);
        this.message = message;
    }

    /**
     * @returns {Message|null}
     */
    getMessage(): Message | PartialMessage | null {
        return this.message;
    }
}