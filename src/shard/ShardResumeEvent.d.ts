import { Event } from "../Event";
export declare class ShardResumeEvent extends Event {
    id: number;
    replayedEvents: number;
    constructor(id: number, replayedEvents: number);
    getId(): number;
    getReplayedEvents(): number;
}
//# sourceMappingURL=ShardResumeEvent.d.ts.map