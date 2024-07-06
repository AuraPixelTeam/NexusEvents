import { Guild } from "discord.js";
import { ThreadEvent } from "./ThreadEvent";
export declare class ThreadListSyncEvent extends ThreadEvent {
    threads: any;
    guild: Guild;
    constructor(threads: any, guild: Guild);
    getThreads(): any;
    getGuild(): Guild;
}
//# sourceMappingURL=ThreadListSyncEvent.d.ts.map