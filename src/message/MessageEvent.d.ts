import { Message, PartialMessage } from "discord.js";
import { Event } from "../Event";
export declare class MessageEvent extends Event {
    message: Message | PartialMessage | null;
    /**
     * @param {string} eventName
     * @param {Message|null} message
     */
    constructor(eventName: string, message: Message | PartialMessage | null);
    /**
     * @returns {Message|null}
     */
    getMessage(): Message | PartialMessage | null;
}
//# sourceMappingURL=MessageEvent.d.ts.map