import { ThreadChannel } from "discord.js";
import { Event } from "../Event";
export declare class ThreadEvent extends Event {
    thread: ThreadChannel | undefined;
    constructor(eventName: string, thread: ThreadChannel | undefined);
    getThread(): ThreadChannel | undefined;
}
//# sourceMappingURL=ThreadEvent.d.ts.map