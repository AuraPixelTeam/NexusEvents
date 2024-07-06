import { Event } from "../Event";
import { Events } from "../Events";

export class ShardReadyEvent extends Event {
    id: number;
    unavailableGuilds: Set<any>;

    constructor(id: number, unavailableGuilds: Set<any>) {
        super(Events.ShardReady);
        this.id = id;
        this.unavailableGuilds = unavailableGuilds;
    }

    getId(): number {
        return this.id;
    }

    getUnavailableGuilds(): Set<any> {
        return this.unavailableGuilds;
    }
}