import { Collection } from "discord.js";
import { MessageEvent } from "./MessageEvent";
export declare class MessageDeleteBulkEvent extends MessageEvent {
    messages: Collection<any, any>;
    channel: any;
    constructor(messages: Collection<any, any>, channel: any);
    getMessages(): Collection<any, any>;
    getChannel(): any;
}
//# sourceMappingURL=MessageDeleteBulkEvent.d.ts.map