import { Message } from "discord.js";
import { MessageEvent } from "./MessageEvent";
export declare class MessageUpdateEvent extends MessageEvent {
    oldMessage: Message;
    constructor(oldMessage: Message, newMessage: Message);
    getOldMessage(): Message;
}
//# sourceMappingURL=MessageUpdateEvent.d.ts.map