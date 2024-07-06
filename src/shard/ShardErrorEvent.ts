import { Event } from "../Event";
import { Events } from "../Events";

export class ShardErrorEvent extends Event {
    error: Error;
    shardId: number;

    constructor(error: Error, shardId: number) {
        super(Events.ShardError);
        this.error = error;
        this.shardId = shardId;
    }

    getError(): Error {
        return this.error;
    }

    getShardId(): number {
        return this.shardId;
    }
}