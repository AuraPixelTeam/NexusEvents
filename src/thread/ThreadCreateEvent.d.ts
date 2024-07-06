import { ThreadChannel } from "discord.js";
import { ThreadEvent } from "./ThreadEvent";
export declare class ThreadCreateEvent extends ThreadEvent {
    newlyCreated: boolean;
    constructor(thread: ThreadChannel, newlyCreated: boolean);
    getNewlyCreated(): boolean;
}
//# sourceMappingURL=ThreadCreateEvent.d.ts.map