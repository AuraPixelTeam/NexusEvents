import { Event } from "../Event";
export declare class ShardErrorEvent extends Event {
    error: Error;
    shardId: number;
    constructor(error: Error, shardId: number);
    getError(): Error;
    getShardId(): number;
}
//# sourceMappingURL=ShardErrorEvent.d.ts.map