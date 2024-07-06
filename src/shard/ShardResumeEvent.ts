import { Event } from "../Event";
import { Events } from "../Events";

export class ShardResumeEvent extends Event {
    id: number;
    replayedEvents: number;

    constructor(id: number, replayedEvents: number) {
        super(Events.ShardResume);
        this.id = id;
        this.replayedEvents = replayedEvents;
    }

    getId(): number {
        return this.id;
    }

    getReplayedEvents(): number {
        return this.replayedEvents;
    }
}